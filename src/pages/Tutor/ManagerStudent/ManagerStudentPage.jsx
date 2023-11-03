import { Box, Button, Typography } from "@mui/material";
import React from "react";

function ManagerStudent() {
    return (
        <Box sx={{
            height: '100%',
        }}>
            <Box sx={{ width: '98%', height: "130px", marginTop: "90px", borderRadius: "5px", marginLeft: "1%", marginRight: "1%", backgroundColor: "#E2D6D6" }}>
                <Typography sx={{ fontSize: "40px", marginLeft: "2%", fontFamily: "cursive", paddingBottom: "20px" }}>Toán đại 10 - Nguyễn Văn A</Typography>
                <Typography sx={{ fontSize: "25px", marginLeft: "2%", fontFamily: "cursive" }}>Tab chính/Môn/Học Sinh</Typography>
            </Box>
            <Box sx={{width: '98%', height: "1000px", marginBottom : '50px', marginTop: "10px", borderRadius: "5px", marginLeft: "1%", marginRight: "1%", backgroundColor: "#E2D6D6"}}>
                <Button variant="contained" sx={{}}>
                    Hello
                </Button>
            </Box>
        </Box>
    );
}

export default ManagerStudent;