import React from "react";
import "./HomeStudent.css";
import { Box, Button, Grid, Typography } from "@mui/material";
import Slide from "../../Guest/Home/Slide/Slide";
import SubjectPage from "../../Guest/ListSubject/SubjectPage";
import AN from "../../../assests/1.jpg"
import ANN from "../../../assests/image 1.jpg"
import GIASU from "../../../assests/giasu.jpg"
import HOTNEW from "../../../assests/hotnew.jpg"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';




function Home() {
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

            <Box sx={{marginTop: "80px"}}>
             <Typography sx={{fontSize: "20px"}} className="relsubject">
                    <span className="line" />
                    Những gia sư liên quan
                    <span className="line" />
             </Typography>
                <SubjectPage />
            </Box>

            <Box sx={{
                marginBottom: "70px",
            }}>
            <Typography sx={{fontSize: "20px", paddingBottom: "30px"}} className="relsubject">
                    <span className="line" />
                    Gia sư nỗi bật trong tháng
                    <span className="line" />
             </Typography>

                <Grid container spacing={1}>

                    <Grid item xs={4} >
                        <Box className='giasu-container'>
                            <Typography className='giasutext'
                                sx={{
                                    color: "#00000",
                                    fontWeight: "700",
                                    fontSize: "20px",
                                    fontFamily: "math"
                                }}>
                                Gia Sư
                            </Typography>
                            <Typography className='giasu-name'
                                sx={{
                                    color: "#00000",
                                    fontWeight: "800",
                                    fontSize: "20px",
                                }}>
                                NGUYỄN TRỌNG HIẾU
                            </Typography>
                            <Typography className='giasu-infor'
                                sx={{
                                    color: "#00000",
                                    fontWeight: "400",
                                    fontSize: "20px",
                                    fontFamily: "cursive",
                                    height: "35px",
                                    width: "150px",
                                    backgroundColor: "red",
                                    borderRadius: "5px",
                                }}>Thông Tin</Typography>
                            <img src={GIASU} alt="giasu" className='giasu' />
                        </Box>
                    </Grid>

                    <Grid item xs={4}>
                        <Box className='giasu-container'>
                            <Typography className='giasutext'
                                sx={{
                                    color: "#00000",
                                    fontWeight: "700",
                                    fontSize: "20px",
                                    fontFamily: "math"
                                }}>
                                Gia Sư
                            </Typography>
                            <Typography className='giasu-name'
                                sx={{
                                    color: "#00000",
                                    fontWeight: "800",
                                    fontSize: "20px",
                                }}>
                                NGUYỄN TRỌNG HIẾU
                            </Typography>
                            <Typography className='giasu-infor'
                                sx={{
                                    color: "#00000",
                                    fontWeight: "400",
                                    fontSize: "20px",
                                    fontFamily: "cursive",
                                    height: "35px",
                                    width: "150px",
                                    backgroundColor: "red",
                                    borderRadius: "5px",
                                }}>Thông Tin</Typography>
                            <img src={GIASU} alt="giasu" className='giasu' />
                        </Box>
                    </Grid>

                    <Grid item xs={4}>
                        <Box className='giasu-container'>
                            <Typography className='giasutext'
                                sx={{
                                    color: "#00000",
                                    fontWeight: "700",
                                    fontSize: "20px",
                                    fontFamily: "math"
                                }}>
                                Gia Sư
                            </Typography>
                            <Typography className='giasu-name'
                                sx={{
                                    color: "#00000",
                                    fontWeight: "800",
                                    fontSize: "20px",
                                }}>
                                NGUYỄN TRỌNG HIẾU
                            </Typography>
                            <Typography className='giasu-infor'
                                sx={{
                                    color: "#00000",
                                    fontWeight: "400",
                                    fontSize: "20px",
                                    fontFamily: "cursive",
                                    height: "35px",
                                    width: "150px",
                                    backgroundColor: "red",
                                    borderRadius: "5px",
                                }}>Thông Tin</Typography>
                            <img src={GIASU} alt="giasu" className='giasu' />
                        </Box>
                    </Grid>

                </Grid>
            </Box>

            <Box >
                <Typography sx={{fontSize: "20px" }} className="relsubject">
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
                            <Button variant="contained" color="success" sx={{fontSize:"10px", height: "20px", width:"90px", margin:"0 auto", borderRadius: "15px"}}>
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
                            <Button variant="contained" color="success" sx={{fontSize:"10px", height: "20px", width:"90px", margin:"0 auto", borderRadius: "15px"}}>
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
                            <Button variant="contained" color="success" sx={{fontSize:"10px", height: "20px", width:"90px", margin:"0 auto", borderRadius: "15px"}}>
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