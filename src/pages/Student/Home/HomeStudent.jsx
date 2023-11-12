import React, { useCallback, useEffect, useState } from "react";
import "./HomeStudent.css";
import { Box, Button, Grid, Typography } from "@mui/material";
import Slide from "../../Guest/Home/Slide/Slide";
import AN from "../../../assests/1.jpg"
import ANN from "../../../assests/image 1.jpg"
import HOTNEW from "../../../assests/hotnew.jpg"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import axios from "axios";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';

function Home() {
    const [user, setUser] = useState([]);
    const [course, setStudentData] = useState([]);
    const decodedToken = jwtDecode(localStorage.getItem('token'));
    const userId = decodedToken.sub;

    const fetchUser = useCallback(async () => {
        try {
            const response = await axios.get(
                `http://localhost:8081/student/viewstudent?email=${userId}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            setUser(response.data);
        } catch (error) {
            console.error(error);
        }
    }, [userId]);

    const fetchStudentData = useCallback(async () => {
        try {
            const studentResponse = await axios.get(
                `http://localhost:8081/course/listcourseforstudent?classcourseid=${user.classId}&studentid=${user.studentid}`
            );
            setStudentData(studentResponse.data);
        } catch (error) {
            console.error(error);
        }
    },[user.classId, user.studentid]);

    useEffect(() => {
        fetchUser();
    }, [userId, fetchUser]);

    useEffect(() => {
        if (user.classId && user.studentid) {
            fetchStudentData();
        }
    }, [user.classId, user.studentid, fetchStudentData]);


    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8081/educonnect/tutor/top3")
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <Box sx={{ marginBottom: "200px" }}>
            <Slide />
            <Box
                sx={{
                    height: "182px",
                    display: "flex",
                }}>
                <img src={AN} alt="an" className='an' />
                <Box>
                    <Typography
                        sx={{
                            color: "#804F4F",
                            fontWeight: "800",
                            fontSize: "24px",
                            marginTop: "55px",
                            textDecoration: "underline"
                        }}
                    >
                        EDU-CONNECT
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "24px",
                            marginTop: "30px",
                        }}
                    >
                        EDU-CONNECT nhằm mục đích giúp mọi người
                        <br />đạt được trải nghiệm học tập hiệu quả nhất.
                    </Typography>
                </Box>
                <img src={ANN} alt="an" className='ann' />
            </Box>

            <Box sx={{ marginTop: "80px" }}>
                <Typography sx={{ fontSize: "20px" }} className="relsubject">
                    <span className="line" />
                    Những môn học liên quan
                    <span className="line" />
                </Typography>
                <Box className="body">
                    <Grid container spacing={2}>
                        {course.map((item) => (
                            <Grid item xs={12} sm={6} md={5} lg={3} key={item.classCourseId}>
                                <Box className="container">
                                    <img
                                        src={`http://localhost:8081/edu/file/files/${item.img}`}
                                        alt={item.courseName}
                                        className="subject-img"
                                    />
                                    <Typography className="nameSubject">
                                        {item.courseName} {item.className}
                                    </Typography>
                                    <Box sx={{ display: "flex" }}>
                                        <Typography className="inforsubject">
                                            <PersonIcon className="total" />
                                            {item.CountStudent}
                                        </Typography>
                                        <Link to={`/listtutorst/${item.classCourseId}`}>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                sx={{
                                                    height: "20px",
                                                    width: "80px",
                                                }}
                                            >
                                                Chi tiết
                                            </Button>
                                        </Link>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>

            <Box sx={{
                marginBottom: "70px",
            }}>
                <Typography sx={{ fontSize: "20px", paddingBottom: "30px" }} className="relsubject">
                    <span className="line" />
                    Gia sư nỗi bật trong tháng
                    <span className="line" />
                </Typography>

                <Grid container spacing={1}>
                    {data.map((item, index) => (
                        <Grid item xs={4} key={index}>
                            <Box className='top4couse'>
                                <Typography sx={{ fontSize: '15px', fontWeight: '700', textAlign: 'center', marginTop: '5px' }}>
                                    Gia sư
                                </Typography>
                                <img src={`http://localhost:8081/edu/file/files/${item.img}`} alt="subject" className="courseimg" />
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
                                <Typography sx={{ fontSize: '15px', textAlign: 'center', fontFamily: 'cursive', fontWeight: "700" }}>
                                    {item.fullname}
                                </Typography>
                                <Button
                                    variant="contained" className="button-register">
                                    Thông Tin
                                </Button>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box >
                <Typography sx={{ fontSize: "20px" }} className="relsubject">
                    <span className="line" />
                    Tin tức
                    <span className="line" />
                </Typography>

                <Grid container spacing={1}>

                    <Grid item xs={4}>
                        <img src={HOTNEW} alt="hotnew" className='hotnew' />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                width: '209px',
                                height: "135px",
                                margin: '0 auto',
                                backgroundColor: "#D9D9D9"
                            }}>
                            <Typography sx={{ marginBottom: 1, fontSize: "15px", marginLeft: "4%" }}>
                                Lượng học sinh năm 2023
                            </Typography>
                            <Typography sx={{ marginBottom: 1, fontSize: "15px", marginLeft: "4%" }}>
                                <CalendarTodayIcon sx={{ marginRight: "4%" }} />
                                20-08-2023
                            </Typography>
                            <Typography sx={{ marginBottom: 1, fontSize: "15px", marginLeft: "4%" }}>
                                Số lượng học sinh trong <br /> năm 2023 tăng hơn ...
                            </Typography>
                            <Button variant="contained" color="success" sx={{ fontSize: "10px", height: "20px", width: "90px", margin: "0 auto", borderRadius: "15px" }}>
                                Xem thêm
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item xs={4}>
                        <img src={HOTNEW} alt="hotnew" className='hotnew' />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                width: '209px',
                                height: "135px",
                                margin: '0 auto',
                                backgroundColor: "#D9D9D9"
                            }}>
                            <Typography sx={{ marginBottom: 1, fontSize: "15px", marginLeft: "4%" }}>
                                Lượng học sinh năm 2023
                            </Typography>
                            <Typography sx={{ marginBottom: 1, fontSize: "15px", marginLeft: "4%" }}>
                                <CalendarTodayIcon sx={{ marginRight: "4%" }} />
                                20-08-2023
                            </Typography>
                            <Typography sx={{ marginBottom: 1, fontSize: "15px", marginLeft: "4%" }}>
                                Số lượng học sinh trong <br /> năm 2023 tăng hơn ...
                            </Typography>
                            <Button variant="contained" color="success" sx={{ fontSize: "10px", height: "20px", width: "90px", margin: "0 auto", borderRadius: "15px" }}>
                                Xem thêm
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item xs={4}>
                        <img src={HOTNEW} alt="hotnew" className='hotnew' />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                width: '209px',
                                height: "135px",
                                margin: '0 auto',
                                backgroundColor: "#D9D9D9"
                            }}>
                            <Typography sx={{ marginBottom: 1, fontSize: "15px", marginLeft: "4%" }}>
                                Lượng học sinh năm 2023
                            </Typography>
                            <Typography sx={{ marginBottom: 1, fontSize: "15px", marginLeft: "4%" }}>
                                <CalendarTodayIcon sx={{ marginRight: "4%" }} />
                                20-08-2023
                            </Typography>
                            <Typography sx={{ marginBottom: 1, fontSize: "15px", marginLeft: "4%" }}>
                                Số lượng học sinh trong <br /> năm 2023 tăng hơn ...
                            </Typography>
                            <Button variant="contained" color="success" sx={{ fontSize: "10px", height: "20px", width: "90px", margin: "0 auto", borderRadius: "15px" }}>
                                Xem thêm
                            </Button>
                        </Box>
                    </Grid>

                </Grid>
            </Box>

        </Box>
    );
}

export default Home;