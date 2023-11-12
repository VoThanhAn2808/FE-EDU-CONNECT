import { Grid, Box, Button, TextField, Menu, MenuItem, Modal, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React, { useRef } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function SubmitExercise() {
    const dataName = "param data";
    const dataSubject = "param subject";
    const fileInputRef = useRef(null);


    const handleFileSelect = () => {
        fileInputRef.current.click();
    };

    const allLayout = {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        marginTop: 3,
        justifyContent: 'center',
        alignItems: 'center',

    };

    const insideLayout = {
        width: '100%',
        border: '1px solid',
        padding: '10px',
        boxShadow: '2px 2px 4px 2px rgba(0, 0, 0, 0.2)',
        minHeight: '0px'
    };

    const content = {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '50px',
        width: '100%'
    };

    const gridStyle = {
        width: '100% !important',
        // display: 'flex',
        // flexDirection: 'column',
    };

    const fontSizeHeader = {
        fontSize: '16px',
        borderBottom: '1px solid black',
        borderRight: '1px solid black',
        width: '30%',
        minWidth: '50px'
    };
    const fontSizeBodyTable = {
        fontSize: '16px',
        borderBottom: '1px solid black',
        width: '90%',
        minWidth: '50px'
    };
    const buttonStyle = {
        fontSize: '12px',
        fontFamily: 'cursive'
    };

    return (
        <Box id="container" style={allLayout} >
            <Box id="header" style={{ ...insideLayout, height: '80px', minHeight: '0px' }}>
                <Typography variant="h4" >{`Gia Sư ${dataName} - ${dataSubject}`}</Typography>
                <Box>
                    <Typography variant="h5" style={{ display: 'inline-block' }} >Ngày tham gia:</Typography>
                    <Typography variant="h5" style={{ display: 'inline-block', marginLeft: '5px' }} >{` ${dataName} - ${dataSubject}`}</Typography>
                </Box>

            </Box>
            <Box id="body" style={{ ...insideLayout, marginTop: '20px' }}>
                <Box id="contenBody" style={content} >
                    <Box id="contenHeader" style={{ display: 'flex', flexDirection: 'column', marginBottom: '30px' }}>
                        <Box id="">
                            <Box id="" style={{ float: 'left' }}>
                                <Typography variant="h4" >{`Bài Thực Hành   ${dataName}`}</Typography>
                            </Box>
                            <Box id="" style={{ float: 'right' }}>
                                <Button variant="contained" style={buttonStyle}>
                                    Chọn mô phỏng
                                </Button>
                            </Box>
                        </Box>
                        <Box id="" style={{ marginBottom: '10px' }}>
                            <Box>
                                <Typography id="txtFromDate" variant="h5" style={{ display: "inline-block", marginRight: "8px" }} >Từ Ngày</Typography>
                                <Typography id="dataFromDate" variant="h5" style={{ display: "inline-block", marginLeft: "5px" }} >: {`${dataName} `}</Typography>
                            </Box>
                            <Box>
                                <Typography id="txtToDate" variant="h5" style={{ display: "inline-block" }} >Đến Ngày</Typography>
                                <Typography id="dataToDate" variant="h5" style={{ display: "inline-block", marginLeft: "5px" }} >: {`${dataName} `}</Typography>
                            </Box>
                        </Box>
                        <Box style={{ float: 'left' }}>
                            <Button
                                type="file"
                                variant="contained"
                                color="primary"
                                startIcon={<CloudUploadIcon />}
                                onClick={handleFileSelect}
                            >
                                Choose File
                            </Button>
                        </Box>
                    </Box>
                    <Box id="contenFooter" style={gridStyle}>
                        <Grid id="grid" container spacing={2} style={{ marginBottom: '10px', overflowX: 'auto', width: '100%', display: 'inline-block', marginLeft: '0px' }}>
                            <Grid id="gridContent" item xs={9} style={{ width: '100% !important', maxWidth: '100% ', padding: '0px' }}>
                                <TableContainer style={{ border: '1px solid', borderRadius: '20px', width: '100% !important', overflowX: 'auto' }}>
                                    <Table >
                                        <TableBody>
                                            <TableRow>
                                                <TableCell style={fontSizeHeader}>Hạn nộp bài</TableCell>
                                                <TableCell style={fontSizeBodyTable}></TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell style={fontSizeHeader}>Thời gian còn lại</TableCell>
                                                <TableCell style={fontSizeBodyTable}></TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell style={{ fontSize: '16px', width: '160px', minWidth: '50px', borderRight: '1px solid black' }} >Nộp bài</TableCell>
                                                <TableCell ></TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                        <Box>
                            <Box style={{ float: 'right' }}>
                                <Button variant="contained" style={buttonStyle}>
                                    Nộp Bài
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    );
}
export default SubmitExercise;
