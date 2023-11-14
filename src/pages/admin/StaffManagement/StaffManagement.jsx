import { Box, Button, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const data = [
    { id: 1, name: "Nguyễn Văn A", phoneNumber: "0987654321", date: "10/09/2023" ,status: "Còn hoạt động" },
    { id: 2, name: "Nguyễn Văn A", phoneNumber: "0987654321", date: "10/09/2023" ,status: "Còn hoạt động" },
    { id: 3, name: "Nguyễn Văn A", phoneNumber: "0987654321", date: "10/09/2023" ,status: "Còn hoạt động" },
    { id: 4, name: "Nguyễn Văn A", phoneNumber: "0987654321", date: "10/09/2023" ,status: "Còn hoạt động" },
    { id: 5, name: "Nguyễn Văn A", phoneNumber: "0987654321", date: "10/09/2023" ,status: "Còn hoạt động" },
    { id: 6, name: "Nguyễn Văn A", phoneNumber: "0987654321", date: "10/09/2023" ,status: "Đã nghĩ" },
    { id: 7, name: "Nguyễn Văn A", phoneNumber: "0987654321", date: "10/09/2023" ,status: "Đã nghĩ" },
    { id: 8, name: "Nguyễn Văn A", phoneNumber: "0987654321", date: "10/09/2023" ,status: "Đã nghĩ" },
    { id: 9, name: "Nguyễn Văn A", phoneNumber: "0987654321", date: "10/09/2023" ,status: "Đã nghĩ" },
    { id: 10, name: "Nguyễn Văn A", phoneNumber: "0987654321", date: "10/09/2023" ,status: "Đã nghĩ" },

]
function StaffManagement() {
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
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Trạng thái</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.id}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.name}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.phoneNumber}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.date}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center",color: item.status === 'Còn hoạt động' ? 'green' : 'red' }}>{item.status}</TableCell>
                                        <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}><MoreVertIcon sx={{fontSize:"25px"}}/></TableCell>
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

export default StaffManagement;