import { Box, Link ,Typography } from "@mui/material";
import React from "react";
import LOGIN from "../../assests/login.png"
import LOGO from "../../assests/lglogin.jpg"

function LoginPage() {
  return (
    <Box
      className="image-container"
      sx={{
        width: "100%",
        height: "100vh",
        background: 'linear-gradient(to bottom, #F9C01F, white)',
      }}>
      <img src={LOGIN} alt="login" style={{
        position: "absolute",
        bottom: 100,
        left: 70,
        height: "80%",
        width: "50%",
      }} />
      <Box sx={{
        position: "absolute",
        right: 70,
        bottom: 100,
        height: "70%",
        width: "37%",
        backgroundColor: "white",
        borderRadius: "2%"
      }}>
        <img src={LOGO} alt="logo" style={{
          position: "absolute",
          top: "13%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}/>
        <Typography sx={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -0)",
          fontSize: "24px",
          width: "100%",
          textAlign: "center"
        }}> 
          Nếu chưa có tài khoản, vui lòng đăng ký 
          <Link
          // component={RouterLink}
          // to="./SignUp"
          sx={{
            paddingLeft:"10px",
            color: "blue",
          }}> 
             tại đây
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default LoginPage;