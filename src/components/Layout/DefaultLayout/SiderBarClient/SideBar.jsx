import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Box, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const Sidebar = () => {
    const [openPrimary, setOpenPrimary] = React.useState(true);
    const [openSecondary, setOpenSecondary] = React.useState(true);
    const [openHighschool, setOpenHighschool] = React.useState(true);
    const [data, setData] = React.useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8081/student/class")
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handlePrimaryClick = () => {
        setOpenPrimary(!openPrimary);
        setOpenSecondary(false);
        setOpenHighschool(false);
    };

    const handleSecondaryClick = () => {
        setOpenSecondary(!openSecondary);
        setOpenPrimary(false);
        setOpenHighschool(false);
    };

    const handleHighschoolClick = () => {
        setOpenHighschool(!openHighschool);
        setOpenPrimary(false);
        setOpenSecondary(false);
    };
    return (
        <Box
            sx={{
                bgcolor: '#E2A369',
                minWidth: '30vh',
                height: "100%"
            }}
        >
            <List
                sx={{
                    width: '100%',
                    bgcolor: '#E2A369',
                }}
            >
                <ListItemButton >
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <Typography sx={{ fontSize: '16px', marginRight: 'auto', }}><Link to='/' style={{ color: "black", textDecoration: "none" }}>Trang chủ</Link></Typography>
                </ListItemButton>

                <ListItemButton onClick={handlePrimaryClick}>
                    <ListItemIcon>
                        <MenuBookIcon />
                    </ListItemIcon>
                    <Typography sx={{ fontSize: '16px', marginRight: 'auto', }}>Cấp 1 </Typography>
                    {openPrimary ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={openPrimary} timeout='auto' unmountOnExit>
                    <List disablePadding>
                        {data.map((item, index) => (
                            item.levelid === 1 ? (
                                <ListItemButton key={index} sx={{ pl: 3 }}>
                                    <ListItemIcon></ListItemIcon>
                                    <Link to={`/subject/${item.classid}`} style={{ color: "black", textDecoration: "none" }}>
                                        <Typography sx={{ fontSize: '13px', marginRight: 'auto', fontWeight: 'bold' }}>
                                            {item.className}
                                        </Typography>
                                    </Link>
                                </ListItemButton>
                            ) : (
                                <Typography key={index}></Typography>
                            )
                        ))}
                    </List>
                </Collapse>

                <ListItemButton onClick={handleSecondaryClick}>
                    <ListItemIcon>
                        <AccountBalanceIcon />
                    </ListItemIcon>
                    <Typography sx={{ fontSize: '16px', marginRight: 'auto', }}>Cấp 2 </Typography>
                    {openSecondary ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={openSecondary} timeout='auto' unmountOnExit>
                    <List disablePadding>
                        {data.map((item, index) => (
                            item.levelid === 2 ? (
                                <ListItemButton key={index} sx={{ pl: 3 }}>
                                    <ListItemIcon></ListItemIcon>
                                    <Link to={`/subject/${item.classid}`} style={{ color: "black", textDecoration: "none" }}>
                                        <Typography sx={{ fontSize: '13px', marginRight: 'auto', fontWeight: 'bold' }}>
                                            {item.className}
                                        </Typography>
                                    </Link>
                                </ListItemButton>
                            ) : (
                                <Typography key={index}></Typography>
                            )
                        ))}
                    </List>
                </Collapse>

                <ListItemButton onClick={handleHighschoolClick}>
                    <ListItemIcon>
                        <SchoolIcon />
                    </ListItemIcon>
                    <Typography sx={{ fontSize: '16px', marginRight: 'auto', }}>Cấp 3 </Typography>
                    {openHighschool ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={openHighschool} timeout='auto' unmountOnExit>
                    <List component='div' disablePadding>
                        {data.map((item, index) => (
                            item.levelid === 3 ? (
                                <ListItemButton key={index} sx={{ pl: 3 }}>
                                    <ListItemIcon></ListItemIcon>
                                    <Link to={`/subject/${item.classid}`} style={{ color: "black", textDecoration: "none" }}>
                                        <Typography sx={{ fontSize: '13px', marginRight: 'auto', fontWeight: 'bold' }}>
                                            {item.className}
                                        </Typography>
                                    </Link>
                                </ListItemButton>
                            ) : (
                                <Typography key={index}></Typography>
                            )
                        ))}
                    </List>
                </Collapse>

                <ListItemButton>
                    <ListItemIcon>
                        <LibraryBooksIcon />
                    </ListItemIcon>
                    <Typography sx={{ fontSize: '16px', marginRight: 'auto', }}>Thư Viện </Typography>
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <HelpOutlineIcon />
                    </ListItemIcon>
                    <Typography sx={{ fontSize: '16px', marginRight: 'auto', }}>Hướng dẫn đăng ký </Typography>
                </ListItemButton>
            </List>
        </Box>
    );
};

export default Sidebar;
