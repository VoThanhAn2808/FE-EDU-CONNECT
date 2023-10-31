import React from "react";
import './Subject.css';
import { Box, Grid, Typography } from "@mui/material";
import dcmdxdn from "../../assests/subject.png";
import PersonIcon from '@mui/icons-material/Person';
import { Button } from '@mui/material';


const data = [
    { id: 1, name: 'Đại số 10', number: 100, imgLink: dcmdxdn },
    { id: 2, name: 'Đại số 10', number: 100, imgLink: dcmdxdn },
    { id: 3, name: 'Đại số 10', number: 100, imgLink: dcmdxdn },
    { id: 4, name: 'Đại số 10', number: 100, imgLink: dcmdxdn },
    { id: 5, name: 'Đại số 10', number: 100, imgLink: dcmdxdn },
    { id: 6, name: 'Đại số 10', number: 100, imgLink: dcmdxdn },
    { id: 7, name: 'Đại số 10', number: 100, imgLink: dcmdxdn },
    { id: 8, name: 'Đại số 10', number: 100, imgLink: dcmdxdn },
    { id: 9, name: 'Đại số 10', number: 100, imgLink: dcmdxdn },
    { id: 10, name: 'Đại số 10', number: 100, imgLink: dcmdxdn },
    { id: 11, name: 'Đại số 10', number: 100, imgLink: dcmdxdn },
    { id: 12, name: 'Đại số 10', number: 100, imgLink: dcmdxdn },
];

function SubjectPage() {
    return (
        <Box className="body">
            <Grid container spacing={2}>
                {data.map((item) => (
                    <Grid item xs={12} sm={6} md={5} lg={3} key={item.id}>
                        <Box className='container'>
                            <img src={item.imgLink} alt={item.name} className="subject-img" />
                            <Typography className="nameSubject">{item.name}</Typography>
                            <Box sx={{ display: 'flex' }} >
                                <Typography className="inforsubject">
                                    <PersonIcon className="total" />
                                    {item.number}</Typography>
                                <Button variant="contained" color="primary" component="a" href="http://localhost:3000/listtutor" hrefLang="#"
                                    sx={{
                                        height: '20px',
                                        width: '80px'
                                    }}>
                                    Chi tiết
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box >
    );
}

export default SubjectPage;