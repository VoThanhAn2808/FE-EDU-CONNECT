import { Textarea } from "@mui/joy";
import { Box, Button, Modal, Paper, Rating, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const data = [
    { id: 1, studnet: 'Nguyễn Văn A', date: '2023-03-05', tutor: 'Võ Văn A', subject: 'Đại số' },
    { id: 2, studnet: 'Nguyễn Văn A', date: '2023-03-05', tutor: 'Võ Văn A', subject: 'Đại số' },
    { id: 3, studnet: 'Nguyễn Văn A', date: '2023-03-05', tutor: 'Võ Văn A', subject: 'Đại số' },
    { id: 4, studnet: 'Nguyễn Văn A', date: '2023-03-05', tutor: 'Võ Văn A', subject: 'Đại số' },
];

function Feedback() {
    const [open, setOpen] = React.useState(false);
    const [ratingValue, setRatingValue] = useState(0);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleRatingChange = (event, newValue) => {
        setRatingValue(newValue);
    };
    const styles = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 350,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        padding: 16,
    };

    return (
        <Box sx={{ height: '100%' }}>
            <Box sx={{ backgroundColor: 'gray', width: '980px', marginLeft: 'auto', borderRadius: '20%', marginRight: 'auto', marginTop: '50px' }}>
                <TableContainer component={Paper} sx={{ width: '100%' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{border: '1px solid #000000', padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: '#D7AA67', textAlign: 'center' }}>Tên</TableCell>
                                <TableCell sx={{border: '1px solid #000000', padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: '#D7AA67', textAlign: 'center' }}>Ngày bắt đầu</TableCell>
                                <TableCell sx={{border: '1px solid #000000', padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: '#D7AA67', textAlign: 'center' }}>Gia sư</TableCell>
                                <TableCell sx={{border: '1px solid #000000', padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: '#D7AA67', textAlign: 'center' }}>Môn học</TableCell>
                                <TableCell sx={{border: '1px solid #000000', padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: '#D7AA67', textAlign: 'center' }}>Phản hồi</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((item, key) => (
                                <TableRow key={key}>
                                    <TableCell sx={{ border: '1px solid #000000', width: '100px', height: '50px', backgroundColor: '#D9D9D9', fontSize: '15px', fontFamily: 'cursive', textAlign: 'center' }}>{item.studnet}</TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '100px', height: '50px', backgroundColor: '#D9D9D9', fontSize: '15px', fontFamily: 'cursive', textAlign: 'center' }}>{item.date}</TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '100px', height: '50px', backgroundColor: '#D9D9D9', fontSize: '15px', fontFamily: 'cursive', textAlign: 'center' }}>{item.tutor}</TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '100px', height: '50px', backgroundColor: '#D9D9D9', fontSize: '15px', fontFamily: 'cursive', textAlign: 'center' }}>{item.subject}</TableCell>
                                    <TableCell sx={{ border: '1px solid #000000', width: '100px', height: '50px', backgroundColor: '#D9D9D9', fontSize: '15px', fontFamily: 'cursive', textAlign: 'center' }} >
                                        <Button onClick={handleOpen} variant="contained" sx={{ textAlign: 'center', fontSize: '10px', fontFamily: 'cursive' }}>
                                            Phản hồi
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box sx={{ paddingLeft: '70%', paddingTop: '20px' }}>
                <Link to="/homestudent">
                    <Button variant="contained" sx={{ backgroundColor: '#D7AA67', fontSize: '12px', fontFamily: 'cursive' }}> Quay trở lại</Button>
                </Link>
            </Box>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styles}>
                    <Typography id="modal-modal-title" component="h2" sx={{ marginTop: '-80px', fontSize: '15px', fontFamily: 'cursive', textAlign: 'center' }}>
                        Đánh giá gia sư
                    </Typography>
                    <Rating
                        name="star-rating"
                        value={ratingValue}
                        onChange={handleRatingChange}
                        size="large"
                        sx={{ marginTop: '20px', fontSize: '20px', marginLeft: '15%' }}
                    />
                    <Textarea placeholder='Chú thích'
                        InputLabelProps={{
                            style: {
                                fontSize: '12px',
                                color: 'rgba(0, 0, 0, 0.54)',
                            },
                        }}
                        sx={{
                            width: '200px',
                            height: '100px',
                            marginLeft: '-30px',
                            marginTop: '30px',
                            fontSize: '15px'
                        }}
                        InputProps={{
                            style: {
                                fontSize: '14px',
                                height: '45px'
                            },
                        }} />
                    <Button variant="contained" style={{ width: '70px', fontSize: '18px', marginTop: '30px', marginLeft: '20%' }}>Lưu</Button>
                </Box>
            </Modal>
        </Box>
    );
}

export default Feedback;