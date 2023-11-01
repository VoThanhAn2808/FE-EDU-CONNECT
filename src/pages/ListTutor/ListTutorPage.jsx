import { Box, Button, Grid, Typography, TextField, Pagination, Rating } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import React from "react";
import dcmdxdn from "../../assests/tutor.png";
import a from "../../assests/subject.png";
import "./ListTutor.css";
import StarIcon from '@mui/icons-material/Star';
import { Link } from "react-router-dom";

const data = [
    { id: 1, name: 'Nguyễn Văn A', student: 100, subject: 'Toán 10', imgLink: dcmdxdn, rank: 5 },
    { id: 2, name: 'Nguyễn Văn A', student: 100, subject: 'Toán 10', imgLink: a, rank: 4 },
    { id: 3, name: 'Nguyễn Văn A', student: 100, subject: 'Toán 10', imgLink: dcmdxdn, rank: 4 },
    { id: 4, name: 'Nguyễn Văn A', student: 100, subject: 'Toán 10', imgLink: a, rank: 3 },
    { id: 5, name: 'Nguyễn Văn A', student: 100, subject: 'Toán 10', imgLink: dcmdxdn, rank: 5 },
    { id: 6, name: 'Nguyễn Văn A', student: 100, subject: 'Toán 10', imgLink: a, rank: 3 },
    { id: 7, name: 'Nguyễn Văn A', student: 100, subject: 'Toán 10', imgLink: dcmdxdn, rank: 5 },
    { id: 8, name: 'Nguyễn Văn A', student: 100, subject: 'Toán 10', imgLink: a, rank: 5 },
    { id: 9, name: 'Nguyễn Văn A', student: 100, subject: 'Toán 10', imgLink: dcmdxdn, rank: 4 },
    { id: 10, name: 'Nguyễn Văn A', student: 100, subject: 'Toán 10', imgLink: a, rank: 5 },
    { id: 11, name: 'Nguyễn Văn A', student: 100, subject: 'Toán 10', imgLink: dcmdxdn, rank: 5 },
    { id: 12, name: 'Nguyễn Văn A', student: 100, subject: 'Toán 10', imgLink: a, rank: 4 },
];

const top = [
    { id: 1, name: 'Nguyễn Văn A', student: 100, subject: 'Toán 10', imgLink: dcmdxdn, rank: 5 },
    { id: 2, name: 'Nguyễn Văn A', student: 100, subject: 'Toán 10', imgLink: a, rank: 4 },
    { id: 3, name: 'Nguyễn Văn A', student: 100, subject: 'Toán 10', imgLink: dcmdxdn, rank: 4 },
    { id: 4, name: 'Nguyễn Văn A', student: 100, subject: 'Toán 10', imgLink: a, rank: 3 },

];

function ListTutor() {
    return (
        <Box sx={{
        }}>
            <Box sx={{
                marginLeft: '75%',
                marginTop: '90px',

            }}>
                <TextField
                    label="Tìm Kiếm..."
                    InputLabelProps={{
                        style: {
                            fontSize: '12px',
                            color: 'rgba(0, 0, 0, 0.54)',
                        },
                    }}
                    sx={{
                        borderRadius: '11%',
                        width: '200px',
                    }}
                    InputProps={{
                        style: {
                            fontSize: '14px',
                            height: '45px'
                        },
                    }}
                />
                <Button variant="contained" color="primary" component="a" href="#" hrefLang="#" sx={{
                    height: '45px',
                    marginLeft: '10px',
                    fontSize: '10px',
                    borderRadius: '11%'
                }}>
                    Tìm Kiếm
                </Button>
            </Box>
            <Box className="tutor">
                <Grid container spacing={2}>
                    {data.map((item, index) => (
                        <Grid item xs={12} sm={6} md={5} lg={3} key={index} sx={{ marginTop: '20px' }} >
                            <Box className='container'>
                                <Typography sx={{ fontSize: '15px', fontFamily: 'cursive' }}>Gia sư dạy</Typography>
                                <Typography sx={{ fontFamily: 'cursive', fontSize: '12px' }}>{item.subject}</Typography>
                                <img src={item.imgLink} alt={item.name} style={{ width: '50%', height: '100%' }} />
                                <Typography className="nameTutor">{item.name}</Typography>
                                <Rating
                                    name="five-star-rating"
                                    value={item.rank}
                                    max={5}
                                    readOnly
                                    emptyIcon={<StarIcon style={{ fontSize: '25px', color: '#e0e0e0' }} />}
                                    icon={<StarIcon style={{ fontSize: '25px', color: '#ffc107' }} />}
                                    sx={{

                                    }}
                                />
                                <Box sx={{ display: 'flex', marginTop: '20px' }} >
                                    <Typography className="inforsubject">
                                        <PersonIcon className="total" />
                                        {item.student}</Typography>
                                    <Link to='/booktutor'>
                                        <Button variant="contained" color="primary" component="a"
                                            sx={{
                                                height: '20px',
                                                width: '80px'
                                            }}>
                                            Chi tiết
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box >
            <Box sx={{ marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>
                <Pagination count={10} sx={{ '& .MuiPaginationItem-root': { fontSize: '15px', minWidth: '50px' } }} />
            </Box>
            <Box>
                <Typography sx={{ marginLeft: '40px', fontSize: '20px', fontFamily: 'cursive' }}>
                    Tham khảo các khóa học nhiều lượt đăng ký và đánh giá
                </Typography>
                <Box sx={{ marginLeft: '30px', marginTop: '30px' }}>
                    <Grid container spacing={1}>
                        {top.map((items) => (
                            <Grid item xs={3} key={items.id} sx={{ marginTop: '20px' }}>
                                <Box className='containers'>
                                    <Typography sx={{ fontSize: '15px', fontFamily: 'cursive', marginTop: '10px' }}>Gia sư dạy</Typography>
                                    <Typography sx={{ fontFamily: 'cursive', fontSize: '12px' }}>{items.subject}</Typography>
                                    <img src={items.imgLink} alt={items.name} style={{ width: '50%', height: '100%' }} />
                                    <Typography className="nameTutor">{items.name}</Typography>
                                    <Rating
                                        name="five-star-rating"
                                        value={items.rank}
                                        max={5}
                                        readOnly
                                        emptyIcon={<StarIcon style={{ fontSize: '25px', color: '#e0e0e0' }} />}
                                        icon={<StarIcon style={{ fontSize: '25px', color: '#ffc107' }} />}
                                        sx={{

                                        }}
                                    />
                                    <Box sx={{ display: 'flex', marginTop: '20px', marginBottom: '20px' }} >
                                        <Typography className="inforsubject">
                                            <PersonIcon />
                                            {items.student}</Typography>
                                        <Link to='/booktutor'>
                                            <Button variant="contained" color="primary" component="a"
                                                sx={{
                                                    height: '20px',
                                                    width: '80px'
                                                }}>
                                                Chi tiết
                                            </Button>
                                        </Link>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box sx={{ marginBottom: '60px', display: 'flex', justifyContent: 'center' }}>
                    <Pagination count={10} sx={{ '& .MuiPaginationItem-root': { fontSize: '15px', minWidth: '50px' } }} />
                </Box>
            </Box>
        </Box>
    );
}

export default ListTutor;