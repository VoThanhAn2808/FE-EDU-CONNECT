import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function UpdateCalender() {
    const [data, setData] = useState([]);
    const [daysOfWeek, setDaysOfWeek] = useState([]);
    const [selectedCells, setSelectedCells] = useState([]);
    const token = localStorage.getItem("token");
    const tutor = jwtDecode(token);
    const navigate = useNavigate();
    const [time, setTime] = useState([]);

    useEffect(() => {
        // Fetch timeline data
        axios.get(`http://localhost:8081/book/timeline`)
            .then((response) => {
                if (response && response.data) {
                    setData(response.data);
                }
            })
            .catch((error) => {
                console.error("Error fetching timeline:", error);
            });

        // Fetch lesson data
        axios.get(`http://localhost:8081/book/lesson`)
            .then((response) => {
                if (response && response.data) {
                    setDaysOfWeek(response.data);
                }
            })
            .catch((error) => {
                console.error("Error fetching lessons:", error);
            });

        // Fetch tutor's teaching time data
        axios.get(`http://localhost:8081/educonnect/listteachtime?tutorid=${tutor.id}`)
            .then((response) => {
                if (response && response.data) {
                    setTime(response.data);
                    console.log(response.data);
                }
            })
            .catch((error) => {
                console.error("Error fetching lessons:", error);
            });
    }, [tutor.id]);

    const handleCellClick = (cellIndex) => {
        const isSelected = selectedCells.includes(cellIndex);

        if (isSelected) {
            const updatedCells = selectedCells.filter((index) => index !== cellIndex);
            setSelectedCells(updatedCells);
        } else {
            const updatedCells = [...selectedCells, cellIndex];
            setSelectedCells(updatedCells);
        }
    };

    const isCellSelectedAndChosen = (cellIndex) => {
        const [timeId, lessonId] = cellIndex.split("-");
        return time.some((item) => item.timeId === Number(timeId) && item.lessonid === Number(lessonId));
      };
    const isCellSelected = (cellIndex) => {
        return selectedCells.includes(cellIndex);
    };

    const handleChoice = async (event) => {
        event.preventDefault();

        if (selectedCells.length === 0) {
            console.log("No cells selected.");
            return;
        }

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        try {
            for (const cellIndex of selectedCells) {
                const [timeId, lessonId] = cellIndex.split('-');
                const postData = {
                    tutorid: tutor.id,
                    lessonid: lessonId,
                    timeid: timeId,
                };

                const booktimeResponse = await axios.post(
                    "http://localhost:8081/educonnect/choicetime",
                    postData,
                    config
                );

                console.log("Đặt lịch thành công:", booktimeResponse.data);
            }

            // Use React Router for navigation
            navigate("/hometutor");
        } catch (error) {
            console.error("Error choosing time:", error);
            console.log(error.response?.data);
        }
    };

    return (
        <Box sx={{ marginBottom: "50px" }}>
            <Box>
                <Typography sx={{ fontSize: "30px", fontFamily: "cursive", fontWeight: "700", textAlign: "center", marginTop: "100px" }}>Cập nhật lịch dạy của bạn</Typography>
            </Box>
            <Box sx={{ backgroundColor: 'gray', width: '980px', marginLeft: 'auto', borderRadius: '20%', marginRight: 'auto', marginTop: "30px" }}>
                <TableContainer component={Paper} sx={{ width: '100%' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ padding: '20px 45px', backgroundColor: 'green' }}></TableCell>
                                {daysOfWeek.map((day, index) => (
                                    <TableCell key={index} sx={{ padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: 'green' }}>{day.lessonline}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((item, index) => (
                                <TableRow key={item.timeId}>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px', backgroundColor: 'green', color: 'white', textAlign: 'center', fontSize: '15px', fontFamily: 'cursive' }}>{item.timeline} - {item.endtime}</TableCell>
                                    {daysOfWeek.map((day) => {
                                        const cellIndex = `${item.timeId}-${day.lessonId}`;
                                        // console.log("Cell Index:", cellIndex);
                                        // console.log("Selected Cells:", selectedCells);

                                        return (
                                            <TableCell
                                                key={cellIndex}
                                                sx={{
                                                    border: "1px solid",
                                                    backgroundColor: isCellSelectedAndChosen(cellIndex) ? "#ffcc80" : isCellSelected(cellIndex) ? "#b2dfdb" : ""
                                                }}
                                                onClick={() => handleCellClick(cellIndex)}
                                            >
                                                {item.time}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: "space-around"
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "70px",
                }}>
                    <Typography sx={{ fontSize: '20px', fontWeight: "700", color: "red" }}>Notes:</Typography>
                    <Typography sx={{ fontSize: '20px', marginLeft: "7px", color: "#5E5D5D" }}> Chọn lịch dạy phù hợp của bạn</Typography>
                </Box>
                <Box sx={{ marginTop: "70px" }}>
                    <Button variant="contained" color="success" endIcon={<SendIcon />} onClick={handleChoice}> Nộp Lịch</Button>
                </Box>
            </Box>
        </Box>
    );
}

export default UpdateCalender;
