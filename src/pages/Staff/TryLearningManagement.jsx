import React from "react";
import { Box, Button, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";

const data = [
    { id: 1, name: "Nguyẽn Văn A", address: "Đà Nẵng", phoneNumber: "0987654321", date: "10/09/2023", status: "Thành công" },
    { id: 2, name: "Nguyẽn Văn A", address: "Đà Nẵng", phoneNumber: "0987654321", date: "10/09/2023", status: "Thành công" },
    { id: 3, name: "Nguyẽn Văn A", address: "Đà Nẵng", phoneNumber: "0987654321", date: "10/09/2023", status: "Thành công" },
    { id: 4, name: "Nguyẽn Văn A", address: "Đà Nẵng", phoneNumber: "0987654321", date: "10/09/2023", status: "Thành công" },
    { id: 5, name: "Nguyẽn Văn A", address: "Đà Nẵng", phoneNumber: "0987654321", date: "10/09/2023", status: "Thành công" },
    { id: 6, name: "Nguyẽn Văn A", address: "Đà Nẵng", phoneNumber: "0987654321", date: "10/09/2023", status: "Thành công" },
    { id: 7, name: "Nguyẽn Văn A", address: "Đà Nẵng", phoneNumber: "0987654321", date: "10/09/2023", status: "Thành công" },
    { id: 8, name: "Nguyẽn Văn A", address: "Đà Nẵng", phoneNumber: "0987654321", date: "10/09/2023", status: "Thành công" },
    { id: 9, name: "Nguyẽn Văn A", address: "Đà Nẵng", phoneNumber: "0987654321", date: "10/09/2023", status: "Thành công" },
    { id: 10, name: "Nguyẽn Văn A", address: "Đà Nẵng", phoneNumber: "0987654321", date: "10/09/2023", status: "Thành công" },

]

function TryLearningManagement() {
    return (
        <Box sx={{ height: "920px" }}>
            <Box sx={{
                backgroundColor: "#D9D9D9",
                height: "100px",
                marginLeft: "20px",
                marginRight: "20px",
                marginTop: "90px",
                borderRadius: "5px",
                border: '1px solid #000000', p: 2
            }}>
                <Box sx={{
                    textAlign: "center",
                }}>
                    <Typography sx={{
                        fontSize: "40px",
                        fontFamily: "cursive"
                    }}>
                        Danh sách học sinh học thử
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                backgroundColor: "#D9D9D9",
                marginLeft: "20px",
                marginRight: "20px",
                marginTop: "20px",
                borderRadius: "5px",
                border: '1px solid #000000', p: 2,
            }}>
                <Box sx={{
                    marginLeft: '75%',
                    marginTop: '10px',
                }}>
                    <TextField
                        sx={{
                            borderRadius: '11%',
                            width: '200px',
                        }}
                        InputProps={{
                            style: {
                                height: '45px'
                            },
                        }}
                    />
                    <Button variant="contained" component="a" href="#" hrefLang="#"
                        sx={{
                            height: '45px',
                            marginLeft: '10px',
                            fontSize: '12px',
                            borderRadius: '11%'
                        }}>
                        Tìm Kiếm
                    </Button>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    paddingTop: "15px",
                }}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Mã số gia sư</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Tên gia sư</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Địa chỉ</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Số điện thoại</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Ngày đăng ký</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Trạng thái</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>ba hòn bi</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((item) => (
                                    <TableRow>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.id}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.name}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.address}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.phoneNumber}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.date}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.status}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>Ba hòn bi</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop:"15px" }}>
                    <Pagination count={10} sx={{ '& .MuiPaginationItem-root': { fontSize: '15px', minWidth: '50px' } }} />
                </Box>
            </Box>
        </Box>
    );
}

export default TryLearningManagement;