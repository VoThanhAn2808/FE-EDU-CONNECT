import React, { useEffect, useState } from "react";
import './BookTutor.css';
import { Box, Grid, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function BookTutorSTPage() {

    const [data, setData] = useState([]);

    const { tutorid } = useParams();
    const { classcourseid } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8081/educonnect/tutor/booktutor?tutorid=${tutorid}&classcourseid=${classcourseid}`)
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [tutorid, classcourseid]);
    const img = `http://localhost:8081/edu/file/files/${data.img}`;
    const [page, setPage] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8081/tutorByCourse/find4TutorByCourse?CourseId=${classcourseid}`)
            .then((response) => {
                setPage(response.data); // Sửa từ response.top thành response.data
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [classcourseid]);

    const [course, setCourse] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8081/course/findCourseByTutor?tutorid=${tutorid}`)
            .then((response) => {
                setCourse(response.data); // Sửa từ response.top thành response.data
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [tutorid]);

    const decodedToken = jwtDecode(localStorage.getItem('token'));
    const [student, setStudent] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/student/viewstudent?email=" + decodedToken.sub)
            .then((response) => {
                setStudent(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [decodedToken.sub]);

    const studentid = student.studentid;
    const handleSubmit = async (event) => {
        event.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };

        try {
            const response = await axios.post(
                "http://localhost:8081/book/bookcourse",
                {
                    studentId: studentid,
                    tutorId: tutorid,
                    classCourseId: classcourseid,
                },
                config
            );
            window.location.href = '/booktime/' + tutorid;
            console.log(response.data);
        } catch (error) {
            console.error(error);
            console.log(error.response.data);
        }
    };
    return (
        <Box className="body">
            <Box className="body-tutor" >
                <Grid container spacing={1}>
                    <Grid item xs={5} >
                        <Box className="tutor-infor">
                            <img src={img} alt={data.fullname} className="tutor-img" />
                        </Box>
                    </Grid>
                    <Grid item xs={7}>
                        <Box className="infortutor">
                            <Typography className="Nametutor">
                                Tên gia sư
                            </Typography>
                            <Typography className="people">
                                <PersonIcon className="number" />
                                {data.count}
                                <ShareIcon className="share" />
                                <MoreHorizIcon className="more" />
                            </Typography>
                        </Box>
                        <Typography className="name">
                            {data.fullname}
                        </Typography>
                        <Typography className="subject">
                            Môn dạy
                        </Typography>
                        <Typography className="course">
                            {data.coursename} {data.className}
                        </Typography>
                        <Typography className="price">
                            Giá
                        </Typography>
                        <Typography className="price-number">
                            {data.price}Đ
                        </Typography>
                        <Typography className="rank">
                            Rank
                        </Typography>
                        <Rating
                            name="five-star-rating"
                            value={data.ranks ?? 0}  // Provide a default value of 0 if data.ranks is undefined
                            max={5}
                            readOnly
                            emptyIcon={<StarIcon style={{ fontSize: '30px', color: '#e0e0e0' }} />}
                            icon={<StarIcon style={{ fontSize: '30px', color: '#ffc107' }} />}
                            sx={{
                                fontSize: '20px',
                                marginLeft: '5%'
                            }}
                        />

                        <form onSubmit={handleSubmit}>
                            <Box className="button">
                                <Button 
                                    variant="contained" className="register" type="submit">
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
                        </form>
                    </Grid>
                </Grid>
            </Box>

            <Box className='bodysubject'>
                <Typography className="relsubject">
                    <span className="line" />
                    Những môn gia sư dạy
                    <span className="line" />
                </Typography>
                <Grid container spacing={1} >
                    {course.map((item, index) => (
                        <Grid item xs={3} key={index}>
                            <Box className='top4couse'>
                                <img src={`http://localhost:8081/edu/file/files/${item.img}`} alt={item.courseName} className="courseimg" />
                                <Typography className="namebook">
                                    {item.courseName} {item.level}
                                </Typography>
                                <Box sx={{ display: 'flex', marginBottom: '20px', marginTop: '10px' }}>
                                    <Typography className="numberpeople">
                                        <PersonIcon className="total" />
                                        {item.CountStudent}
                                    </Typography>
                                    <Link to={`/listtutor/${item.classCourseId}`}>
                                        <Button variant="contained" className="buttonchitiet">
                                            Chi tiết
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box className='bodysubject' >
                <Typography className="relsubject">
                    <span className="line" />
                    Những gia sư liên quan
                    <span className="line" />
                </Typography>
                <Grid container spacing={1}>
                    {page.map((item, index) => (
                        <Grid item xs={3} key={index}>
                            <Box className='top4couse'>
                                <Typography sx={{ fontSize: '12px', textAlign: 'center', marginTop: '5px' }}>
                                    Gia sư dạy {item.coursename} {item.classentity}
                                </Typography>
                                <img src={`http://localhost:8081/edu/file/files/${item.img}`} alt="subject" className="imgtutor" />
                                <Rating
                                    name="five-star-rating"
                                    value={item.ranks}
                                    max={5}
                                    readOnly
                                    emptyIcon={<StarIcon style={{ fontSize: '25px', color: '#e0e0e0' }} />}
                                    icon={<StarIcon style={{ fontSize: '25px', color: '#ffc107' }} />}
                                    sx={{

                                    }}
                                />
                                <Typography sx={{ fontSize: '15px', textAlign: 'center', }}>
                                    {item.fullname}
                                </Typography>
                                <Button
                                    variant="contained" className="button-register">
                                    Xem thông tin
                                </Button>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default BookTutorSTPage;