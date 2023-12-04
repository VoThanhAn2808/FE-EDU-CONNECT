import { Avatar, Box, Button, Menu, MenuItem, Modal, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import IconButton from '@material-ui/core/IconButton';
import React, { useEffect, useState } from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RefreshIcon from '@material-ui/icons/Refresh';
import avt from './../../../assests/giasu.jpg'
import { Link } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';
function ManagerStudent() {

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [anchorElUser, setAnchorElUser] = useState(null);

    const [listStudentfinished, setListStudentfinished] = useState([]);
    const decodedToken = jwtDecode(localStorage.getItem('token'));
    const [page, setPage] = useState(1);
    const [status, setStatus] = useState(0);

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        // Update the current date every second
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);
    useEffect(() => {
        axios.get(`http://localhost:8081/educonnect/tutor/studentfinished?tutorid=${decodedToken.id}&page=${page}&status=${status}`)
            .then((response) => {
                setListStudentfinished(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [page, status]);


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const checkStatus = (startDate, endDate) => {
        if (startDate < currentDate.getTime() && endDate < currentDate.getTime()) {
            return "Hoàn Thành";
        } else if (startDate < currentDate.getTime() && endDate > currentDate.getTime()) {
            return "Còn Học";
        }
        else if (startDate > currentDate.getTime()) {
            return "Đợi Học";
        }
    };


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 300,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        padding: '120px 50px'
    };

    return (
        <Box>
            <Box sx={{ width: '98%', height: "130px", marginTop: "20px", borderRadius: "5px", marginLeft: "1%", marginRight: "1%", backgroundColor: "#E2D6D6" }}>
                <Typography sx={{ fontSize: "40px", marginLeft: "2%", fontFamily: "cursive", paddingBottom: "20px" }}>Toán đại 10 - Nguyễn Văn A</Typography>
                <Typography sx={{ fontSize: "25px", marginLeft: "2%", fontFamily: "cursive" }}>Tab chính/Môn/Học Sinh</Typography>
            </Box>
            <Box sx={{ width: '98%', height: '100%', marginBottom: '50px', marginTop: "10px", borderRadius: "5px", marginLeft: "1%", marginRight: "1%", backgroundColor: "#E2D6D6" }}>
                <Box sx={{ marginLeft: '40%', paddingTop: '20px', display: 'flex', marginRight: '12px', }}>
                    <IconButton variant="contained" style={{ color: 'primary', }} onClick={() => { setStatus(0) }}>
                        <RefreshIcon style={{ color: 'primary', fontSize: '25px', }} />
                    </IconButton >
                    <Button variant="contained" style={{ fontSize: '12px', fontFamily: 'cursive', flex: '1', marginRight: '10px', }} onClick={() => { setStatus(1) }}>
                        Học sinh đang đợi học
                    </Button>
                    <Button variant="contained" style={{ fontSize: '12px', fontFamily: 'cursive', flex: '1', marginRight: '10px', }} onClick={() => { setStatus(2) }}>
                        Học sinh còn học
                    </Button>
                    <Button variant="contained" sx={{ fontSize: '12px', fontFamily: 'cursive', flex: '1', }} onClick={() => { setStatus(3) }}>
                        Học sinh đã hoàn thành
                    </Button>
                </Box>
                <Box sx={{ paddingTop: '20px' }}>
                    <TableContainer component={Paper} sx={{ width: '98%', marginLeft: '1%' }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontSize: '15px', fontFamily: 'cursive', backgroundColor: '#F9F3F3', }}>MSHS</TableCell>
                                    <TableCell sx={{ fontSize: '15px', fontFamily: 'cursive', backgroundColor: '#F9F3F3', }}>Tên học sinh</TableCell>
                                    <TableCell sx={{ fontSize: '15px', fontFamily: 'cursive', backgroundColor: '#F9F3F3', }}>Ngày bắt đầu học</TableCell>
                                    <TableCell sx={{ fontSize: '15px', fontFamily: 'cursive', backgroundColor: '#F9F3F3', }}>Trạng thái</TableCell>
                                    <TableCell sx={{ backgroundColor: '#F9F3F3', width: '20px' }}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {listStudentfinished.length > 0 ? listStudentfinished.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell sx={{ width: '20%', height: '50px', fontSize: '15px', fontFamily: 'cursive' }}>{item.studentid}</TableCell>
                                        <TableCell sx={{ width: '30%', height: '50px', fontSize: '15px', fontFamily: 'cursive' }}>{item.fullname}</TableCell>
                                        <TableCell sx={{ width: '20%', height: '50px', fontSize: '15px', fontFamily: 'cursive' }}>{item.startdate}</TableCell>
                                        <TableCell sx={{ width: '20%', height: '50px', fontSize: '15px', fontFamily: 'cursive' }}>{checkStatus((new Date(item.startdate)).getTime(), (new Date(item.enddate)).getTime())}</TableCell>
                                        <TableCell sx={{ width: '20%', height: '50px', fontSize: '15px', fontFamily: 'cursive' }}><img src={'http://localhost:8081/edu/file/fileImg/' + item.studentid + '/' + item.img} alt={`Discount Image for ${item.title}`} style={{ maxWidth: '100%', maxHeight: '100%', }} /></TableCell>
                                        <TableCell sx={{ height: '50px', textAlign: 'center' }}>
                                            <MoreHorizIcon onClick={handleOpenUserMenu} sx={{ fontSize: '30px' }} />
                                        </TableCell>
                                    </TableRow>
                                )) :
                                    (<TableRow >
                                        <TableCell sx={{ width: '140px', height: '50px', fontSize: '15px', fontFamily: 'cursive', textAlign: 'center' }} colSpan={8}>Không có dữ liệu</TableCell>
                                    </TableRow>)
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Menu
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        // keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        <MenuItem onClick={handleOpen}>Xem thông tin</MenuItem>
                        <Link to='/exerciselist' style={{ textDecoration: 'none', color: 'black' }}>
                            <MenuItem onClick={handleCloseUserMenu}>Bài tập</MenuItem>
                        </Link>
                    </Menu>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Box sx={{ marginTop: '-100px' }}>
                                <Avatar src={avt} sx={{ width: '90px', height: '90px', marginLeft: '90px', marginBottom: '20px' }} />
                                <Typography sx={{ fontSize: '15px', fontFamily: 'cursive', marginLeft: '12%' }}>Học sinh: Nguyễn Văn A - 00921</Typography>
                                <Typography sx={{ fontSize: '15px', fontFamily: 'cursive', marginLeft: '12%' }}>Ngày Sinh: 2001-02-02</Typography>
                                <Typography sx={{ fontSize: '15px', fontFamily: 'cursive', marginLeft: '12%' }}>SĐT: 0987654321</Typography>
                                <Typography sx={{ fontSize: '15px', fontFamily: 'cursive', marginLeft: '12%' }}>Email: email@gmail.com</Typography>
                                <Typography sx={{ fontSize: '15px', fontFamily: 'cursive', marginLeft: '12%' }}>Thời gian học: Thứ 2(07:00), Thứ 3(08:00), Thứ 4(9:00)</Typography>
                            </Box>
                        </Box>
                    </Modal>
                    <Box sx={{ marginBottom: '50px', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <Pagination count={10} sx={{ '& .MuiPaginationItem-root': { fontSize: '15px', minWidth: '50px' } }} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default ManagerStudent;