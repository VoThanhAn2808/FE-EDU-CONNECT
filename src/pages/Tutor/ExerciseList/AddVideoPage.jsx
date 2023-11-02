import { Button } from "@mui/base";
import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function AddVideo() {
    return (
        <Box sx={{
            height: '100%',
        }}>
            <Box sx={{ width: '98%', height: "130px", marginTop: "90px", borderRadius: "5px", marginLeft: "1%", marginRight: "1%", backgroundColor: "#E2D6D6" }}>
                <Box sx={{ display: 'flex' }}>
                    <Typography sx={{ fontSize: "40px", marginLeft: "2%", fontFamily: "cursive", paddingBottom: "20px" }}>Tên Học sinh - Tên môn</Typography>
                </Box>
                <Typography sx={{ fontSize: "25px", marginLeft: "2%", fontFamily: "cursive" }}>Tab chính/Môn/Học Sinh</Typography>
            </Box>
            <Box sx={{ border: '1px solid #ccc', p: 2, marginLeft: "1%", marginRight: "1%", marginBottom: '50px', marginTop : '20px' }} >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection : 'column',
                        alignItems: 'center',
                        gap: '20px',
                    }}
                >
                    <TextField
                        label="Tên Video"
                        InputLabelProps={{
                            style: {
                                fontSize: '12px',
                                color: 'rgba(0, 0, 0, 0.54)',
                            },
                        }}
                        sx={{
                            borderRadius: '11%',
                            width: '400px',
                        }}
                        InputProps={{
                            style: {
                                fontSize: '14px',
                                height: '45px',
                            },
                        }}
                    />
                    <TextField
                        label="Link video"
                        InputLabelProps={{
                            style: {
                                fontSize: '12px',
                                color: 'rgba(0, 0, 0, 0.54)',
                            },
                        }}
                        sx={{
                            borderRadius: '11%',
                            width: '400px',
                        }}
                        InputProps={{
                            style: {
                                fontSize: '14px',
                                height: '45px',
                            },
                        }}
                    />
                    <Button style={{
                        width : '90px', 
                        height : '40px', 
                        fontSize : '15px', 
                        fontWeight : 800, 
                        fontFamily : 'serif',
                        backgroundColor : 'green'
                        }}>
                        Lưu
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default AddVideo;