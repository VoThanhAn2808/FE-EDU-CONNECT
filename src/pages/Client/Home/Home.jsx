import React from 'react';
import './Home.css';
import Slide from './Slide/Slide';
import AN from "../../../assests/1.jpg"
import ANN from "../../../assests/image 1.jpg"
import GIASU from "../../../assests/giasu.jpg"
import GIASU1 from "../../../assests/image8.jpg"
import GIASU2 from "../../../assests/image7.jpg"
import INFOR from "../../../assests/image9.jpg"
import WHY from "../../../assests/image10.jpg"
import IMAGE25 from "../../../assests/image 25.jpg"
// import IMAGE27 from "../../assests/image 27.jpg"
import HOTNEW from "../../../assests/hotnew.jpg"

// import FooterHome from './Footerhome/FooterHome';
import { Box, Button, Grid, Typography } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function Home() {
    return (
        <Box sx={{
        }}>
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

            <Box>
                <Typography
                    sx={{
                        fontSize: "20px",
                        fontFamily: "cursive",
                        marginTop: "60px",
                        textAlign: "center",
                        marginBottom: "40px"
                    }}
                >Gia sư nỗi bật trong tháng</Typography>

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
                                    fontFamily: "cursive"
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
                                    fontFamily: "cursive"
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
                                    fontFamily: "cursive"
                                }}>Thông Tin</Typography>
                            <img src={GIASU} alt="giasu" className='giasu' />
                        </Box>
                    </Grid>

                </Grid>
            </Box>

            <Box sx={{ marginTop: "70px" }}>
                <Grid container spacing={0}>

                    <Grid item xs={6}>
                        <Box className='giasu-container'
                            sx={{
                                backgroundColor: "#FBF0D9",
                                borderRadius: "25px"
                            }}>
                            <Typography className='giasu-content'
                                sx={{
                                    color: "#00000",
                                    fontWeight: "540",
                                    fontSize: "33px",
                                    fontFamily: "cursive",
                                    width: "80%",
                                    marginLeft: "5%"
                                }}
                            >
                                Dạy kèm một với một
                            </Typography>
                            <img src={GIASU1} alt="giasu1" className='giasu1' />
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box className='giasu-container'
                            sx={{
                                backgroundColor: "#FFE7AA",
                                borderRadius: "25px"
                            }}>
                            <Typography className='giasu-content'
                                sx={{
                                    color: "#00000",
                                    fontWeight: "540",
                                    fontSize: "33px",
                                    fontFamily: "cursive",
                                    width: "80%"
                                }}
                            >
                                Bài giảng mới nhất
                            </Typography>
                            <img src={GIASU2} alt="giasu2" className='giasu2' />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Typography
                    sx={{
                        fontSize: "20px",
                        fontFamily: "cursive",
                        marginTop: "70px",
                        textAlign: "center",
                        marginBottom: "40px"
                    }}
                >Thông tin về chúng tôi</Typography>
                <img src={INFOR} alt="infor" className='infor' />
                <Typography
                    sx={{
                        fontSize: "24px",
                        marginTop: "70px",
                        marginX: "30px",
                    }}
                >
                    EDU-CONNECT nhằm mục đích giúp mọi người đạt được trải nghiệm học tập hiệu quả nhất.
                    Gia sư sẽ được tuyển chọn kỹ lưỡng một cách hiệu quả nhất. Nếu bạn là sinh viên và có quyền truy
                    cập thông tin về từng gia sư, nhân viên của chúng tôi sẽ tương tác với bạn khi bạn là sinh viên mới hoặc gia sư
                    mới đăng ký trên trang web của chúng tôi. Chúng tôi sẽ đưa ra những lời khuyên phù hợp cho những học viên
                    chưa chắc chắn về việc chọn gia sư. Bằng cách này, bạn có thể chọn một gia sư phù hợp với nhu cầu của mình.
                    Tuy nhiên, điều này cũng giúp sinh viên tiếp cận được những gia sư xuất sắc và tạo cơ hội giảng dạy cho những
                    nhà giáo dục tâm huyết thỏa mãn nguyện vọng giảng dạy và kiếm thêm thu nhập.
                    Hơn nữa, khách hàng dài hạn có thể được hưởng các dịch vụ khuyến mại do trang web của chúng tôi cung cấp.
                </Typography>
            </Box>

            <Box>
                <Typography
                    sx={{
                        fontSize: "20px",
                        fontFamily: "cursive",
                        marginTop: "60px",
                        textAlign: "center",
                        marginBottom: "40px"
                    }}
                >Tại sao bạn nên chọn chúng tôi<br />
                    -Làm thế nào để học một cách hiệu quả nhất-
                </Typography>
                <Box>
                    <Box>
                        <Grid container spacing={0}>

                            <Grid item xs={6}>
                                <Box className='why-1'>
                                    <Typography className='why-content'
                                        sx={{
                                            color: "#00000",
                                            fontSize: "17px",
                                            fontFamily: "cursive",
                                        }}
                                    >
                                        Tư duy sáng tạo <br />
                                    </Typography>
                                    <Typography className='why-content'
                                        sx={{
                                            marginTop: "4%",
                                            fontSize: "12px",

                                        }}>
                                        Phát triển tư duy <br />
                                        trong những bài học
                                    </Typography>
                                    <img src={IMAGE25} alt="image25" className='image25' />
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box className='giasu-container'>
                                    <Typography className='why-content'
                                        sx={{
                                            color: "#00000",
                                            fontSize: "17px",
                                            fontFamily: "cursive",
                                        }}
                                    >
                                        Tư duy sáng tạo <br />
                                    </Typography>
                                    <Typography className='why-content'
                                        sx={{
                                            marginTop: "4%",
                                            fontSize: "12px",

                                        }}>
                                        Phát triển tư duy <br />
                                        trong những bài học
                                    </Typography>
                                    <img src={IMAGE25} alt="image27" className='image27' />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    {/* đoạn 2 */}
                    <Box sx={{ marginTop: "10px" }}>
                        <Grid container spacing={1}>

                            <Grid item xs={4}>
                                <Box className='why-1'>
                                    <Typography className='why-content'
                                        sx={{
                                            color: "#00000",
                                            fontSize: "17px",
                                            fontFamily: "cursive",
                                        }}
                                    >
                                        Tư duy sáng tạo <br />
                                    </Typography>
                                    <Typography className='why-content'
                                        sx={{
                                            marginTop: "6%",
                                            fontSize: "12px",

                                        }}>
                                        Phát triển tư duy <br />
                                        trong những bài học
                                    </Typography>
                                    <img src={IMAGE25} alt="image25" className='image25' />
                                </Box>
                            </Grid>

                            <Grid item xs={4}>
                                <img src={WHY} alt="why" className='infor' />
                            </Grid>

                            <Grid item xs={4}>
                                <Box className='giasu-container'>
                                    <Typography className='why-content'
                                        sx={{
                                            color: "#00000",
                                            fontSize: "17px",
                                            fontFamily: "cursive",
                                        }}
                                    >
                                        Tư duy sáng tạo <br />
                                    </Typography>
                                    <Typography className='why-content'
                                        sx={{
                                            marginTop: "6%",
                                            fontSize: "12px",

                                        }}>
                                        Phát triển tư duy <br />
                                        trong những bài học
                                    </Typography>
                                    <img src={IMAGE25} alt="image27" className='image28' />
                                </Box>
                            </Grid>

                        </Grid>
                    </Box>

                    {/* đoạn 3 */}
                    <Box>
                        <Grid container spacing={0}>

                            <Grid item xs={6}>
                                <Box className='why-1'>
                                    <Typography className='why-content'
                                        sx={{
                                            color: "#00000",
                                            fontSize: "17px",
                                            fontFamily: "cursive",
                                        }}
                                    >
                                        Tư duy sáng tạo <br />
                                    </Typography>
                                    <Typography className='why-content'
                                        sx={{
                                            marginTop: "4%",
                                            fontSize: "12px",

                                        }}>
                                        Phát triển tư duy <br />
                                        trong những bài học
                                    </Typography>
                                    <img src={IMAGE25} alt="image25" className='image25' />
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box className='giasu-container'>
                                    <Typography className='why-content'
                                        sx={{
                                            color: "#00000",
                                            fontSize: "17px",
                                            fontFamily: "cursive",
                                        }}
                                    >
                                        Tư duy sáng tạo <br />
                                    </Typography>
                                    <Typography className='why-content'
                                        sx={{
                                            marginTop: "4%",
                                            fontSize: "12px",

                                        }}>
                                        Phát triển tư duy <br />
                                        trong những bài học
                                    </Typography>
                                    <img src={IMAGE25} alt="image27" className='image27' />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Box>

            <Box sx={{
                marginBottom: "70px",
            }}>
                <Typography
                    sx={{
                        fontSize: "20px",
                        fontFamily: "cursive",
                        marginTop: "60px",
                        textAlign: "center",
                        marginBottom: "40px"
                    }}
                >Tin tức</Typography>

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
            {/* <FooterHome /> */}
        </Box>
    );
}

export default Home;
