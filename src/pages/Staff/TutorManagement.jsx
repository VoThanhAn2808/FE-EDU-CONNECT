import React, { useEffect, useState } from "react";
import { Avatar, Box, Button, Menu, MenuItem, Modal, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from "axios";

function TutorManagement() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose1 = () => setOpen(false);
    const [data, setData] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchName, setSearchName] = useState("");

    const handleSearch = (event) => {
        setSearchName(event.target.value);
    };

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
                marginTop: "20px",
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
                    marginLeft: '70%',
                    marginTop: '10px',
                }}>
                    <TextField
                        sx={{
                            borderRadius: '11%',
                            width: '200px',
                        }}
                        InputProps={{
                            style: {
                                height: '45px',
                                fontSize: "14px"
                            },
                        }}
                        value={searchName}
                        onChange={handleSearch}
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
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Thu nhập</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Trạng thái</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((item, index) => {
                                    if (item.fullname.toLowerCase().includes(searchName.toLowerCase())) {
                                        return (
                                            <TableRow key={index}>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.tutorid}</TableCell>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.fullname}</TableCell>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.city} {item.wards}</TableCell>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.phone}</TableCell>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.createdate}</TableCell>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>
                                                    {new Intl.NumberFormat("vi-VN", {
                                                        style: "currency",
                                                        currency: "VND",
                                                    }).format(item.price)}
                                                </TableCell>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center", color: item.status === 1 ? 'green' : 'red' }}>
                                                    {item.status === 1 ? 'Còn dạy' : 'Đã nghỉ'}
                                                </TableCell>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>
                                                    <MoreVertIcon sx={{ fontSize: "25px" }} onClick={handleClick} />
                                                    <Menu
                                                        anchorEl={anchorEl}
                                                        open={Boolean(anchorEl)}
                                                        onClose={handleClose}
                                                    >
                                                        <MenuItem onClick={handleOpen}>Xem thông tin</MenuItem>
                                                        <MenuItem onClick={handleClose}>Update Tiền</MenuItem>
                                                        <MenuItem onClick={handleClose}>Cắm cờ</MenuItem>
                                                    </Menu>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    }
                                    return null;
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Modal
                    open={open}
                    onClick={handleClose1}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Box sx={{ backgroundColor: "#D9D9D9", width: "300px", height: "400px", borderRadius: "10px", border: '2px solid #000000', p: 2, }}>
                        <Avatar sx={{ height: "100px", width: "100px", marginLeft: "30%" }} />
                        <Typography sx={{ fontSize: "17px", marginTop: "10px" }}>Giáo viên:</Typography>
                        <Typography sx={{ fontSize: "17px" }}>Ngày Sinh:</Typography>
                        <Typography sx={{ fontSize: "17px" }}>Số điện thoại:</Typography>
                        <Typography sx={{ fontSize: "17px" }}>Email:</Typography>
                        <Typography sx={{ fontSize: "17px" }}>Địa chỉ:</Typography>
                        <Typography sx={{ fontSize: "17px" }}>Phụ trách môn:</Typography>
                        <Typography sx={{ fontSize: "17px" }}>Thời gian dạy: </Typography>
                    </Box>
                </Modal>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: "15px" }}>
                    <Pagination count={10} sx={{ '& .MuiPaginationItem-root': { fontSize: '15px', minWidth: '50px' } }} />
                </Box>
            </Box>
        </Box>
    );
}

export default TutorManagement;