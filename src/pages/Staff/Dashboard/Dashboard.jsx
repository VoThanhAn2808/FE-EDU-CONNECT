import { useState } from "react";
import { Box, Button, Menu, MenuItem, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const data = [
    { id: 1, name: "Nguyễn Văn A", phoneNumber: "0987654321",success: "Toán", date: "10/09/2023",wage: "5.000.000 VNĐ" ,status: "Còn học" },
    { id: 2, name: "Nguyễn Văn A", phoneNumber: "0987654321",success: "Toán", date: "10/09/2023",wage: "5.000.000 VNĐ" ,status: "Còn học" },
    { id: 3, name: "Nguyễn Văn A", phoneNumber: "0987654321",success: "Toán", date: "10/09/2023",wage: "5.000.000 VNĐ" ,status: "Còn học" },
    { id: 4, name: "Nguyễn Văn A", phoneNumber: "0987654321",success: "Toán", date: "10/09/2023",wage: "5.000.000 VNĐ" ,status: "Còn học" },
    { id: 5, name: "Nguyễn Văn A", phoneNumber: "0987654321",success: "Toán", date: "10/09/2023",wage: "5.000.000 VNĐ" ,status: "Còn học" },
    { id: 6, name: "Nguyễn Văn A", phoneNumber: "0987654321",success: "Toán", date: "10/09/2023",wage: "5.000.000 VNĐ" ,status: "Đã hoàn thành" },
    { id: 7, name: "Nguyễn Văn A", phoneNumber: "0987654321",success: "Toán", date: "10/09/2023",wage: "5.000.000 VNĐ" ,status: "Đã hoàn thành" },
    { id: 8, name: "Nguyễn Văn A", phoneNumber: "0987654321",success: "Toán", date: "10/09/2023",wage: "5.000.000 VNĐ" ,status: "Đã hoàn thành" },
    { id: 9, name: "Nguyễn Văn A", phoneNumber: "0987654321",success: "Toán", date: "10/09/2023",wage: "5.000.000 VNĐ" ,status: "Đã hoàn thành" },
    { id: 10, name: "Nguyễn Văn A", phoneNumber: "0987654321",success: "Toán", date: "10/09/2023",wage: "5.000.000 VNĐ" ,status: "Đã hoàn thành" },

]
function Dashboard() {
    const [anchorEl, setAnchorEl] = useState(null);

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
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Số điện thoại</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Môn học</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Ngày đăng ký</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Trạng thái</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}><AddBoxIcon sx={{ fontSize: "25px" }} /></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.id}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.name}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.phoneNumber}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.success}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.date}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center", color: item.status === 'Còn học' ? 'green' : 'red' }}>{item.status}</TableCell>
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

export default Dashboard;