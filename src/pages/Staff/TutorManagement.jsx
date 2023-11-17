import React, { useEffect, useState } from "react";
import { Box, Button, Menu, MenuItem, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from "axios";

function TutorManagement() {
    const [data, setData] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        axios
            .get(`http://localhost:8081/staffsconnect/tutor/2`)
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <Box sx={{ marginBottom: "50px" }}>
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
                        Danh sách gia sư
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
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>MSGS</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Tên gia sư</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Địa chỉ</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Số điện thoại</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Ngày đăng ký</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Trạng thái</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.tutorid}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.fullname}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.city} {item.wards}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.phone}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.createdate}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center", color: item.status === '1' ? 'red' : 'green' }}>{item.status === 1 ? 'Còn dạy' : 'Đã nghỉ'}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>
                                            <MoreVertIcon sx={{fontSize:"25px"}} onClick={handleClick}/>
                                            <Menu
                                                anchorEl={anchorEl}
                                                open={Boolean(anchorEl)}
                                                onClose={handleClose}
                                            >
                                                <MenuItem onClick={handleClose}>Xem thông tin</MenuItem>
                                                <MenuItem onClick={handleClose}>Update Tiền</MenuItem>
                                                <MenuItem onClick={handleClose}>Cắm cờ</MenuItem>
                                            </Menu>
                                            </TableCell>
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

export default TutorManagement;