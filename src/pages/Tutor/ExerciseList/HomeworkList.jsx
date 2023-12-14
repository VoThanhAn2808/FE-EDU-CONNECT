import { Box, Button, Link, Modal, TextField, Typography, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, } from '@mui/material';
import axios from 'axios';
import SchoolIcon from '@mui/icons-material/School';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
function HomeworkList() {
    const [dataHomework, setDataHomework] = useState([]);
    const { classcourseid } = useParams();
    const decodedToken = jwtDecode(localStorage.getItem('token'));
    const [mark, setMark] = useState('');
    const [shouldDisable, setShouldDisable] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8081/exersice/homeworkviewbytutor?classcourseid=${classcourseid}&tutorid=${decodedToken.id}`)
            .then((response) => {
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
    }
    const handleOpenConfirmation = () => {
        setShouldDisable(true);
        try {
            const response = axios.post();
        } catch (error) {

        }
    }


    return (
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
                    {dataHomework.map((row) => (
                        <TableRow key={row.homeworkid} style={{ fontSize: "14px" }}>
                            <TableCell style={{ fontSize: "14px" }}>{row.homeworkid}</TableCell>
                            <TableCell style={{ fontSize: "14px", textAlign: 'center' }}>{row.title}</TableCell>
                            <TableCell style={{ fontSize: "14px" }}>
                                <Link href={`http://localhost:8081/edu/file/fileuser/${row.files}/${row.studentid}`} target="_blank" download>
                                    <InsertDriveFileIcon sx={{ fontSize: "25px", marginLeft: "4%" }} />
                                </Link>
                            </TableCell>
                            <TableCell style={{ display: 'flex', fontSize: "14px", textAlign: 'center' }}>
                                <TextField
                                    id="outlined-basic"
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
                                    value={row.score}
                                    disabled={shouldDisable}
                                />

                            </TableCell>
                            <TableCell style={{ fontSize: "14px", textAlign: 'center' }}>{row.submitdate}</TableCell>
                            <TableCell style={{ fontSize: "14px" }}>
                                <Button variant="contained" color="success" sx={{ marginRight: "10px" }}
                                    // onClick={() => handleOpen3(row.classroomid, row.link, row.nameclassroom)}
                                    onClick={() => setShouldDisable(false)}
                                >
                                    Sửa
                                </Button>
                                <Button variant="contained" color="primary" sx={{ marginRight: "10px" }}
                                    onClick={handleOpenConfirmation}
                                >
                                    Lưu
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
}
export default HomeworkList;