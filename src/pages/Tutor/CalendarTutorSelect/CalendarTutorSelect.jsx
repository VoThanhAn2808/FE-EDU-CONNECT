import React, { useState } from "react";
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

function CalendarTutorSelect() {
    const [selectedCells, setSelectedCells] = useState([]);

    const handleCellClick = (cellIndex) => {
      // Kiểm tra xem ô đã được chọn trước đó chưa
      const isSelected = selectedCells.includes(cellIndex);
  
      if (isSelected) {
        // Nếu ô đã được chọn trước đó, hãy loại bỏ nó khỏi danh sách
        const updatedCells = selectedCells.filter((index) => index !== cellIndex);
        setSelectedCells(updatedCells);
      } else {
        // Nếu ô chưa được chọn trước đó, hãy thêm nó vào danh sách
        const updatedCells = [...selectedCells, cellIndex];
        setSelectedCells(updatedCells);
      }
    };
  
    const isCellSelected = (cellIndex) => {
      return selectedCells.includes(cellIndex);
    }; 
    return (  
        <Box sx={{
            marginBottom:"50px"
        }}>
            <Box>
                <Typography sx={{fontSize: "30px", fontFamily: "cursive", fontWeight: "700", textAlign:"center", marginTop:"100px"}}>Chọn lịch dạy </Typography>
                {/* <Typography sx={{fontSize: "20px", fontFamily: "cursive", fontWeight: "700", textAlign:"center", marginTop:"10px"}}>Nguyễn Văn A</Typography> */}
            </Box>
                <Box sx={{ backgroundColor: 'gray', width: '980px', marginLeft: 'auto', borderRadius: '20%', marginRight : 'auto', marginTop: "30px"}}>
                    <TableContainer component={Paper} sx={{ width: '100%' }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ padding: '20px 45px', backgroundColor: 'green'}}>
                                    </TableCell>
                                    <TableCell sx={{ padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: 'green' }}> Thứ 2 </TableCell>
                                    <TableCell sx={{ padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: 'green' }}> Thứ 3 </TableCell>
                                    <TableCell sx={{ padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: 'green' }}> Thứ 4 </TableCell>
                                    <TableCell sx={{ padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: 'green' }}> Thứ 5  </TableCell>
                                    <TableCell sx={{ padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: 'green' }}> Thứ 6 </TableCell>
                                    <TableCell sx={{ padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: 'green' }}> Thứ 7 </TableCell>
                                    <TableCell sx={{ padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: 'green' }}> Chủ nhật </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px', backgroundColor: 'green', color: 'white', textAlign: 'center', fontSize: '15px', fontFamily: 'cursive' }}>8:00 - 10:45</TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(0) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(0)}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(1) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(1)}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(2) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(2)}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(3) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(3)}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(4) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(4)}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(5) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(5)}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(6) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(6)}></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px', backgroundColor: 'green', color: 'white', textAlign: 'center', fontSize: '15px', fontFamily: 'cursive' }}>13:00-14:45</TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(7) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(7)}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(8) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(8)}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(9) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(9)}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(10) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(10)}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(11) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(11)}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(12) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(12)}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(13) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(13)}></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px', backgroundColor: 'green', color: 'white', textAlign: 'center', fontSize: '15px', fontFamily: 'cursive' }}>15:00-17:45</TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(14) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(14)}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(15) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(15)}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(16) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(16)}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(17) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(17)}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(18) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(18)}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(19) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(19)}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(20) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(20)}></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px', backgroundColor: 'green', color: 'white', textAlign: 'center', fontSize: '15px', fontFamily: 'cursive' }}>16:00-18-45</TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(21) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(21)}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(22) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(22)}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(23) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(23)}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(24) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(24)}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(25) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(25)}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(26) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(26)}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(27) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(27)}></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px', backgroundColor: 'green', color: 'white', textAlign: 'center', fontSize: '15px', fontFamily: 'cursive' }}>19:00-21:45</TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(28) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(28)}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(29) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(29)}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(30) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(30)}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(31) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(31)}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(32) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(32)}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(33) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(33)}></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px',backgroundColor: isCellSelected(34) ? '#71C763' : '#ffffff', }} onClick={() => handleCellClick(34)}></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: "space-around"
                }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "70px",
                     }}>
                        <Typography sx={{fontSize: '20px', fontWeight:"700", color: "red" }}>Notes:</Typography>
                        <Typography sx={{fontSize: '20px', marginLeft: "7px", color: "#5E5D5D" }}> Chọn lịch dạy phù hợp của bạn</Typography>
                    </Box>
                    <Box sx={{marginTop: "70px"}}>
                    <Button variant="contained" color="success" endIcon={<SendIcon />}> Nộp Lịch</Button>
                    </Box>
                </Box>
        </Box>
    );
}

export default CalendarTutorSelect;