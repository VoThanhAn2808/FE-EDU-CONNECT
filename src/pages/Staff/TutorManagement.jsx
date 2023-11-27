import React, { useEffect, useState } from "react";
import { Avatar, Box, Button, Menu, MenuItem, Modal, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from "axios";

function TutorManagement() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleCloses = () => setOpen(false);
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchName, setSearchName] = useState("");
    const [tutor, setTutor] = useState(null);

    const handleSearch = (event) => {
        setSearchName(event.target.value);
    };

    const handleClick = (event, tutorid) => {
        setAnchorEl(event.currentTarget);
        setTutor(tutorid);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const [history, setHistory] = useState([]);

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

    useEffect(() => {
        axios
            .get(`http://localhost:8081/staffsconnect/tutor/viewprofile/1`)
            .then((response) => {
                setData1(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        axios
            .get(`http://localhost:8081/staffsconnect/tutor/viewprofile/classcourse/1`)
            .then((response) => {
                setData2(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        axios
            .get(`http://localhost:8081/staffsconnect/tutor/viewprofile/timeline/1`)
            .then((response) => {
                setData3(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
        if (tutor !== null) {
            axios
                .get(`http://localhost:8081/educonnect/historypay?tutorid=${tutor}`)
                .then((response) => {
                    setHistory(response.data);
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [tutor]);
    
    
    const [open1, setOpen1] = useState(false);
    const handleClose1 = () => setOpen1(false);
    const handleOpen1 = () => setOpen1(true);
    const styles = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        paddingTop: '20px',
        borderRadius: '10px'
    };
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
                                                    <MoreVertIcon sx={{ fontSize: "25px" }} onClick={(event) => handleClick(event, item.tutorid)} />
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
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleOpen}>Xem thông tin</MenuItem>
                    <MenuItem onClick={handleOpen1}>Lịch sử rút tiền</MenuItem>
                    <MenuItem onClick={handleClose}>Update Tiền</MenuItem>
                    <MenuItem onClick={handleClose}>Cắm cờ</MenuItem>
                </Menu>
                <Modal
                    open={open}
                    onClick={handleCloses}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Box sx={{ backgroundColor: "#D9D9D9", width: "340px", height: "86%", borderRadius: "10px", border: '2px solid #000000', p: 2, }}>
                        <Avatar sx={{ height: "100px", width: "100px", marginLeft: "30%" }} src={`http://localhost:8081/edu/file/files/` + data1.img} />
                        <Typography sx={{ fontSize: "17px", marginTop: "20px" }}>Giáo viên: {data1.fullname}</Typography>
                        <Typography sx={{ fontSize: "17px" }}>Ngày sinh: {data1.birthdate}</Typography>
                        <Typography sx={{ fontSize: "17px" }}>Số điện thoại: {data1.phone}</Typography>
                        <Typography sx={{ fontSize: "17px" }}>Email: {data1.email}</Typography>
                        <Typography sx={{ fontSize: "17px" }}>Địa chỉ: {data1.wards}</Typography>

                        <Box sx={{ display: "flex" }}>
                            <Typography sx={{ fontSize: "17px" }}>Phụ trách môn:</Typography>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                {data2.map((item) => (
                                    <Typography sx={{ fontSize: "17px" }}> +{item.coursename}</Typography>
                                ))}
                            </Box>
                        </Box>

                        <Box sx={{display:"flex"}}>
                            <Typography sx={{ fontSize: "17px" }}>Thời gian dạy:</Typography>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                {data3.map((item) => (
                                    <Typography sx={{ fontSize: "17px" }}> +{item.lesson} : {item.timeline}</Typography>
                                ))}
                            </Box>
                        </Box>

                    </Box>
                </Modal>
                <Modal
                    open={open1}
                    onClose={handleClose1}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={{ ...styles, maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}>
                        <Typography sx={{ fontSize: '15px', fontFamily: 'cursive', textAlign: 'center', marginTop: '10px', marginBottom: '20px' }}>Lịch sử rút tiền</Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>Số tiền rút</TableCell>
                                        <TableCell style={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>Số tài khoản</TableCell>
                                        <TableCell style={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>Ngân hàng</TableCell>
                                        <TableCell style={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>Ngày thanh toán</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {Array.isArray(history) ? (
                                        (history).map((item, index) => (
                                            <TableRow key={index}>
                                                <TableCell style={{ fontSize: "12px", fontFamily: "cursive", textAlign: "center" }}>
                                                    {item.money.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
                                                </TableCell>
                                                <TableCell style={{ fontSize: "12px", fontFamily: "cursive", textAlign: "center" }}>{item.banknumber}</TableCell>
                                                <TableCell style={{ fontSize: "12px", fontFamily: "cursive", textAlign: "center" }}>{item.bank}</TableCell>
                                                {item.date !== null ? (
                                                    <TableCell style={{ fontSize: "12px", fontFamily: "cursive", textAlign: "center" }}>{item.date}</TableCell>
                                                ) : (
                                                    <TableCell style={{ fontSize: "12px", fontFamily: "cursive", textAlign: "center" }}>Đợi duyệt</TableCell>
                                                )}
                                            </TableRow>
                                        ))
                                    ) : (
                                        <TableRow>
                                            <TableCell style={{ fontSize: "10px", fontFamily: "cursive", textAlign: "center" }} colSpan={4}>No data available</TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
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