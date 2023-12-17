import { Avatar, Box, Button, TextField, Menu, MenuItem, Modal, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import axios from 'axios';
import SchoolIcon from '@mui/icons-material/School';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
function HomeworkListScore() {
    const [dataHomework, setDataHomework] = useState([]);
    const { classcourseid } = useParams();
    const { bookid } = useParams();
    const decodedToken = jwtDecode(localStorage.getItem('token'));
    const [mark, setMark] = useState('');
    const [oldIndex, setOldIndex] = useState('');
    const [shouldDisable, setShouldDisable] = useState(false);
    const [rowStates, setRowStates] = useState(
        dataHomework.map((row) => ({ score: row.score, shouldDisable: false }))
    );

    const dataTest = [
        {
            homeworkid: "1", title: "Chương 1-Kiểm tra bài tập về nhà lần 1", files: "API.txt", studentid: "1", score: "8", status: "Y", submitdate: "13-12-2023"
        },
        {
            homeworkid: "2", title: "Chương 1-Kiểm tra bài tập về nhà lần 2", files: "API.txt", studentid: "1", score: "8", status: "Y", submitdate: "13-12-2023"
        },
        {
            homeworkid: "3", title: "Chương 1-Kiểm tra bài tập về nhà lần 3", files: "API.txt", studentid: "1", score: "8", status: "Y", submitdate: "13-12-2023"
        },
        {
            homeworkid: "4", title: "Chương 1-Kiểm tra bài tập về nhà lần 4", files: "API.txt", studentid: "1", score: "8", status: "Y", submitdate: "13-12-2023"
        },
    ];


    const [tutor, setTutor] = useState('');
    useEffect(() => {
        // axios.get(`http://localhost:8081/educonnect/viewtutorcourse?classcourseid=${classcourseid}&tutorid=${decodedToken.id}`)
        //     .then((response) => {
        //         console.log("view tutor course", response.data);
        //         setTutor(response.data);
        //     })
        //     .catch((error) => {
        //     })
        axios.get(`http://localhost:8081/exersice/homeworkviewbytutor?bookid=${bookid}`)
            .then((response) => {
                console.log("XXXXXXX", response.data);
                setDataHomework(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [dataHomework]);
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
        console.log(numericValue);
    };

    const handleOpenConfirmation = (e, index) => {
        setShouldDisable(true);
        try {
            axios.put(`http://localhost:8081/exersice/updateScoresubmit?score=${mark}&submitid=${e}`)
                .then((response) => {
                    console.log(response.data);
                    if (response.data === 1) {
                        alert("Thành Công Lưu");
                        setOldIndex(null);
                        var elementDisable = document.getElementById("inputCellDisable-" + index);
                        var elementNotDisable = document.getElementById("inputCellNotDisable-" + index);
                        elementDisable.style.display = "flex";
                        elementNotDisable.style.display = "none";

                    }
                })
                .catch((error) => {
                    console.error(error);
                })
                .finally(() => {
                    setShouldDisable(false); // Enable the TextField after the request is complete
                });

        } catch (error) {
            console.error(error);
            setShouldDisable(false);
        }
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
                <Typography sx={{ fontSize: "40px", marginLeft: "2%", fontFamily: "cursive", paddingBottom: "20px" }}>Danh sách bài tập về nhà</Typography>
                <Typography sx={{ fontSize: "30px", marginLeft: "2%", fontFamily: "cursive", paddingBottom: "20px" }}>{dataHomework[0]?.studentname}</Typography>
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
                            {dataHomework.map((row, index) => (
                                <TableRow key={row.homeworkid} style={{ fontSize: "14px" }}>
                                    <TableCell style={{ fontSize: "14px" }}>{row.homeworkid}</TableCell>
                                    <TableCell style={{ fontSize: "14px", textAlign: 'center' }}>{row.title}</TableCell>
                                    <TableCell style={{ fontSize: "14px" }}>
                                        <a href={`http://localhost:8081/edu/file/fileuser/${row.files}/${row.studentid}`} target="_blank" download>
                                            <InsertDriveFileIcon sx={{ fontSize: "25px", marginLeft: "4%" }} />
                                        </a>
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
                                            onClick={() => handleFixConfirmation(index)}
                                        >
                                            Sửa
                                        </Button>
                                        <Button variant="contained" color="primary" sx={{ marginRight: "10px" }}
                                            onClick={() => handleOpenConfirmation(row.homeworkid, index)}
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
export default HomeworkListScore;