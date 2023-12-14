import { Avatar, Box, Button, TextField, Menu, MenuItem, Modal, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import axios from 'axios';
import SchoolIcon from '@mui/icons-material/School';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
function ClassroomListScore() {
    const dataTest = [
        {
            id: 1, nameExercise: "Chương 1-Kiểm tra điểm quá trình lần 1 ", file: "API.txt", score: "8", startDate: "12-05-2023", studentid: "1", status: "Y"
        },
        {
            id: 2, nameExercise: "Chương 1-Kiểm tra điểm quá trình lần 1", file: "API.txt", score: "9", startDate: "12-05-2023", studentid: "1", status: "Y"
        },

    ];
    const [dataClassroomScore, setDataClassroomScore] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const { classcourseid } = useParams();
    const decodedToken = jwtDecode(localStorage.getItem('token'));
    const [mark, setMark] = useState('');
    const [shouldDisable, setShouldDisable] = useState(false);
    const [tutor, setTutor] = useState('');
    useEffect(() => {
        axios.get(`http://localhost:8081/educonnect/viewtutorcourse?classcourseid=${classcourseid}&tutorid=${decodedToken.id}`)
            .then((response) => {
                console.log("view tutor course", response.data);
                setTutor(response.data);
            })
            .catch((error) => {
            })
        // axios.get(`http://localhost:8081/exersice/homeworkviewbytutor?classcourseid=${classcourseid}&tutorid=${decodedToken.id}`)
        //     .then((response) => {
        //         setDataHomework(response.data);
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    }, [dataClassroomScore]);
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
    const handleOpenConfirmation = (e) => {
        setShouldDisable(true);
        try {
            axios.put(`http://localhost:8081/exersice/updateScoresubmit?score=${mark}&submitid=${e}`)
                .then((response) => {
                    console.log(response.data);
                    if (response.data === 1) {
                        alert("Thành Công Lưu");
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
        setEditMode(true);
    };


    return (
        <Box>
            <Box sx={{ width: '98%', marginTop: "20px", borderRadius: "5px", marginLeft: "1%", marginRight: "1%", backgroundColor: "#E2D6D6" }}>
                <Typography sx={{ fontSize: "40px", marginLeft: "2%", fontFamily: "cursive", paddingBottom: "20px" }}>Danh sách bài tập kiểm tra trắc nghiệm</Typography>
                <Typography sx={{ fontSize: "30px", marginLeft: "2%", fontFamily: "cursive", paddingBottom: "20px" }}>{tutor.coursename} {tutor.classname}-Nguyễn Trọng Hiếu</Typography>
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
                            {dataTest.map((row, index) => (
                                <TableRow key={row.homeworkid} style={{ fontSize: "14px" }}>
                                    <TableCell style={{ fontSize: "14px" }}>{row.id}</TableCell>
                                    <TableCell style={{ fontSize: "14px", textAlign: 'center' }}>{row.nameExercise}</TableCell>
                                    <TableCell style={{ fontSize: "14px" }}>
                                        <Link href={`http://localhost:8081/edu/file/fileuser/${row.file}/${row.studentid}`} target="_blank" download>
                                            <InsertDriveFileIcon sx={{ fontSize: "25px", marginLeft: "4%" }} />
                                        </Link>
                                    </TableCell>
                                    <TableCell style={{ display: 'flex', fontSize: "14px", textAlign: 'center' }}>
                                        {row.status === 'Y' ? (
                                            <TextField
                                                id="inputDisable"
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
                                                disabled={editMode || row.status === 'Y'}
                                            />
                                        ) : <TextField
                                            id="inputNotDisable"
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
                                            disabled={!editMode || row.status === 'Y'}
                                        />}
                                    </TableCell>
                                    <TableCell style={{ fontSize: "14px", textAlign: 'center' }}>{row.submitdate}</TableCell>
                                    <TableCell style={{ fontSize: "14px" }}>
                                        <Button variant="contained" color="success" sx={{ marginRight: "10px" }}
                                            // onClick={() => handleOpen3(row.classroomid, row.link, row.nameclassroom)}
                                            onClick={() => handleFixConfirmation()}
                                        >
                                            Sửa
                                        </Button>
                                        <Button variant="contained" color="primary" sx={{ marginRight: "10px" }}
                                            onClick={() => handleOpenConfirmation(row.homeworkid)}
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