import React, { useEffect, useState } from "react";
import { Box, Typography, Link as Links } from "@mui/material";
import "./TeacherProgramList.css"
import SchoolIcon from '@mui/icons-material/School';
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';


function TeacherProgramList() {

    const { bookid } = useParams();
    const [data, setData] = useState([]);
    const [exercise, setExercise] = useState([]);
    const [file, setFiles] = useState([]);
    const [video, setVideo] = useState([]);
    const [classs, setClasss] = useState([]);
    const [home, setHome] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:8081/course/tutorexercise?bookid=${bookid}`)
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [bookid]);

    useEffect(() => {
        axios
            .get(`http://localhost:8081/exersice/findexersice?bookid=${bookid}`)
            .then((response) => {
                setExercise(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [bookid]);
    useEffect(() => {
        axios
            .get(`http://localhost:8081/exersice/fileexercise?bookid=${bookid}`)
            .then((response) => {
                setFiles(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [bookid]);
    useEffect(() => {
        axios
            .get(`http://localhost:8081/exersice/videoexercise?bookid=${bookid}`)
            .then((response) => {
                setVideo(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [bookid]);
    useEffect(() => {
        axios
            .get(`http://localhost:8081/exersice/classroomexercise?bookid=${bookid}`)
            .then((response) => {
                setClasss(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [bookid]);
    useEffect(() => {
        axios
            .get(`http://localhost:8081/exersice/homeworkexercise?bookid=${bookid}`)
            .then((response) => {
                setHome(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [bookid]);

    return (
        <Box sx={{
            height: '100%',
        }}>
            <Box sx={{ height: "130px", marginTop: "90px", borderRadius: "5px", marginLeft: "1%", marginRight: "1%", backgroundColor: "#E2D6D6" }}>
                <Typography sx={{ fontSize: "40px", marginLeft: "2%", fontFamily: "cursive", paddingBottom: "20px" }}>{data.fullname} - {data.course} {data.classname}</Typography>
                <Box sx={{ display: 'flex' }}>
                    <Typography sx={{ fontSize: "25px", marginLeft: "2%", fontFamily: "cursive" }}>Tab chính/{data.course} {data.classname}/{data.fullname}</Typography>
                    <Typography sx={{ fontSize: "19px", marginLeft: "auto", marginRight: '2%', fontFamily: "cursive" }}>{` ${data.startdate} - ${data.enddate}`}</Typography>
                </Box>
            </Box>
            <Box sx={{ border: '1px solid #ccc', p: 2, marginLeft: "1%", marginRight: "1%", marginBottom: '50px' }} >
                {exercise.map((item, ex) => (
                    <Box sx={{ height: "100%", borderRadius: "5px", backgroundColor: "#BFBDBD", marginTop: "1%" }} key={ex}>
                        <Typography sx={{ fontSize: "35px", fontFamily: "cursive", marginLeft: "2%", paddingTop: "1%" }}>{item.title}</Typography>
                        {file.map((files, keyf) => {
                            if (files.exerciseid === item.exerciseid) {
                                return (
                                    <Box sx={{ display: "flex", alignItems: "center" }} key={keyf}>
                                        <InsertDriveFileIcon sx={{ fontSize: "25px", marginLeft: "4%" }} />
                                        <Typography sx={{ fontSize: "25px", marginLeft: "1%" }}> {files.namefile}</Typography>
                                        {files.status === 0 ? (
                                            <RadioButtonUncheckedIcon sx={{ marginLeft: 'auto', marginRight: '3%' }} />
                                        ) : (
                                            <RadioButtonCheckedIcon sx={{ marginLeft: 'auto', marginRight: '3%' }} />
                                        )}
                                    </Box>
                                );
                            }
                            return null;
                        })}
                        {video.map((vd, kvd) => {
                            if (vd.exerciseid === item.exerciseid) {
                                return (
                                    <Box sx={{ display: "flex", alignItems: "center" }} key={kvd}>
                                        <PersonalVideoIcon sx={{ fontSize: "25px", marginLeft: "4%" }} />
                                        <Typography sx={{ fontSize: "25px", marginLeft: "1%" }}> {vd.namevideo}</Typography>
                                        {vd.status === 0 ? (
                                            <RadioButtonUncheckedIcon sx={{ marginLeft: 'auto', marginRight: '3%' }} />
                                        ) : (
                                            <RadioButtonCheckedIcon sx={{ marginLeft: 'auto', marginRight: '3%' }} />
                                        )}
                                    </Box>
                                );
                            }
                            return null;
                        })}
                        {classs.map((cl, kcl) => {
                            if (cl.exerciseid === item.exerciseid) {
                                return (
                                    <Links href={cl.link} style={{ textDecoration: 'none', color: 'black' }} target="_blank" key={kcl}>
                                        <Box sx={{ display: "flex", alignItems: "center" }} >
                                            <SchoolIcon sx={{ fontSize: "25px", marginLeft: "4%" }} />
                                            <Typography sx={{ fontSize: "25px", marginLeft: "1%" }}> {cl.nameclassroom}</Typography>
                                        </Box>
                                    </Links>
                                );
                            }
                            return null;
                        })}
                        {home.map((homew, khome) => {
                            if (homew.exerciseid === item.exerciseid) {
                                return (
                                    <Box key={khome}>
                                        <Link to={`/submitExercise/${homew.homeworkid}`} style={{ textDecoration: "none", color: "black" }}>
                                            <Box sx={{ display: "flex", alignItems: "center" }} >
                                                <HomeWorkIcon sx={{ fontSize: "25px", marginLeft: "4%" }} />
                                                <Typography sx={{ fontSize: "25px", marginLeft: "1%" }}> {homew.files}</Typography>
                                            </Box>
                                        </Link>
                                    </Box>
                                );
                            } return null;
                        })}
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default TeacherProgramList;