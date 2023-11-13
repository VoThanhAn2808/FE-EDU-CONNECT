import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Checkbox } from '@mui/material';
import axios from "axios";
import { useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function BookTime() {
    const [data, setData] = useState([]);
    const { tutorId } = useParams();

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

    const [daysOfWeek, setDaysOfWeek] = useState([]);

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

    const [scheduleData, setScheduleData] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8081/book/timeandlesson?tutorid=${tutorId}`)
            .then((response) => {
                setScheduleData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [tutorId]);

    const decodedToken = jwtDecode(localStorage.getItem('token'));

    const [student, setStudent] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/student/viewstudent?email=" + decodedToken.sub)
            .then((response) => {
                setStudent(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [decodedToken.sub]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const response = await axios.delete(
                `http://localhost:8081/book/cancelbook?studentid=${student.studentid}`,
                config
            );
            window.location.href = '/homestudent';
            console.log(response.data);
        } catch (error) {
            console.error(error);
            console.log(error.response.data);
        }
    };

    const handlePaymentAndBooktime = async (event) => {
        event.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const configs = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };

        try {
            const paymentResponse = await axios.get(
                `http://localhost:8081/book/createpayment?studentid=${student.studentid}`,
                config
            );

            for (const checkbox of selectedCheckboxes) {
                const postData = {
                    studentid: student.studentid,
                    timeId: checkbox.timeId,
                    lessonid: checkbox.lessonid,
                };

                const booktimeResponse = await axios.post(
                    'http://localhost:8081/book/timebook',
                    postData,
                    configs
                );

                console.log('Đặt lịch thành công:', booktimeResponse.data);
            }

            window.location.href = paymentResponse.data.url;
            console.log('Thanh toán thành công:', paymentResponse.data);
        } catch (error) {
            console.error(error);
            console.log(error.response.data);
        }
    };

    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    const handleCheckboxChange = (item) => {
        if (selectedCheckboxes.includes(item)) {
            setSelectedCheckboxes(selectedCheckboxes.filter((checkbox) => checkbox !== item));
        } else if (selectedCheckboxes.length < 3) {
            setSelectedCheckboxes([...selectedCheckboxes, item]);
        }
    };

    return (
        <Box>
            <Box sx={{ marginTop: '30px', marginLeft: '5%' }}>
                <Typography variant="h2"
                    noWrap
                    component="a"
                    sx={{
                        fontWeight: 800,
                        color: '#F9C01F',
                        textDecoration: 'none',
                        fontSize: '45px'
                    }}>EDU-CONNECT
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', marginLeft: '480px', marginTop: '-40px' }}>
                <Box sx={{ backgroundColor: '#AFB5AF', width: '30px', textAlign: 'center', borderRadius: '50%' }}>
                    <Typography sx={{ fontSize: '20px', color: 'white', fontFamily: 'fantasy' }}>1</Typography>
                </Box>
                <span style={{ borderBottom: '5px solid #AFB5AF', width: '395px', display: 'inline-block', marginBottom: '13px' }} />
                <Box sx={{ backgroundColor: '#388532', width: '30px', textAlign: 'center', borderRadius: '50%' }}>
                    <Typography sx={{ fontSize: '20px', color: 'white', fontFamily: 'fantasy' }}>2</Typography>
                </Box>
                <span style={{ borderBottom: '5px solid #AFB5AF', width: '395px', display: 'inline-block', marginBottom: '13px' }} />
                <Box sx={{ backgroundColor: '#AFB5AF', width: '30px', textAlign: 'center', borderRadius: '50%' }}>
                    <Typography sx={{ fontSize: '20px', color: 'white', fontFamily: 'fantasy' }}>3</Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', marginLeft: '480px', left: 'auto', marginTop: '10px' }}>
                <Box sx={{ textAlign: 'center', marginLeft: '-10px' }}>
                    <Typography>Chọn gia sư</Typography>
                </Box>
                <span style={{ width: '380px' }} />
                <Box sx={{ textAlign: 'center', marginLeft: '-3px' }}>
                    <Typography>Chọn giờ</Typography>
                </Box>
                <span style={{ width: '380px' }} />
                <Box sx={{ textAlign: 'center' }}>
                    <Typography>Hoàn thành</Typography>
                </Box>
            </Box>
            <Box sx={{
                height: '800px',
                backgroundColor: '#D9D9D9',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '40px',
                marginTop: '20px',
                justifyContent: 'center'
            }}>
                <Typography sx={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '20px', fontSize: '20px', fontFamily: 'revert' }}>Đăng ký thời gian học của bạn</Typography>
                <Box sx={{ backgroundColor: 'gray', width: '980px', marginLeft: 'auto', borderRadius: '20%', marginRight: 'auto' }}>
                    <TableContainer component={Paper} sx={{ width: '100%' }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ padding: '20px 45px', backgroundColor: '#71C763' }}></TableCell>
                                    {daysOfWeek.map((day, index) => (
                                        <TableCell key={index} sx={{ padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: '#71C763' }}>{day.lessonline}</TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((itime, index) => (
                                    <TableRow key={index}>
                                        <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px', backgroundColor: '#71C763', color: 'white', textAlign: 'center', fontSize: '15px', fontFamily: 'cursive' }}>{itime.timeline}</TableCell>
                                        {daysOfWeek.map((day, dayIndex) => {
                                            const item = scheduleData.find((data) => data.timeline === itime.timeline && data.lessonline === day.lessonline);

                                            return (
                                                <TableCell key={dayIndex} sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                                    {item && item.lessonline && (
                                                        <Checkbox
                                                            value={`${item.timeId}-${item.lessonid}`}
                                                            checked={selectedCheckboxes.includes(item)}
                                                            onChange={() => handleCheckboxChange(item)}
                                                            inputProps={{ 'aria-label': `Checkbox ${item}` }}
                                                        />
                                                    )}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>

                <Box sx={{ paddingTop: '20px', display: 'flex' }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        marginLeft: "50px"
                    }}>
                        <Typography sx={{ fontSize: '20px', fontWeight: "700", color: "red" }}>Notes:</Typography>
                        <Typography sx={{ fontSize: '20px', marginLeft: "7px", color: "#5E5D5D" }}> Lịch học này sẽ đi theo bạn đến hết kỳ học của bạn(1 tuần 3 ngày mỗi 1 slot). </Typography>
                    </Box>
                    <Box sx={{marginLeft : 'auto', marginRight : '20%'}}>
                        <Button onClick={handlePaymentAndBooktime} variant="contained" sx={{ height: '30px', backgroundColor: 'green', fontSize: '12px', marginRight: '20px' }}>
                            Thanh toán
                        </Button>
                        <Button onClick={handleSubmit} variant="contained" sx={{ height: '30px', backgroundColor: 'red', fontSize: '12px' }}>
                            Cancel
                        </Button>
                    </Box>
                </Box>

            </Box>

        </Box>);
}

export default BookTime;