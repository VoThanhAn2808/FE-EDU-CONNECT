import React, { useEffect, useState } from "react";
import "./../ListSubject/Subject.css";
import { Box, Grid, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

function SubjectPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8081/course/findCourseByClass?classcourseid=1")
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <Box className="body">
            <Grid container spacing={2}>
                {data.map((item) => (
                    <Grid item xs={12} sm={6} md={5} lg={3} key={item.classCourseId}>
                        <Box className="container">
                            <img src={item.img} alt={item.courseName} className="subject-img" />
                            <Typography className="nameSubject">
                                {item.courseName} {item.className}
                            </Typography>
                            <Box sx={{ display: "flex" }}>
                                <Typography className="inforsubject">
                                    <PersonIcon className="total" />
                                    {item.CountStudent}
                                </Typography>
                                <Link to="/listtutor">
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
    );
}

export default SubjectPage;