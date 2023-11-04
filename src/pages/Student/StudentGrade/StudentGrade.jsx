import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

const data = [
    { subject: "Bài kiểm tra số 1", point: "10" },
    { subject: "Bài kiểm tra số 2", point: "9" },
    { subject: "Bài kiểm tra số 3", point: "8" },
    { subject: "Bài kiểm tra số 4", point: "7" },
    { subject: "Bài kiểm tra số 5", point: "6" },
    { subject: "Bài kiểm tra số 6", point: "5" },
    { subject: "Bài kiểm tra số 7", point: "4" },
    { subject: "Bài kiểm tra số 8", point: "3" },
    { subject: "Bài kiểm tra số 9", point: "2" },
    { subject: "Bài kiểm tra số 10", point: "1" },
]
function StudentGrade() {
    return (
        <Box>
            <Box sx={{ border: '1px solid #000000', marginTop: "90px", borderRadius: "5px", marginLeft: "1%", marginRight: "1%", backgroundColor: "#E2D6D6", textAlign: "center", marginBottom: "10px" }}>
                <Typography sx={{ fontSize: "40px", marginLeft: "2%", fontFamily: "cursive", paddingBottom: "20px" }}>Tên giáo viên - Tên môn</Typography>
            </Box>
            <Box sx={{ marginLeft: "1%", marginRight: "1%", marginBottom:"50px" }}>
                <TableContainer>
                    <Table>
                        <TableHead >
                            <TableRow>
                                <TableCell sx={{border: "1px solid #000000", background:"#BFBDBD", fontSize: "25px", fontFamily: "cursive", fontWeight: "500",}}>Bài kiểm tra</TableCell>
                                <TableCell sx={{border: "1px solid #000000", background:"#BFBDBD", fontSize: "25px", fontFamily: "cursive", fontWeight: "500",}}>Điểm</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((item, index) => (
                                <TableRow key={index}>
                                 <TableCell sx={{border: "1px solid #000000", background:"#BFBDBD", fontSize: "15px", fontFamily: "cursive", fontWeight: "500"}}>{item.subject}</TableCell>
                                 <TableCell sx={{border: "1px solid #000000", background:"#BFBDBD", fontSize: "15px", fontFamily: "cursive", fontWeight: "500"}}>{item.point}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}

export default StudentGrade;