import { useState } from "react";
import { Box, Button, Menu, MenuItem, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, Modal } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ProfileAvatar from "./ProfileAvatar";

const data = [
    { id: 1, name: "Nguyễn Văn A", phoneNumber: "0987654321", date: "10/09/2023", wage: "5.000.000 VNĐ", status: "Còn hoạt động" },
    { id: 2, name: "Nguyễn Văn A", phoneNumber: "0987654321", date: "10/09/2023", wage: "5.000.000 VNĐ", status: "Còn hoạt động" },
    { id: 3, name: "Nguyễn Văn A", phoneNumber: "0987654321", date: "10/09/2023", wage: "5.000.000 VNĐ", status: "Còn hoạt động" },
    { id: 4, name: "Nguyễn Văn A", phoneNumber: "0987654321", date: "10/09/2023", wage: "5.000.000 VNĐ", status: "Còn hoạt động" },
    { id: 5, name: "Nguyễn Văn A", phoneNumber: "0987654321", date: "10/09/2023", wage: "5.000.000 VNĐ", status: "Còn hoạt động" },
    { id: 6, name: "Nguyễn Văn A", phoneNumber: "0987654321", date: "10/09/2023", wage: "5.000.000 VNĐ", status: "Đã nghĩ" },
    { id: 7, name: "Nguyễn Văn A", phoneNumber: "0987654321", date: "10/09/2023", wage: "5.000.000 VNĐ", status: "Đã nghĩ" },
    { id: 8, name: "Nguyễn Văn A", phoneNumber: "0987654321", date: "10/09/2023", wage: "5.000.000 VNĐ", status: "Đã nghĩ" },
    { id: 9, name: "Nguyễn Văn A", phoneNumber: "0987654321", date: "10/09/2023", wage: "5.000.000 VNĐ", status: "Đã nghĩ" },
    { id: 10, name: "Nguyễn Văn A", phoneNumber: "0987654321", date: "10/09/2023", wage: "5.000.000 VNĐ", status: "Đã nghĩ" },

]
function StaffManagement() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    // const handleCloseModal = () => {
    //     setOpenModal(false);
    // };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box >
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
                        Danh sách nhân viên
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
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Tên nhân viên</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Số điện thoại</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Ngày đăng ký</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Lương</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Trạng thái</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>
                                        <AddBoxIcon sx={{ fontSize: "25px" }} onClick={handleOpenModal} />
                                        <Modal
                                            open={openModal}
                                            onClick={handleOpenModal}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Box sx={{ backgroundColor: "#D9D9D9", width: "400px", height: "570px", borderRadius: "10px", border: '2px solid #000000', p: 2, }}>
                                                <ProfileAvatar />
                                                <Typography sx={{ fontSize: "17px", display:"flex", justifyContent:"space-between" }}>Nhân viên:
                                                    <TextField
                                                        InputProps={{
                                                            style: {
                                                                fontSize: "14px", 
                                                                height: "28px",
                                                            },
                                                        }}
                                                    />
                                                </Typography>
                                                <Typography sx={{ fontSize: "17px", display:"flex", justifyContent:"space-between" }}>Email:
                                                <TextField
                                                        InputProps={{
                                                            style: {
                                                                fontSize: "14px", 
                                                                height: "28px",
                                                            },
                                                        }}
                                                    />
                                                </Typography>
                                                <Typography sx={{ fontSize: "17px", display:"flex", justifyContent:"space-between" }}>Mật khẩu:
                                                <TextField
                                                        InputProps={{
                                                            style: {
                                                                fontSize: "14px", 
                                                                height: "28px",
                                                            },
                                                        }}
                                                    />
                                                </Typography>
                                                <Typography sx={{ fontSize: "17px", display:"flex", justifyContent:"space-between" }}>Số điện thoại:
                                                <TextField
                                                        InputProps={{
                                                            style: {
                                                                fontSize: "14px", 
                                                                height: "28px",
                                                            },
                                                        }}
                                                    />
                                                </Typography>
                                                <Typography sx={{ fontSize: "17px", display:"flex", justifyContent:"space-between" }}>Giới tính:
                                                <TextField
                                                        InputProps={{
                                                            style: {
                                                                fontSize: "14px", 
                                                                height: "28px",
                                                            },
                                                        }}
                                                    />
                                                </Typography>
                                                <Typography sx={{ fontSize: "17px", display:"flex", justifyContent:"space-between" }}>Trạng thái:
                                                <TextField
                                                        InputProps={{
                                                            style: {
                                                                fontSize: "14px", 
                                                                height: "28px",
                                                            },
                                                        }}
                                                    />
                                                </Typography>
                                                <Typography sx={{ fontSize: "17px", display:"flex", justifyContent:"space-between" }}>Ngày sinh:
                                                <TextField
                                                        InputProps={{
                                                            style: {
                                                                fontSize: "14px", 
                                                                height: "28px",
                                                            },
                                                        }}
                                                    />
                                                </Typography>
                                                <Typography sx={{ fontSize: "17px", display:"flex", justifyContent:"space-between" }}>Quê quán:
                                                <TextField
                                                        InputProps={{
                                                            style: {
                                                                fontSize: "14px", 
                                                                height: "28px",
                                                            },
                                                        }}
                                                    />
                                                </Typography>
                                                <Typography sx={{ fontSize: "17px", display:"flex", justifyContent:"space-between" }}>Lương:
                                                <TextField
                                                        InputProps={{
                                                            style: {
                                                                fontSize: "14px", 
                                                                height: "28px",
                                                            },
                                                        }}
                                                    />
                                                </Typography>
                                                <Typography sx={{ fontSize: "17px", display:"flex", justifyContent:"space-between" }}>Kinh nghiệm:
                                                <TextField
                                                        InputProps={{
                                                            style: {
                                                                fontSize: "14px", 
                                                                height: "28px",
                                                            },
                                                        }}
                                                    />
                                                </Typography>
                                                <Box sx={{marginTop:"30px", marginLeft:"64%"}}>
                                                    <Button sx={{ backgroundColor: "green", color: "black", fontSize: "12px", fontWeight: "600" }}>Lưu</Button>
                                                    <Button sx={{ backgroundColor: "red", color: "black", fontSize: "12px", fontWeight: "600" }}>Huỷ</Button>
                                                </Box>
                                            </Box>
                                        </Modal>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.id}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.name}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.phoneNumber}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.date}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.wage}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center", color: item.status === 'Còn hoạt động' ? 'green' : 'red' }}>{item.status}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>
                                            <MoreVertIcon sx={{ fontSize: "25px" }} onClick={handleClick} />
                                            <Menu
                                                anchorEl={anchorEl}
                                                open={Boolean(anchorEl)}
                                                onClose={handleClose}
                                            >
                                                <MenuItem onClick={handleClose}>Sửa</MenuItem>
                                                <MenuItem onClick={handleClose}>Xoá</MenuItem>
                                            </Menu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: "15px" }}>
                    <Pagination count={10} sx={{ '& .MuiPaginationItem-root': { fontSize: '15px', minWidth: '50px' } }} />
                </Box>
            </Box>
        </Box>
    );
}

export default StaffManagement;