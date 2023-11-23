import React, { useCallback, useEffect, useState } from "react";
import { Box, Link, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { jwtDecode } from "jwt-decode";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from "axios";

function CalendarTutor() {

    const [user, setUser] = useState([]);
    const [daysOfWeek, setDaysOfWeek] = useState([]);
    const [data, setData] = useState([]);
    const decodedToken = jwtDecode(localStorage.getItem('token'));
    const userId = decodedToken.id;

    const shouldDisplayUpdateButton = (date) => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');
        const currentDay = String(currentDate.getDate()).padStart(2, '0');
        const formattedCurrentDate = `${currentYear}-${currentMonth}-${currentDay}`;
        return formattedCurrentDate < date;
    };

    const fetchUser = useCallback(async () => {
        try {
            const response = await axios.get(
                `http://localhost:8081/educonnect/viewTutor?tutorId=${userId}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            setUser(response.data);
        } catch (error) {
            console.error(error);
        }
    }, [userId]);

    useEffect(() => {
        fetchUser();
    }, [userId, fetchUser]);

    useEffect(() => {
        axios
            .get(`http://localhost:8081/book/lesson`)
            .then((response) => {
                setDaysOfWeek(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        axios
            .get(`http://localhost:8081/book/timeline`)
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const [selectedWeek, setSelectedWeek] = useState('');
    const [week, setWeek] = useState('');
    const [year, setYear] = useState('');
    const [scheduleData, setScheduleData] = useState([]);

    const fetchStudentData = useCallback(async () => {
        try {
            const studentResponse = await axios.get(
                `http://localhost:8081/schedule/studentscheduletutor?tutorid=${userId}&week=${week}&year=${year}`
            );
            setScheduleData(studentResponse.data);
        } catch (error) {
            console.error(error);
        }
    }, [week, year, userId]);

    useEffect(() => {
        if (week && userId && year) {
            fetchStudentData();
        }
    }, [week, year, userId, fetchStudentData]);

    useEffect(() => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentWeek = getWeekNumber(currentDate);
        setYear(currentYear.toString());
        setWeek(currentWeek.toString());
    }, []);

    const handleWeekChange = (e) => {
        setSelectedWeek(e.target.value);
        const [selectedYear, selectedWeek] = e.target.value.split('-W');
        setYear(selectedYear);
        setWeek(selectedWeek);
    };

    const getWeekNumber = (date) => {
        const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
        const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
        return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
    };
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{
            marginBottom: "50px"
        }}>
            <Box>
                <Typography sx={{ fontSize: "20px", fontFamily: "cursive", fontWeight: "700", textAlign: "center", marginTop: "100px" }}>{user.fullname}</Typography>
                <Typography sx={{ fontSize: "20px", fontFamily: "cursive", fontWeight: "700", textAlign: "center", marginTop: "10px" }}>Mã Số Gia Sư: {userId}</Typography>
            </Box>
            <Box sx={{ backgroundColor: 'gray', width: '980px', marginLeft: 'auto', borderRadius: '20%', marginRight: 'auto', marginTop: "30px" }}>
                <TableContainer component={Paper} sx={{ width: '100%' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ padding: '20px 45px', backgroundColor: '#71C763' }}>\
                                    <TextField
                                        type="week"
                                        value={selectedWeek}
                                        onChange={handleWeekChange}
                                        sx={{ width: '100%' }}
                                    /></TableCell>
                                {daysOfWeek.map((day, index) => (
                                    <TableCell key={index} sx={{ padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: '#71C763' }}>{day.lessonline}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((itime, indextime) => (
                                <TableRow key={indextime}>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px', backgroundColor: '#71C763', color: 'white', textAlign: 'center', fontSize: '15px', fontFamily: 'cursive' }}>{itime.timeline} - {itime.endtime}</TableCell>
                                    {daysOfWeek.map((day, keydate) => {
                                        const item = scheduleData.find((data) => data.lessonline === day.lessonline && data.timeline === itime.timeline);
                                        return (
                                            <TableCell key={keydate} sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                                {item && (
                                                    <Box>
                                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                            {item.courses && (
                                                                <Typography sx={{ fontSize: '15px', fontFamily: 'cursive', fontWeight: '800', textAlign: 'center', marginRight: '10px' }}>{item.courses}</Typography>
                                                            )}
                                                            {shouldDisplayUpdateButton(item.scheduled_Date) && (
                                                                <MoreVertIcon sx={{ fontSize: '15px' }} onClick={handleClick} />

                                                            )}
                                                        </Box>
                                                        {item.fullname && (
                                                            <Typography sx={{ fontSize: '12px', fontFamily: 'cursive', fontWeight: '800', textAlign: 'center' }}>{item.fullname}</Typography>
                                                        )}
                                                        {item.linkMeet && (
                                                            <Link sx={{ fontSize: '15px', fontFamily: 'cursive', fontWeight: '200', textAlign: 'center', marginLeft: '10px', textDecoration: 'none' }} href={item.linkMeet} target="_blank" rel="noopener noreferrer">
                                                                Meet-URL
                                                            </Link>
                                                        )}
                                                    </Box>
                                                )}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Nghỉ học</MenuItem>
                </Menu>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                marginTop: "70px",
                marginLeft: '20px'
            }}>
                <Typography sx={{ fontSize: '20px', fontWeight: "700", color: "red" }}>Notes:</Typography>
                <Typography sx={{ fontSize: '20px', marginLeft: "7px", color: "#5E5D5D" }}> Bạn theo dõi lịch dạy để tham gia dạy học cho học sinh.</Typography>
            </Box>
        </Box>
    );
}

export default CalendarTutor;