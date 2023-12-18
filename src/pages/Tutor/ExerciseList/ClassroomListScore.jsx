import { Box, Button, TextField, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import axios from 'axios';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
function ClassroomListScore() {
    const [dataClassroomScore, setDataClassroomScore] = useState([]);
    const { bookid } = useParams();
    const decodedToken = jwtDecode(localStorage.getItem('token'));
    const [mark, setMark] = useState('');
    const [oldIndex, setOldIndex] = useState('');
    const [shouldDisable, setShouldDisable] = useState(false);
    const [tutor, setTutor] = useState('');
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const [scoreClassroom, setScoreClassroom] = useState({
        scoreid: 0,
        score: 0
    });

    const getStudentByBookId = () => {
        axios.get(`http://localhost:8081/student/getStudentByBookId?bookid=${bookid}`,
            {
                cancelToken: source.token,
            })
            .then((response) => {
                setTutor(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const fetchData = () => {
        axios.get(`http://localhost:8081/exersice/scoreclassroom/${bookid}`,
            {
                cancelToken: source.token,
            })
            .then((response) => {
                setDataClassroomScore(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        getStudentByBookId();
        fetchData();
    });

    const handleChange = (e) => {
        if (e.target.value.toLowerCase() === 'e') {
            e.target.value = '';
            return;
        }
        let numericValue = e.target.value.replace(/[^0-9eE]/g, ''); // Allow only numeric characters
        // Enforce maximum length of 2 characters
        const maxLength = 2;
        numericValue = numericValue.slice(0, maxLength);

        // Enforce maximum value of 10
        const maxValue = 10;
        if (numericValue > maxValue) {
            numericValue = String(maxValue);
        }

        // Update the input value
        e.target.value = numericValue;
        setMark(numericValue);
        // Handle the numeric input as needed
    };

    const addScoreClassroom = async (index) => {
        try {
            const response = await axios.post(
                `http://localhost:8081/exersice/addscoreclassroom`,
                scoreClassroom
            );

            if (response.data === 1) {
                alert("Lưu thành công");
                setOldIndex(null);
                var elementDisable = document.getElementById("inputCellDisable-" + index);
                var elementNotDisable = document.getElementById("inputCellNotDisable-" + index);
                elementDisable.style.display = "flex";
                elementNotDisable.style.display = "none";
            }
            fetchData();
        } catch (error) {
            console.error(error);
        } finally {
            setShouldDisable(false); // Enable the TextField after the request is complete
        }
    };
    const handleOpenConfirmation = (e, index) => {
        setShouldDisable(true);
        setScoreClassroom({
            scoreid: e,
            score: mark,
        });

        addScoreClassroom(index);
    };

    const handleFixConfirmation = (e) => {
        setOldIndex(e);
        if (oldIndex != e && oldIndex != null) {
            alert("Phải lưu điểm ");
            return;
        }
        var elementDisable = document.getElementById("inputCellDisable-" + e);
        var elementNotDisable = document.getElementById("inputCellNotDisable-" + e);
        var elementInputNotDisable = document.getElementById("inputNotDisable-" + e);
        elementInputNotDisable.value = "";
        elementDisable.style.display = "none";
        elementNotDisable.style.display = "flex";
    };


    return (
        <Box>
            <Box sx={{ width: '98%', marginTop: "20px", borderRadius: "5px", marginLeft: "1%", marginRight: "1%", backgroundColor: "#E2D6D6" }}>
                <Typography sx={{ fontSize: "40px", marginLeft: "2%", fontFamily: "cursive", paddingBottom: "20px" }}>Danh sách bài tập kiểm tra trắc nghiệm</Typography>
                <Typography sx={{ fontSize: "30px", marginLeft: "2%", fontFamily: "cursive", paddingBottom: "20px" }}>{tutor.fullname}</Typography>
            </Box>
            <Box sx={{ width: '98%', marginTop: "20px", borderRadius: "5px", marginLeft: "1%", marginRight: "1%", backgroundColor: "#E2D6D6" }}>
                <TableContainer component={Paper} sx={{}}>
                    <Table >
                        <TableHead>
                            <TableRow style={{ backgroundColor: "#e2d6d6c9" }}>
                                <TableCell width={100} style={{ width: 50, fontSize: "14px" }}>ID</TableCell>
                                <TableCell style={{ minWidth: 150, fontSize: "14px", textAlign: 'center' }}>Tên Bài tập</TableCell>
                                <TableCell style={{ width: 200, fontSize: "14px" }}>Bài tập</TableCell>
                                <TableCell style={{ width: 250, fontSize: "14px" }}>Điểm</TableCell>
                                <TableCell style={{ width: 150, fontSize: "14px", textAlign: 'center' }}>Ngày làm</TableCell>
                                <TableCell style={{ width: 50, fontSize: "14px" }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dataClassroomScore.map((row, index) => (
                                <TableRow key={row.homeworkid} style={{ fontSize: "14px" }}>
                                    <TableCell style={{ fontSize: "14px" }}>{row.exerciseid}</TableCell>
                                    <TableCell style={{ fontSize: "14px", textAlign: 'center' }}>{row.title}</TableCell>
                                    <TableCell style={{ fontSize: "14px" }}>
                                        {row.nameclassroom}
                                    </TableCell>
                                    <TableCell id={`inputCellDisable-${index}`} style={{ display: 'flex', fontSize: "14px", textAlign: 'center' }}>
                                        <TextField
                                            id={`inputDisable-${index}`}
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            style={{
                                                width: '50px',
                                                ...(shouldDisable && { color: 'gray', backgroundColor: '#f2f2f2', }),

                                            }}
                                            inputProps={{
                                                pattern: '[0-9]*', // Allow only numeric input
                                                inputMode: 'numeric', // Set the input mode to numeric
                                            }}
                                            value={row.score}
                                            disabled={row.status === 'Y'}
                                        />
                                    </TableCell>
                                    <TableCell id={`inputCellNotDisable-${index}`} style={{ display: 'none', fontSize: "14px", textAlign: 'center' }}>
                                        <TextField
                                            id={`inputNotDisable-${index}`}
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            style={{
                                                width: '50px',
                                                ...(shouldDisable && { color: 'gray', backgroundColor: '#f2f2f2', }),

                                            }}
                                            onChange={handleChange}
                                            inputProps={{
                                                pattern: '[0-9]*', // Allow only numeric input
                                                inputMode: 'numeric', // Set the input mode to numeric
                                            }}

                                        />
                                    </TableCell>
                                    <TableCell style={{ fontSize: "14px", textAlign: 'center' }}>{row.submitdate}</TableCell>
                                    <TableCell style={{ fontSize: "14px" }}>
                                        <Button variant="contained" color="success" sx={{ marginRight: "10px" }}
                                            // onClick={() => handleOpen3(row.classroomid, row.link, row.nameclassroom)}
                                            onClick={() => handleFixConfirmation(index)}
                                        >
                                            Sửa
                                        </Button>
                                        <Button variant="contained" color="primary" sx={{ marginRight: "10px" }}
                                            onClick={() => handleOpenConfirmation(row.classroomid, index)}
                                        >
                                            Lưu
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>


    );
}
export default ClassroomListScore;