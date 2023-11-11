import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import "./TeacherProgramList.css"
import SchoolIcon from '@mui/icons-material/School';
import { useParams } from "react-router-dom";
import axios from "axios";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';


function TeacherProgramList() {

    const { bookid } = useParams();
    const [data, setData] = useState([]);
    const [exercise, setExercise] = useState([]);
    const [file, setFiles] = useState([]);
    const [video, setVideo] = useState([]);
    const [classs, setClasss] = useState([]);
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

    return (
        <Box sx={{
            height: '100%',
        }}>
            <Box sx={{ height: "130px", marginTop: "90px", borderRadius: "5px", marginLeft: "1%", marginRight: "1%", backgroundColor: "#E2D6D6" }}>
                <Typography sx={{ fontSize: "40px", marginLeft: "2%", fontFamily: "cursive", paddingBottom: "20px" }}>{data.fullname} - {data.course} {data.classname}</Typography>
                <Box sx={{ display: 'flex' }}>
                    <Typography sx={{ fontSize: "25px", marginLeft: "2%", fontFamily: "cursive" }}>Tab chính/{data.course} {data.classname}/{data.fullname}</Typography>
                    <Typography sx={{ fontSize: "19px", marginLeft: "auto", marginRight: '2%', fontFamily: "cursive" }}>Ngày bắt đầu : {data.startdate}  - Ngày kết thúc: {data.enddate}</Typography>
                </Box>
            </Box>
            <Box sx={{ border: '1px solid #ccc', p: 2, marginLeft: "1%", marginRight: "1%", marginBottom: '50px' }} >
                {exercise.map((item, ex) => (
                    <Box sx={{ height: "100%", borderRadius: "5px", backgroundColor: "#BFBDBD", marginTop: "1%" }} key={ex}>
                        <Typography sx={{ fontSize: "35px", fontFamily: "cursive", marginLeft: "2%", paddingTop: "1%" }}>{item.title}</Typography>
                        {file.map((files) => {
                            if (files.exerciseid === item.exerciseid) {
                                return (
                                    <Box sx={{ display: "flex", alignItems: "center" }} key={files.fileid}>
                                        <InsertDriveFileIcon sx={{ fontSize: "25px", marginLeft: "4%" }} />
                                        <Typography sx={{ fontSize: "25px", marginLeft: "1%" }}> {files.namefile}</Typography>
                                    </Box>
                                );
                            }
                            return null;
                        })}
                        {video.map((vd) => {
                            if (vd.exerciseid === item.exerciseid) {
                                return (
                                    <Box sx={{ display: "flex", alignItems: "center" }} key={vd.videoid}>
                                        <PersonalVideoIcon sx={{ fontSize: "25px", marginLeft: "4%" }} />
                                        <Typography sx={{ fontSize: "25px", marginLeft: "1%" }}> {vd.namevideo}</Typography>
                                    </Box>
                                );
                            }
                            return null;
                        })}
                        {classs.map((cl) => {
                            if (cl.exerciseid === item.exerciseid) {
                                return (
                                    <Box sx={{ display: "flex", alignItems: "center" }} key={cl.classroomid}>
                                        <SchoolIcon sx={{ fontSize: "25px", marginLeft: "4%" }} />
                                        <Typography sx={{ fontSize: "25px", marginLeft: "1%" }}> {cl.nameclassroom}</Typography>
                                    </Box>
                                );
                            }
                            return null;
                        })}
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <HomeWorkIcon sx={{ fontSize: "25px", marginLeft: "4%" }} />
                            <Typography sx={{ fontSize: "25px", marginLeft: "1%" }}> Tên Homework</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default TeacherProgramList;