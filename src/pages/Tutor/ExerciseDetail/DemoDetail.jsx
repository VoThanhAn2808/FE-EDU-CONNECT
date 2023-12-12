import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Container, CircularProgress, Button, Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Iframe from "react-iframe";

function DemoDetail(props) {
    const [demoList, setDemoList] = useState([]);
    const { demoid } = useParams();
    const [pageContent, setPageContent] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`http://localhost:8081/demo/detaildemo?demoid=${demoid}`)
            .then((response) => {
                setPageContent(response.data);
            })
            .catch((error) => {
            })
    });
    const style = {
        display: 'block',
        width: '100%',
        height: '80%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    };

    return (
        <Container style={{ padding: '0', }}>
            <Box sx={{ width: '100%', marginTop: "20px", borderRadius: "5px", backgroundColor: "#E2D6D6" }}>
                <Typography variant="h2" align="left" mt={2} mb={3}>
                    {pageContent?.demo}
                </Typography>
            </Box>
            <Box sx={style}>
                <Iframe src={pageContent.linkdemo}
                    styles={{
                        border: '1px solid silver',
                        width: '100%',
                        height: '500px'
                    }}></Iframe>
            </Box>

        </Container >

    );
};

export default DemoDetail;