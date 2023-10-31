import { Box, Typography } from "@mui/material";
import React from "react";
import Button from "../../../components/Button/Button";
import IMAGE from "./footerhome.jpg"


function FooterHome() {
    return (
        <Box  sx={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center",
            backgroundImage: `url(${IMAGE})`,
            backgroundSize: "100% auto",
            }}>
            <Typography  sx={{ 
                fontSize: "24px", 
                textAlign: "center" 
                }}>
                Để trở thành thành viên mới của EDU-CONNECT
                <Button />
            </Typography>
        </Box>
    );
}

export default FooterHome;
