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
import NotificationsIcon from '@mui/icons-material/Notifications';
import PhoneIcon from '@mui/icons-material/Phone';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';


function Header() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const navigate = useNavigate();

    const handleProfileClick = () => {
        handleCloseUserMenu();
        navigate('/profile-student');
    };

    const handleChangePassword = () => {
        navigate('/changepass');
    }
    const handleLogoutClick = () => {
        navigate('/login');
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const decodedToken = jwtDecode(localStorage.getItem('token'));

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/student/viewstudent?email=" + decodedToken.sub)
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [decodedToken.sub]);

    return (
        <AppBar position='fixed' sx={{ width: '100%', background: "#F9C01F", zIndex: "5", boxShadow: 'none', height: '70px' }}>
            <Container maxWidth="">
                <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
                    <Typography
                        variant="h2"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            // mr: 2,
                            // display: { xs: 'none', md: 'flex' },
                            fontWeight: 800,
                            // letterSpacing: '.3rem',
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
                            <PhoneIcon sx={{
                                height: "30px",
                                width: "30px",
                            }} />
                            <Typography sx={{
                                fontSize: '15px',
                                fontWeight: 'bold',
                            }}>1800.8198</Typography>
                        </Box>
                        <NotificationsIcon sx={{
                            height: "30px",
                            width: "30px",
                        }} />
                        <Tooltip
                            title={<span style={{ fontSize: '10px' }}>Settings</span>}
                        >
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1px',

                            }}
                                onClick={handleOpenUserMenu}>
                                <IconButton >
                                    <Avatar alt={data.fullname} src={`http://localhost:8081/edu/file/files/${data.img}`} sx={{
                                        height: "55px",
                                        width: "55px",
                                    }} />


                                </IconButton>
                                <Typography
                                    sx={{
                                        fontSize: '15px',
                                        fontWeight: 'bold',
                                    }} >
                                    {data.fullname}
                                </Typography>
                            </Box>
                        </Tooltip>


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
                                    <Typography variant="body1" sx={{fontSize:"15px"}}>Thông tin cá nhân</Typography>
                            </MenuItem>
                            <MenuItem key="Đổi mật khẩu" onClick={handleChangePassword}>
                                    <Typography variant="body1" sx={{fontSize:"15px"}}>Đổi mật khẩu</Typography>
                            </MenuItem>
                            <MenuItem key="Đăng xuất" onClick={handleLogoutClick}>
                                <Typography variant="body1" sx={{fontSize:"15px"}}>Đăng xuất</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
