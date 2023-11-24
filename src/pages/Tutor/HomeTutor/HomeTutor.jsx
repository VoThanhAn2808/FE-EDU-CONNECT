import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Slide from "../../Guest/Home/Slide/Slide";
import AN from "../../../assests/1.jpg";
import ANN from "../../../assests/image 1.jpg";
import SubjectPage from "./ListSubject/SubjectPage";
import HOTNEW from "../../../assests/hotnew.jpg"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


function HomeTutor() {
    return (
        <Box>
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
            <Typography sx={{
                fontSize: "24px",
                textAlign:"center",
                marginTop:"90px"
            }}>
                <span style={{
                    display: "inline-block",
                    borderBottom:"1px solid #000000",
                    width: "30%",
                    marginBottom: "5px",
                }} />
                Những môn đã đăng ký
                <span style={{
                    display: "inline-block",
                    borderBottom:"1px solid #000000",
                    width: "30%",
                    marginBottom: "5px",
                }} />
            </Typography>
            <SubjectPage />
            <Typography sx={{
                fontSize: "24px",
                textAlign:"center",
                marginBottom: "30px",
                marginTop: "-70px"
            }}>
                <span style={{
                    display: "inline-block",
                    borderBottom:"1px solid #000000",
                    width: "30%",
                    marginBottom: "5px",
                }} />
                Tin Tức
                <span style={{
                    display: "inline-block",
                    borderBottom:"1px solid #000000",
                    width: "30%",
                    marginBottom: "5px",
                }} />
            </Typography>
            <Grid container spacing={1} sx={{marginBottom: "30px"}}>

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
    );
}

export default HomeTutor;