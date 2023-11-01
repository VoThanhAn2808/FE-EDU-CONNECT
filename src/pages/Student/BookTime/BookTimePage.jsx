import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Checkbox } from '@mui/material';

function BookTime() {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    const handleCheckboxChange = (value) => {
        if (selectedCheckboxes.includes(value)) {
            setSelectedCheckboxes(selectedCheckboxes.filter((item) => item !== value));
        } else if (selectedCheckboxes.length < 3) {
            setSelectedCheckboxes([...selectedCheckboxes, value]);
        }
    };

    return (
        <Box>
            <Box sx={{ marginTop: '30px', marginLeft: '5%' }}>
                <Typography variant="h2"
                    noWrap
                    component="a"
                    sx={{
                        fontWeight: 800,
                        color: '#F9C01F',
                        textDecoration: 'none',
                        fontSize: '45px'
                    }}>EDU-CONNECT
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', marginLeft: '480px', marginTop: '-40px' }}>
                <Box sx={{ backgroundColor: '#AFB5AF', width: '30px', textAlign: 'center', borderRadius: '50%' }}>
                    <Typography sx={{ fontSize: '20px', color: 'white', fontFamily: 'fantasy' }}>1</Typography>
                </Box>
                <span style={{ borderBottom: '5px solid #AFB5AF', width: '395px', display: 'inline-block', marginBottom: '13px' }} />
                <Box sx={{ backgroundColor: '#388532', width: '30px', textAlign: 'center', borderRadius: '50%' }}>
                    <Typography sx={{ fontSize: '20px', color: 'white', fontFamily: 'fantasy' }}>2</Typography>
                </Box>
                <span style={{ borderBottom: '5px solid #AFB5AF', width: '395px', display: 'inline-block', marginBottom: '13px' }} />
                <Box sx={{ backgroundColor: '#AFB5AF', width: '30px', textAlign: 'center', borderRadius: '50%' }}>
                    <Typography sx={{ fontSize: '20px', color: 'white', fontFamily: 'fantasy' }}>3</Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', marginLeft: '480px', left: 'auto', marginTop: '10px' }}>
                <Box sx={{ textAlign: 'center', marginLeft: '-10px' }}>
                    <Typography>Chọn gia sư</Typography>
                </Box>
                <span style={{ width: '380px' }} />
                <Box sx={{ textAlign: 'center', marginLeft: '-3px' }}>
                    <Typography>Chọn giờ</Typography>
                </Box>
                <span style={{ width: '380px' }} />
                <Box sx={{ textAlign: 'center' }}>
                    <Typography>Hoàn thành</Typography>
                </Box>
            </Box>
            <Box sx={{
                height: '800px',
                backgroundColor: '#D9D9D9',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '40px',
                marginTop: '20px',
                justifyContent: 'center'
            }}>
                <Typography sx={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '20px', fontSize: '20px', fontFamily: 'revert' }}>Đăng ký thời gian học của bạn</Typography>
                <Box sx={{ backgroundColor: 'gray', width: '980px', marginLeft: 'auto', borderRadius: '20%', marginRight : 'auto'}}>
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
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px', backgroundColor: '#71C763', color: 'white', textAlign: 'center', fontSize: '15px', fontFamily: 'cursive' }}>8:00 - 10:45</TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Checkbox
                                            checked={selectedCheckboxes.includes('checkbox1')}
                                            onChange={() => handleCheckboxChange('checkbox1')}
                                            inputProps={{ 'aria-label': 'Checkbox 1' }}
                                        /></TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Checkbox
                                            checked={selectedCheckboxes.includes('checkbox2')}
                                            onChange={() => handleCheckboxChange('checkbox2')}
                                            inputProps={{ 'aria-label': 'Checkbox 1' }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Checkbox
                                            checked={selectedCheckboxes.includes('checkbox3')}
                                            onChange={() => handleCheckboxChange('checkbox3')}
                                            inputProps={{ 'aria-label': 'Checkbox 1' }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Checkbox
                                            checked={selectedCheckboxes.includes('checkbox4')}
                                            onChange={() => handleCheckboxChange('checkbox4')}
                                            inputProps={{ 'aria-label': 'Checkbox 1' }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Checkbox
                                            checked={selectedCheckboxes.includes('checkbox5')}
                                            onChange={() => handleCheckboxChange('checkbox5')}
                                            inputProps={{ 'aria-label': 'Checkbox 1' }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Checkbox
                                            checked={selectedCheckboxes.includes('checkbox6')}
                                            onChange={() => handleCheckboxChange('checkbox6')}
                                            inputProps={{ 'aria-label': 'Checkbox 1' }}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px', backgroundColor: '#71C763', color: 'white', textAlign: 'center', fontSize: '15px', fontFamily: 'cursive' }}>13:00-14:45</TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Checkbox
                                            checked={selectedCheckboxes.includes('checkbox7')}
                                            onChange={() => handleCheckboxChange('checkbox7')}
                                            inputProps={{ 'aria-label': 'Checkbox 1' }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Checkbox
                                            checked={selectedCheckboxes.includes('checkbox8')}
                                            onChange={() => handleCheckboxChange('checkbox8')}
                                            inputProps={{ 'aria-label': 'Checkbox 1' }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Checkbox
                                            checked={selectedCheckboxes.includes('checkbox9')}
                                            onChange={() => handleCheckboxChange('checkbox9')}
                                            inputProps={{ 'aria-label': 'Checkbox 1' }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Checkbox
                                            checked={selectedCheckboxes.includes('checkbox10')}
                                            onChange={() => handleCheckboxChange('checkbox10')}
                                            inputProps={{ 'aria-label': 'Checkbox 1' }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Checkbox
                                            checked={selectedCheckboxes.includes('checkbox11')}
                                            onChange={() => handleCheckboxChange('checkbox11')}
                                            inputProps={{ 'aria-label': 'Checkbox 1' }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Checkbox
                                            checked={selectedCheckboxes.includes('checkbox12')}
                                            onChange={() => handleCheckboxChange('checkbox12')}
                                            inputProps={{ 'aria-label': 'Checkbox 1' }}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px', backgroundColor: '#71C763', color: 'white', textAlign: 'center', fontSize: '15px', fontFamily: 'cursive' }}>15:00-17:45</TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Checkbox
                                            checked={selectedCheckboxes.includes('checkbox13')}
                                            onChange={() => handleCheckboxChange('checkbox13')}
                                            inputProps={{ 'aria-label': 'Checkbox 1' }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Checkbox
                                            checked={selectedCheckboxes.includes('checkbox14')}
                                            onChange={() => handleCheckboxChange('checkbox14')}
                                            inputProps={{ 'aria-label': 'Checkbox 1' }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Checkbox
                                            checked={selectedCheckboxes.includes('checkbox15')}
                                            onChange={() => handleCheckboxChange('checkbox15')}
                                            inputProps={{ 'aria-label': 'Checkbox 1' }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Checkbox
                                            checked={selectedCheckboxes.includes('checkbox16')}
                                            onChange={() => handleCheckboxChange('checkbox16')}
                                            inputProps={{ 'aria-label': 'Checkbox 1' }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Checkbox
                                            checked={selectedCheckboxes.includes('checkbox17')}
                                            onChange={() => handleCheckboxChange('checkbox17')}
                                            inputProps={{ 'aria-label': 'Checkbox 1' }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Checkbox
                                            checked={selectedCheckboxes.includes('checkbox18')}
                                            onChange={() => handleCheckboxChange('checkbox18')}
                                            inputProps={{ 'aria-label': 'Checkbox 1' }}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px', backgroundColor: '#71C763', color: 'white', textAlign: 'center', fontSize: '15px', fontFamily: 'cursive' }}>16:00-18-45</TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Checkbox
                                            checked={selectedCheckboxes.includes('checkbox19')}
                                            onChange={() => handleCheckboxChange('checkbox19')}
                                            inputProps={{ 'aria-label': 'Checkbox 1' }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Checkbox
                                            checked={selectedCheckboxes.includes('checkbox20')}
                                            onChange={() => handleCheckboxChange('checkbox20')}
                                            inputProps={{ 'aria-label': 'Checkbox 1' }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Checkbox
                                            checked={selectedCheckboxes.includes('checkbox21')}
                                            onChange={() => handleCheckboxChange('checkbox21')}
                                            inputProps={{ 'aria-label': 'Checkbox 1' }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Checkbox
                                            checked={selectedCheckboxes.includes('checkbox22')}
                                            onChange={() => handleCheckboxChange('checkbox22')}
                                            inputProps={{ 'aria-label': 'Checkbox 1' }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Checkbox
                                            checked={selectedCheckboxes.includes('checkbox23')}
                                            onChange={() => handleCheckboxChange('checkbox23')}
                                            inputProps={{ 'aria-label': 'Checkbox 1' }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Checkbox
                                            checked={selectedCheckboxes.includes('checkbox24')}
                                            onChange={() => handleCheckboxChange('checkbox24')}
                                            inputProps={{ 'aria-label': 'Checkbox 1' }}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px', backgroundColor: '#71C763', color: 'white', textAlign: 'center', fontSize: '15px', fontFamily: 'cursive' }}>19:00-21:45</TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Checkbox
                                            checked={selectedCheckboxes.includes('checkbox25')}
                                            onChange={() => handleCheckboxChange('checkbox25')}
                                            inputProps={{ 'aria-label': 'Checkbox 1' }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Checkbox
                                            checked={selectedCheckboxes.includes('checkbox26')}
                                            onChange={() => handleCheckboxChange('checkbox26')}
                                            inputProps={{ 'aria-label': 'Checkbox 1' }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Checkbox
                                            checked={selectedCheckboxes.includes('checkbox27')}
                                            onChange={() => handleCheckboxChange('checkbox27')}
                                            inputProps={{ 'aria-label': 'Checkbox 1' }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Checkbox
                                            checked={selectedCheckboxes.includes('checkbox28')}
                                            onChange={() => handleCheckboxChange('checkbox28')}
                                            inputProps={{ 'aria-label': 'Checkbox 1' }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Checkbox
                                            checked={selectedCheckboxes.includes('checkbox29')}
                                            onChange={() => handleCheckboxChange('checkbox29')}
                                            inputProps={{ 'aria-label': 'Checkbox 1' }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                        <Checkbox
                                            checked={selectedCheckboxes.includes('checkbox30')}
                                            onChange={() => handleCheckboxChange('checkbox30')}
                                            inputProps={{ 'aria-label': 'Checkbox 1' }}
                                        />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box sx={{paddingLeft : '1000px', paddingTop : '20px'}}>
                    <Button variant="contained" sx={{height : '30px', backgroundColor : 'green', fontSize : '12px' , marginRight : '20px'}}>
                        Thanh toán
                    </Button>
                    <Button variant="contained" sx={{height : '30px', backgroundColor : 'red', fontSize : '12px'}}>
                        Cancel
                    </Button>
                </Box>
            </Box>

        </Box>);
}

export default BookTime;