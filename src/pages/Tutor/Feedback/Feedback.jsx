import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Tutor from "../../../assests/tutor.png"
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

function Feedback() {
    return ( 
        <Box>
            <Box className="body-tutor">
                <Grid container spacing={1}>
                    <Grid item xs={5}>
                        <Box sx={{
                            position: "relative",
                            height: "50%",
                            paddingBottom: "70%",
                        }}>
                            <img src={Tutor} alt="an" style={{
                                position: "absolute",
                                height: "80%",
                                width: "40%",
                                left: "25%",
                                top: "10%"
                            }}/>
                        </Box>
                    </Grid>
                    <Grid item xs={7}>
                        <Box className="infortutor">
                            <Typography className="Nametutor">
                                Tên gia sư
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
                    </Grid>
                </Grid>
            </Box>
        </Box>
     );
}

export default Feedback;