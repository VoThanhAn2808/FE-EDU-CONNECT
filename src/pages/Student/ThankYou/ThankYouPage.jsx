import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import thank from "../../../assests/Thankyou.jpg";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

function ThankYou() {

    const decodedToken = jwtDecode(localStorage.getItem('token'));

    const [student, setStudent] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/student/viewstudent?email=" + decodedToken.sub)
            .then((response) => {
                setStudent(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [decodedToken.sub]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const response = await axios.get(
                `http://localhost:8081/book/paydone?studentid=${student.studentid}`,
                config
            );
            window.location.href = '/homestudent';
            console.log(response.data);
        } catch (error) {
            console.error(error);
            console.log(error.response.data);
        }
    };

    return (
        <Box>
            <Box sx={{ marginTop: '30px', marginLeft: '5%' }}>
                <Typography variant="h2"
                    noWrap
                    component="a"
                    sx={{
                        fontWeight: 800,
                        color: '#F9C01F',
                        textDecoration: 'none',
                        fontSize: '45px'
                    }}>EDU-CONNECT
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', marginLeft: '480px', marginTop: '-40px' }}>
                <Box sx={{ backgroundColor: '#AFB5AF', width: '30px', textAlign: 'center', borderRadius: '50%' }}>
                    <Typography sx={{ fontSize: '20px', color: 'white', fontFamily: 'fantasy' }}>1</Typography>
                </Box>
                <span style={{ borderBottom: '5px solid #AFB5AF', width: '395px', display: 'inline-block', marginBottom: '13px' }} />
                <Box sx={{ backgroundColor: '#AFB5AF', width: '30px', textAlign: 'center', borderRadius: '50%' }}>
                    <Typography sx={{ fontSize: '20px', color: 'white', fontFamily: 'fantasy' }}>2</Typography>
                </Box>
                <span style={{ borderBottom: '5px solid #AFB5AF', width: '395px', display: 'inline-block', marginBottom: '13px' }} />
                <Box sx={{ backgroundColor: '#388532', width: '30px', textAlign: 'center', borderRadius: '50%' }}>
                    <Typography sx={{ fontSize: '20px', color: 'white', fontFamily: 'fantasy' }}>3</Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', marginLeft: '480px', left: 'auto', marginTop: '10px' }}>
                <Box sx={{ textAlign: 'center', marginLeft: '-10px' }}>
                    <Typography>Chọn gia sư</Typography>
                </Box>
                <span style={{ width: '380px' }} />
                <Box sx={{ textAlign: 'center', marginLeft: '-3px' }}>
                    <Typography>Chọn giờ</Typography>
                </Box>
                <span style={{ width: '380px' }} />
                <Box sx={{ textAlign: 'center' }}>
                    <Typography>Hoàn thành</Typography>
                </Box>
            </Box>
            <Box sx={{
                height: '800px',
                backgroundColor: '#D9D9D9',
                marginBottom: '40px',
                marginTop: '20px',
                marginLeft: '24px',
                marginRight: '20px',
                justifyContent: 'center',
                width: '100%'
            }}>
                <Box sx={{ marginLeft: '30%', paddingTop: '20px' }}>
                    <img src={thank} alt="thank" style={{ width: '65%' }} />
                    <Typography sx={{ fontSize: '20px', fontFamily: 'cursive', marginLeft: '10%' }}>Cảm ơn bạn đã tin cậy sử dụng dịch vụ của chúng tôi</Typography>
                    <Typography sx={{ fontSize: '20px', fontFamily: 'cursive', marginLeft: '20%' }}>Chúc bạn một ngày tốt lành</Typography>
                    
                    <Button onClick={handleSubmit} sx={{ marginLeft: '22%', fontSize: '15px', fontFamily: 'cursive' }}>Quay về trang home</Button>

                </Box>
            </Box>
        </Box>);
}

export default ThankYou;