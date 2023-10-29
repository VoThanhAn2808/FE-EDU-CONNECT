import React from "react";
import Tutor from "../../assests/tutor.png"
import './BookTutor.css';
import { Box, Grid, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import subject from "../../assests/subject.png";

function BookTutorPage() {
    return (
        <Box className="body">
            <Box className="body-tutor">
                <Grid container spacing={1}>
                    <Grid item xs={5}>
                        <Box className="tutor-infor">
                            <img src={Tutor} alt="an" className="tutor-img" />
                        </Box>
                    </Grid>
                    <Grid item xs={7}>
                        <Box className="infortutor">
                            <Typography className="Nametutor">
                                Tên gia sư
                            </Typography>
                            <Typography className="people">
                                <PersonIcon className="number" />
                                100
                                <ShareIcon className="share" />
                                <MoreHorizIcon className="more" />
                            </Typography>
                        </Box>
                        <Typography className="name">
                            Nguyễn Văn A
                        </Typography>
                        <Typography className="subject">
                            Môn dạy
                        </Typography>
                        <Typography className="course">
                            Toán Đại Số 10
                        </Typography>
                        <Typography className="price">
                            Giá
                        </Typography>
                        <Typography className="price-number">
                            1.000.000Đ
                        </Typography>
                        <Typography className="rank">
                            Rank
                        </Typography>
                        <Rating
                            name="five-star-rating"
                            value={5}
                            max={5}
                            readOnly
                            emptyIcon={<StarIcon style={{ fontSize: '30px', color: '#e0e0e0' }} />}
                            icon={<StarIcon style={{ fontSize: '30px', color: '#ffc107' }} />}
                            sx={{
                                fontSize: '20px',
                                marginLeft: '5%'
                            }}
                        />
                        <Box className="button">
                            <Button
                                variant="contained" className="register">
                                Đăng ký ngay
                            </Button>
                            <Button
                                variant="contained" className="infor">
                                Thông Tin
                            </Button>
                            <Button
                                variant="contained" className="try">
                                Đăng ký học thử
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box className='bodysubject'>
                <Typography className="relsubject">
                    <span className="line" />
                    Những gia sư liên quan
                    <span className="line" />
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <Box className='top4couse'>
                            <img src={subject} alt="subject" className="courseimg" />
                            <Typography className="namebook">
                                Đại số 10
                            </Typography>
                            <Box sx={{ display: 'flex' }} >
                                <Typography className="numberpeople">
                                    <PersonIcon className="total" />
                                    100
                                </Typography>
                                <Button variant="contained" className="buttonchitiet">
                                    Chi tiết
                                </Button>
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box className='top4couse'>
                            <img src={subject} alt="subject" className="courseimg" />
                            <Typography className="namebook">
                                Đại số 10
                            </Typography>
                            <Box sx={{ display: 'flex' }} >
                                <Typography className="numberpeople">
                                    <PersonIcon className="total" />
                                    100
                                </Typography>
                                <Button variant="contained" className="buttonchitiet">
                                    Chi tiết
                                </Button>
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box className='top4couse'>
                            <img src={subject} alt="subject" className="courseimg" />
                            <Typography className="namebook">
                                Đại số 10
                            </Typography>
                            <Box sx={{ display: 'flex' }} >
                                <Typography className="numberpeople">
                                    <PersonIcon className="total" />
                                    100
                                </Typography>
                                <Button variant="contained" className="buttonchitiet">
                                    Chi tiết
                                </Button>
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box className='top4couse'>
                            <img src={subject} alt="subject" className="courseimg" />
                            <Typography className="namebook">
                                Đại số 10
                            </Typography>
                            <Box sx={{ display: 'flex' }} >
                                <Typography className="numberpeople">
                                    <PersonIcon className="total" />
                                    100
                                </Typography>
                                <Button variant="contained" className="buttonchitiet">
                                    Chi tiết
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box className='bodysubject' >
                <Typography className="relsubject">
                    <span className="line" />
                    Những gia sư liên quan
                    <span className="line" />
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <Box className='top4couse'>
                            <Typography sx={{ fontSize: '12px', textAlign: 'center', marginTop: '5px' }}>
                                Gia sư dạy toán
                            </Typography>
                            <img src={Tutor} alt="subject" className="imgtutor" />
                            <Rating
                                name="five-star-rating"
                                value={5}
                                max={5}
                                readOnly
                                emptyIcon={<StarIcon style={{ fontSize: '25px', color: '#e0e0e0' }} />}
                                icon={<StarIcon style={{ fontSize: '25px', color: '#ffc107' }} />}
                                sx={{

                                }}
                            />
                            <Typography sx={{ fontSize: '15px', textAlign: 'center', }}>
                                Nguyễn Văn A
                            </Typography>
                            <Button
                                variant="contained" className="button-register">
                                Đăng ký ngay
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box className='top4couse'>
                            <Typography sx={{ fontSize: '12px', textAlign: 'center', marginTop: '5px' }}>
                                Gia sư dạy toán
                            </Typography>
                            <img src={Tutor} alt="subject" className="imgtutor" />
                            <Rating
                                name="five-star-rating"
                                value={5}
                                max={5}
                                readOnly
                                emptyIcon={<StarIcon style={{ fontSize: '25px', color: '#e0e0e0' }} />}
                                icon={<StarIcon style={{ fontSize: '25px', color: '#ffc107' }} />}
                                sx={{

                                }}
                            />
                            <Typography sx={{ fontSize: '15px', textAlign: 'center', }}>
                                Nguyễn Văn A
                            </Typography>
                            <Button
                                variant="contained" className="button-register">
                                Đăng ký ngay
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box className='top4couse'>
                            <Typography sx={{ fontSize: '12px', textAlign: 'center', marginTop: '5px' }}>
                                Gia sư dạy toán
                            </Typography>
                            <img src={Tutor} alt="subject" className="imgtutor" />
                            <Rating
                                name="five-star-rating"
                                value={5}
                                max={5}
                                readOnly
                                emptyIcon={<StarIcon style={{ fontSize: '25px', color: '#e0e0e0' }} />}
                                icon={<StarIcon style={{ fontSize: '25px', color: '#ffc107' }} />}
                                sx={{

                                }}
                            />
                            <Typography sx={{ fontSize: '15px', textAlign: 'center', }}>
                                Nguyễn Văn A
                            </Typography>
                            <Button
                                variant="contained" className="button-register">
                                Đăng ký ngay
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box className='top4couse'>
                            <Typography sx={{ fontSize: '12px', textAlign: 'center', marginTop: '5px' }}>
                                Gia sư dạy toán
                            </Typography>
                            <img src={Tutor} alt="subject" className="imgtutor" />
                            <Rating
                                name="five-star-rating"
                                value={5}
                                max={5}
                                readOnly
                                emptyIcon={<StarIcon style={{ fontSize: '25px', color: '#e0e0e0' }} />}
                                icon={<StarIcon style={{ fontSize: '25px', color: '#ffc107' }} />}
                                sx={{

                                }}
                            />
                            <Typography sx={{ fontSize: '15px', textAlign: 'center', }}>
                                Nguyễn Văn A
                            </Typography>
                            <Button
                                variant="contained" className="button-register">
                                Đăng ký ngay
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default BookTutorPage;