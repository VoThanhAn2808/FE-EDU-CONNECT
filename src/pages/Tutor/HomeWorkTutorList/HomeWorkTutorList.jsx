import React from "react";
import { Box, Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';

const data = [
    { id: 1, name: "Nguyễn Văn A", time: "10h (17/9/2023)", file: "../../../assets/Vo-Thanh-An.pdf", point: "10" },
    { id: 2, name: "Nguyễn Văn A", time: "10h (17/9/2023)", file: "../../../assets/Vo-Thanh-An.pdf", point: "10" },
    { id: 3, name: "Nguyễn Văn A", time: "10h (17/9/2023)", file: "../../../assets/Vo-Thanh-An.pdf", point: "10" },
    { id: 4, name: "Nguyễn Văn A", time: "10h (17/9/2023)", file: "../../../assets/Vo-Thanh-An.pdf", point: "10" },
    { id: 5, name: "Nguyễn Văn A", time: "10h (17/9/2023)", file: "../../../assets/Vo-Thanh-An.pdf", point: "10" },
    { id: 6, name: "Nguyễn Văn A", time: "10h (17/9/2023)", file: "../../../assets/Vo-Thanh-An.pdf", point: "10" },
    { id: 7, name: "Nguyễn Văn A", time: "10h (17/9/2023)", file: "../../../assets/Vo-Thanh-An.pdf", point: "10" },
    { id: 8, name: "Nguyễn Văn A", time: "10h (17/9/2023)", file: "../../../assets/Vo-Thanh-An.pdf", point: "10" },
    { id: 9, name: "Nguyễn Văn A", time: "10h (17/9/2023)", file: "../../../assets/Vo-Thanh-An.pdf", point: "10" },
    { id: 10, name: "Nguyễn Văn A", time: "10h (17/9/2023)", file: "../../../assets/Vo-Thanh-An.pdf", point: "10" },
]

function HomeWorkTutorList() {
    return (
        <Box>
            <Box sx={{
                backgroundColor: "#FFFFFF",
                marginLeft: "30px",
                marginRight: "30px",
                marginTop: "90px",
                marginBottom: "5px",
                borderRadius: "5px",
                border: '1px solid #000000', p: 2,
            }}>
                <Typography sx={{ fontSize: "25px", marginLeft: "30px" }}>Gia sư Nguyễn Văn A - Toán đại số 10</Typography>
            </Box>
            <Box sx={{
                backgroundColor: "#FFFFFF",
                marginLeft: "30px",
                marginRight: "30px",
                marginBottom: "50px",
                borderRadius: "5px",
                border: '1px solid #000000', p: 2,
            }}>
                <Box sx={{ marginTop: "10px" }}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: '#D9D9D9', border: '1px solid #000000', p: 2, textAlign: "center" }}>STT</TableCell>
                                    <TableCell sx={{ padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: '#D9D9D9', border: '1px solid #000000', p: 2, textAlign: "center" }}>Bài tập</TableCell>
                                    <TableCell sx={{ padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: '#D9D9D9', border: '1px solid #000000', p: 2, textAlign: "center" }}>Tên học sinh</TableCell>
                                    <TableCell sx={{ padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: '#D9D9D9', border: '1px solid #000000', p: 2, textAlign: "center" }}>Thời gian bắt đầu </TableCell>
                                    <TableCell sx={{ padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: '#D9D9D9', border: '1px solid #000000', p: 2, textAlign: "center" }}>Thời gian kết thúc</TableCell>
                                    <TableCell sx={{ padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: '#D9D9D9', border: '1px solid #000000', p: 2, textAlign: "center" }}>Thời gian nộp bài</TableCell>
                                    <TableCell sx={{ padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: '#D9D9D9', border: '1px solid #000000', p: 2, textAlign: "center" }}>File nộp bài</TableCell>
                                    <TableCell sx={{ padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: '#D9D9D9', border: '1px solid #000000', p: 2, textAlign: "center" }}>Điểm</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* {data.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center", backgroundColor: '#D9D9D9', border: '1px solid #000000', p: 2, }}>{item.id}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center", backgroundColor: '#D9D9D9', border: '1px solid #000000', p: 2, }}>{item.name}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center", backgroundColor: '#D9D9D9', border: '1px solid #000000', p: 2, }}>{item.time}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center", backgroundColor: '#D9D9D9', border: '1px solid #000000', p: 2, }}>{item.file ? (
                                            <Link sx={{textDecoration:"none"}} href={item.file} target="_blank" rel="noopener noreferrer">
                                                View File
                                            </Link>
                                        ) : (
                                            "No file available"
                                        )}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center", backgroundColor: '#D9D9D9', border: '1px solid #000000', p: 2, }}>{item.point}</TableCell>
                                    </TableRow>
                                ))} */}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Box>
    );
}

export default HomeWorkTutorList;