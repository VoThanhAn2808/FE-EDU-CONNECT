import React, { useCallback, useEffect, useState } from "react";
import { Avatar, Box, Button, Menu, MenuItem, Modal, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from "axios";

function StudentManagement() {
    const [data, setData] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose1 = () => setOpen(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchName, setSearchName] = useState("");
    const [student, setStudent] = useState(null);
    const [vstudent, setVstudent] = useState('');

    const handleSearch = (event) => {
        setSearchName(event.target.value);
    };

    const handleClick = (event, studentid) => {
        setAnchorEl(event.currentTarget);
        setStudent(studentid)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClickFlag = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        try {
            const response = await axios.get(`http://localhost:8081/staffsconnect/student/block/${student}`);
            alert(response.data);
            window.location.reload();
            console.log(response.data);
        } catch (error) {
            console.error(error);
            console.log(error.response.data);
        }
    };
    const [page, setPage] = useState(1);
    const [pstudent, setPstudent] = useState('');
    const fetchTop = useCallback((pageNumber) => {
        axios
            .get(`http://localhost:8081/staffsconnect/student?page=${pageNumber}`)
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        fetchTop(page);
    }, [page, fetchTop]);

    useEffect(() => {
        axios
            .get(`http://localhost:8081/staffsconnect/pagestudent`)
            .then((response) => {
                setPstudent(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handlePageChange = (pageNumber) => {
        setPage(pageNumber);
    };
    useEffect(() => {
        if (student !== null) {
            axios
                .get(`http://localhost:8081/staffsconnect/student/viewprofile/${student}`)
                .then((response) => {
                    setVstudent(response.data);
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [student]);
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
                        Danh sách học sinh
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
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>MSHS</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Tên học sinh</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Địa chỉ</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Số điện thoại</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Ngày đăng ký</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Trạng thái</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((item, index) => {
                                    if (item.fullname.toLowerCase().includes(searchName.toLowerCase())) {
                                        return (
                                            <TableRow key={index}>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.studentid}</TableCell>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.fullname}</TableCell>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.city} {item.wards}</TableCell>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.phone}</TableCell>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.createdate}</TableCell>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center", color: item.status === 1 ? 'green' : 'red' }}>{item.status === 1 ? 'Còn học' : 'Đã bị block'}</TableCell>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>
                                                    <MoreVertIcon sx={{ fontSize: "25px" }} onClick={(event) => handleClick(event, item.studentid)} />
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
                    <MenuItem onClick={handleClickFlag}>Cắm cờ</MenuItem>
                </Menu>
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
                        {vstudent.img ? (
                            <Avatar sx={{ height: "100px", width: "100px", marginLeft: "30%" }} src={`http://localhost:8081/edu/file/files/${vstudent.img}`} />
                        ) : (
                            <Avatar sx={{ height: "100px", width: "100px", marginLeft: "30%" }} />
                        )}
                        <Typography sx={{ fontSize: "17px", marginTop: "10px" }}>Học sinh: {vstudent.fullname}</Typography>
                        <Typography sx={{ fontSize: "17px" }}>Ngày Sinh: {vstudent.birthdate}</Typography>
                        <Typography sx={{ fontSize: "17px" }}>Số điện thoại: {vstudent.phone}</Typography>
                        <Typography sx={{ fontSize: "17px" }}>Email: {vstudent.email}</Typography>
                        <Typography sx={{ fontSize: "17px" }}>Địa chỉ: {vstudent.city} - {vstudent.wards}</Typography>
                        <Typography sx={{ fontSize: "17px" }}>Lớp: {vstudent.class}</Typography>
                    </Box>
                </Modal>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: "15px" }}>
                    <Pagination count={pstudent.length} page={page} onChange={handlePageChange} sx={{ '& .MuiPaginationItem-root': { fontSize: '15px', minWidth: '50px' } }} />
                </Box>
            </Box>
        </Box>
    );
}

export default StudentManagement;