import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import BackHandIcon from '@mui/icons-material/BackHand';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { useRef } from 'react';
import { Button } from '@mui/material';
import { styled, keyframes } from '@mui/system';


function Header() {
    const wavingAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(15deg);
    }
    50% {
        transform: rotate(0deg);
    }
    75% {
        transform: rotate(-15deg);
    }
    100% {
        transform: rotate(0deg);
    }
    `;
    const WavingHand = styled(BackHandIcon)`
    animation: ${wavingAnimation} 0.7s infinite;
    `;
    const Phone = styled(PhoneIcon)`
    animation: ${wavingAnimation} 0.5s infinite;
    `
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const navigate = useNavigate();

    const handleChangePassword = () => {
        navigate('/changepass');
    }
    const handleLogoutClick = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const token = localStorage.getItem('token');
    const decodedTokenRef = useRef(null);

    const [data, setData] = useState([]);

    useEffect(() => {
        try {
            decodedTokenRef.current = jwtDecode(token);
            const role = decodedTokenRef.current.role;

            if (role === 1) {
                axios
                    .get(`http://localhost:8081/student/viewstudent?email=${decodedTokenRef.current.id}`)
                    .then((response) => {
                        setData(response.data);
                        console.log(response.data);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            } else if (role === 2) {
                axios
                    .get(`http://localhost:8081/educonnect/viewTutor?tutorId=${decodedTokenRef.current.id}`)
                    .then((response) => {
                        setData(response.data);
                        console.log(response.data);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        } catch (error) {
            console.error('Error decoding the token:', error);
        }
    }, [token]);

    const handleProfileClick = () => {
        decodedTokenRef.current = jwtDecode(token);
        const role = decodedTokenRef.current.role;
        handleCloseUserMenu();
        if(role === 1) {
            navigate('/profile-student');
        }else if(role === 2){
            navigate('/profile-teacher');
        }else if(role === 3) {
            navigate('/profile-staff');
        }
    };

    return (
        <AppBar position='fixed' sx={{
            width: '100%',
            background: "#F9C01F",
            zIndex: "5",
            boxShadow: 'none',
            height: '70px'
        }}>
            <Container maxWidth="">
                <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
                    <Typography
                        variant="h2"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            fontWeight: 800,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        EDU-CONNECT
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '19px',
                    }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '5px'
                        }}>
                            <Phone sx={{
                                height: "30px",
                                width: "30px",
                            }} />
                            <Typography sx={{
                                fontSize: '15px',
                                fontWeight: 'bold',
                            }}>0904692410</Typography>
                        </Box>
                        <WavingHand sx={{
                            height: "30px",
                            width: "30px",
                        }} />
                        {
                            decodedTokenRef.current ? (
                                <Tooltip
                                    title={<span style={{ fontSize: '10px' }}>Settings</span>}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1px',
                                        }}
                                        onClick={handleOpenUserMenu}
                                    >
                                        <IconButton>
                                            <Avatar
                                                alt={data.fullname}
                                                src={`http://localhost:8081/edu/file/files/` + data.img}
                                                sx={{
                                                    height: "55px",
                                                    width: "55px",
                                                }}
                                            />
                                        </IconButton>
                                        <Typography
                                            sx={{
                                                fontSize: '15px',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {data.fullname}
                                        </Typography>
                                    </Box>
                                </Tooltip>
                            ) : (
                                <Box>
                                    <Link to="/login"><Button variant="contained" color="success" sx={{ backgroundColor: "#C6D331", color: "white", fontSize: "13px", fontWeight: "600", marginRight: "5px" }}>Đăng nhập</Button></Link>
                                    <Link to="/signup"><Button variant="contained" color='error' sx={{ backgroundColor: "#C6D331", color: "white", fontSize: "13px", fontWeight: "600" }}>Đăng ký</Button></Link>
                                </Box>
                            )
                        }


                        <Menu
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            // keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem key="Thông tin cá nhân" onClick={handleProfileClick}>
                                <Typography variant="body1" sx={{ fontSize: "15px" }}>Thông tin cá nhân</Typography>
                            </MenuItem>
                            <MenuItem key="Đổi mật khẩu" onClick={handleChangePassword}>
                                <Typography variant="body1" sx={{ fontSize: "15px" }}>Đổi mật khẩu</Typography>
                            </MenuItem>
                            <MenuItem key="Đăng xuất" onClick={handleLogoutClick}>
                                <Typography variant="body1" sx={{ fontSize: "15px" }}>
                                    Đăng xuất
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
