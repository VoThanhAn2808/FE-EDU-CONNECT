import React, { useState } from "react";
import { Box, Button, Menu, MenuItem, Modal, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const data = [
    { id: 1, name: "Nguyễn Văn A", tutor: "Nguyễn Văn B", phoneNumber: "0987654321", date: "10/09/2023", subject: "Toán1" ,status: "Đã duyệt" },
    { id: 2, name: "Nguyễn Văn A", tutor: "Nguyễn Văn B", phoneNumber: "0987654321", date: "10/09/2023", subject: "Toán2" ,status: "Đã duyệt" },
    { id: 3, name: "Nguyễn Văn A", tutor: "Nguyễn Văn B", phoneNumber: "0987654321", date: "10/09/2023", subject: "Toán3" ,status: "Đã duyệt" },
    { id: 4, name: "Nguyễn Văn A", tutor: "Nguyễn Văn B", phoneNumber: "0987654321", date: "10/09/2023", subject: "Toán4" ,status: "Đã duyệt" },
    { id: 5, name: "Nguyễn Văn A", tutor: "Nguyễn Văn B", phoneNumber: "0987654321", date: "10/09/2023", subject: "Toán5" ,status: "Đã duyệt" },
    { id: 6, name: "Nguyễn Văn A", tutor: "Nguyễn Văn B", phoneNumber: "0987654321", date: "10/09/2023", subject: "Toán6" ,status: "Chưa duyệt" },
    { id: 7, name: "Nguyễn Văn A", tutor: "Nguyễn Văn B", phoneNumber: "0987654321", date: "10/09/2023", subject: "Toán7" ,status: "Chưa duyệt" },
    { id: 8, name: "Nguyễn Văn A", tutor: "Nguyễn Văn B", phoneNumber: "0987654321", date: "10/09/2023", subject: "Toán8" ,status: "Chưa duyệt" },
    { id: 9, name: "Nguyễn Văn A", tutor: "Nguyễn Văn B", phoneNumber: "0987654321", date: "10/09/2023", subject: "Toán9" ,status: "Chưa duyệt" },
    { id: 10, name: "Nguyễn Văn A", tutor: "Nguyễn Văn B", phoneNumber: "0987654321", date: "10/09/2023", subject: "Toán10" ,status: "Chưa duyệt" },

]

function TryLearningManagement() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose1 = () => setOpen(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>STT</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Tên học sinh</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Tên gia sư</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Số điện thoại</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Ngày đăng ký</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Môn đăng ký</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Trạng thái</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.id}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.name}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.tutor}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.phoneNumber}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.date}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.subject}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center",color: item.status === 'Đã duyệt' ? 'green' : 'red' }}>{item.status}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>
                                            <MoreVertIcon sx={{fontSize:"25px"}} onClick={handleClick}/>
                                            <Menu
                                                anchorEl={anchorEl}
                                                open={Boolean(anchorEl)}
                                                onClose={handleClose}
                                            >
                                                <MenuItem onClick={handleOpen}>Duyệt</MenuItem>
                                                <MenuItem onClick={handleOpen}>Không duyệt</MenuItem>
                                            </Menu>
                                            </TableCell>
                                    </TableRow>
                                ))}
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
                    <Box sx={{backgroundColor:"#D9D9D9", width:"300px", height:"400px", borderRadius:"10px", border: '2px solid #000000', p: 2,}}>
                        
                    </Box>
                </Modal>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop:"15px" }}>
                    <Pagination count={10} sx={{ '& .MuiPaginationItem-root': { fontSize: '15px', minWidth: '50px' } }} />
                </Box>
            </Box>
        </Box>
    );
}

export default TryLearningManagement;