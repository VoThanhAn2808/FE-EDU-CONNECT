import React from "react";
import { Box, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

function CalendarTutor() {
    return (  
        <Box sx={{
            marginBottom:"50px"
        }}>
            <Box>
                <Typography sx={{fontSize: "20px", fontFamily: "cursive", fontWeight: "700", textAlign:"center", marginTop:"100px"}}>Nguyễn Văn A</Typography>
                <Typography sx={{fontSize: "20px", fontFamily: "cursive", fontWeight: "700", textAlign:"center", marginTop:"10px"}}>Mã Số Gia Sư: 123</Typography>
            </Box>
                <Box sx={{ backgroundColor: 'gray', width: '980px', marginLeft: 'auto', borderRadius: '20%', marginRight : 'auto', marginTop: "30px"}}>
                    <TableContainer component={Paper} sx={{ width: '100%' }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ padding: '20px 45px', backgroundColor: '#71C763'}}>
                                    </TableCell>
                                    <TableCell sx={{ padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: '#71C763' }}> Thứ 2 </TableCell>
                                    <TableCell sx={{ padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: '#71C763' }}> Thứ 3 </TableCell>
                                    <TableCell sx={{ padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: '#71C763' }}> Thứ 4 </TableCell>
                                    <TableCell sx={{ padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: '#71C763' }}> Thứ 5  </TableCell>
                                    <TableCell sx={{ padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: '#71C763' }}> Thứ 6 </TableCell>
                                    <TableCell sx={{ padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: '#71C763' }}> Thứ 7 </TableCell>
                                    <TableCell sx={{ padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: '#71C763' }}> Chủ nhật </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px', backgroundColor: '#71C763', color: 'white', textAlign: 'center', fontSize: '15px', fontFamily: 'cursive' }}>8:00 - 10:45</TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Typography sx={{fontSize:"20px", fontFamily: "cursive", fontWeight:"800", textAlign:"center"}}>Toán</Typography>
                                        <Link sx={{fontSize:"15px", fontFamily: "cursive", fontWeight:"200", textAlign:"center", marginLeft:"10px", textDecoration:"none"}} href="https://meet.google.com/bhx-kpai-adp" target="_blank">Meet-URL</Link>
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px', backgroundColor: '#71C763', color: 'white', textAlign: 'center', fontSize: '15px', fontFamily: 'cursive' }}>13:00-14:45</TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                    <Typography sx={{fontSize:"20px", fontFamily: "cursive", fontWeight:"800", textAlign:"center"}}>Toán</Typography>
                                        <Link sx={{fontSize:"15px", fontFamily: "cursive", fontWeight:"200", textAlign:"center", marginLeft:"10px", textDecoration:"none"}} href="https://meet.google.com/bhx-kpai-adp" target="_blank">Meet-URL</Link>
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px', backgroundColor: '#71C763', color: 'white', textAlign: 'center', fontSize: '15px', fontFamily: 'cursive' }}>15:00-17:45</TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                    <Typography sx={{fontSize:"20px", fontFamily: "cursive", fontWeight:"800", textAlign:"center"}}>Toán</Typography>
                                        <Link sx={{fontSize:"15px", fontFamily: "cursive", fontWeight:"200", textAlign:"center", marginLeft:"10px", textDecoration:"none"}} href="https://meet.google.com/bhx-kpai-adp" target="_blank">Meet-URL</Link>
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px', backgroundColor: '#71C763', color: 'white', textAlign: 'center', fontSize: '15px', fontFamily: 'cursive' }}>16:00-18-45</TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                    <Typography sx={{fontSize:"20px", fontFamily: "cursive", fontWeight:"800", textAlign:"center"}}>Toán</Typography>
                                        <Link sx={{fontSize:"15px", fontFamily: "cursive", fontWeight:"200", textAlign:"center", marginLeft:"10px", textDecoration:"none"}} href="https://meet.google.com/bhx-kpai-adp" target="_blank">Meet-URL</Link>
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px', backgroundColor: '#71C763', color: 'white', textAlign: 'center', fontSize: '15px', fontFamily: 'cursive' }}>19:00-21:45</TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                    <Typography sx={{fontSize:"20px", fontFamily: "cursive", fontWeight:"800", textAlign:"center"}}>Toán</Typography>
                                        <Link sx={{fontSize:"15px", fontFamily: "cursive", fontWeight:"200", textAlign:"center", marginLeft:"10px", textDecoration:"none"}} href="https://meet.google.com/bhx-kpai-adp" target="_blank">Meet-URL</Link>
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "70px",
                 }}>
                    <Typography sx={{fontSize: '20px', fontWeight:"700", color: "red" }}>Notes:</Typography>
                    <Typography sx={{fontSize: '20px', marginLeft: "7px", color: "#5E5D5D" }}> Bạn theo dõi lịch dạy để tham gia dạy học cho học sinh.</Typography>
                </Box>
        </Box>
    );
}

export default CalendarTutor;