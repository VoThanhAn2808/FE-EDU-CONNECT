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

const Sidebar = () => {
    const [openPrimary, setOpenPrimary] = React.useState(true);
    const [openSecondary, setOpenSecondary] = React.useState(true);
    const [openHighschool, setOpenHighschool] = React.useState(true);

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
                height: '100vh',
                minWidth: '30vh',
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
                    <Typography sx={{ fontSize: '16px', marginRight: 'auto', }}>Trang chủ</Typography>
                </ListItemButton>

                <ListItemButton onClick={handlePrimaryClick}>
                    <ListItemIcon>
                        <MenuBookIcon />
                    </ListItemIcon>
                    <Typography sx={{ fontSize: '16px', marginRight: 'auto',  }}>Cấp 1 </Typography>
                    {openPrimary ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={openPrimary} timeout='auto' unmountOnExit>
                    <List disablePadding>
                        <ListItemButton sx={{ pl: 3 }}>
                            <ListItemIcon></ListItemIcon>
                            <Typography sx={{ fontSize: '13px', marginRight: 'auto', fontWeight: 'bold' }}>
                                Lớp 1
                            </Typography>
                        </ListItemButton>

                        <ListItemButton sx={{ pl: 3 }}>
                            <ListItemIcon></ListItemIcon>
                            <Typography sx={{ fontSize: '13px', marginRight: 'auto', fontWeight: 'bold' }}>
                                Lớp 2
                            </Typography>
                        </ListItemButton>

                        <ListItemButton sx={{ pl: 3 }}>
                            <ListItemIcon></ListItemIcon>
                            <Typography sx={{ fontSize: '13px', marginRight: 'auto', fontWeight: 'bold' }}>
                                Lớp 3
                            </Typography>
                        </ListItemButton>

                        <ListItemButton sx={{ pl: 3 }}>
                            <ListItemIcon></ListItemIcon>
                            <Typography sx={{ fontSize: '13px', marginRight: 'auto', fontWeight: 'bold' }}>
                                Lớp 4
                            </Typography>
                        </ListItemButton>

                        <ListItemButton sx={{ pl: 3 }}>
                            <ListItemIcon></ListItemIcon>
                            <Typography sx={{ fontSize: '13px', marginRight: 'auto', fontWeight: 'bold' }}>
                                Lớp 5
                            </Typography>
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={handleSecondaryClick}>
                    <ListItemIcon>
                        <AccountBalanceIcon />
                    </ListItemIcon>
                    <Typography sx={{ fontSize: '16px', marginRight: 'auto',  }}>Cấp 2 </Typography>
                    {openSecondary ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={openSecondary} timeout='auto' unmountOnExit>
                    <List disablePadding>
                        <ListItemButton sx={{ pl: 3 }}>
                            <ListItemIcon></ListItemIcon>
                            <Typography sx={{ fontSize: '13px', marginRight: 'auto', fontWeight: 'bold' }}>
                                Lớp 6
                            </Typography>
                        </ListItemButton>

                        <ListItemButton sx={{ pl: 3 }}>
                            <ListItemIcon></ListItemIcon>
                            <Typography sx={{ fontSize: '13px', marginRight: 'auto', fontWeight: 'bold' }}>
                                Lớp 7
                            </Typography>
                        </ListItemButton>

                        <ListItemButton sx={{ pl: 3 }}>
                            <ListItemIcon></ListItemIcon>
                            <Typography sx={{ fontSize: '13px', marginRight: 'auto', fontWeight: 'bold' }}>
                                Lớp 8
                            </Typography>
                        </ListItemButton>

                        <ListItemButton sx={{ pl: 3 }}>
                            <ListItemIcon></ListItemIcon>
                            <Typography sx={{ fontSize: '13px', marginRight: 'auto', fontWeight: 'bold' }}>
                                Lớp 9
                            </Typography>
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={handleHighschoolClick}>
                    <ListItemIcon>
                        <SchoolIcon />
                    </ListItemIcon>
                    <Typography sx={{ fontSize: '16px', marginRight: 'auto',  }}>Cấp 3 </Typography>
                    {openHighschool ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={openHighschool} timeout='auto' unmountOnExit>
                    <List component='div' disablePadding>
                        <ListItemButton sx={{ pl: 3 }}>
                            <ListItemIcon></ListItemIcon>
                            <Typography sx={{ fontSize: '13px', marginRight: 'auto', fontWeight: 'bold' }}>
                                Lớp 10
                            </Typography>
                        </ListItemButton>

                        <ListItemButton sx={{ pl: 3 }}>
                            <ListItemIcon></ListItemIcon>
                            <Typography sx={{ fontSize: '13px', marginRight: 'auto', fontWeight: 'bold' }}>
                                Lớp 11
                            </Typography>
                        </ListItemButton>

                        <ListItemButton sx={{ pl: 3 }}>
                            <ListItemIcon></ListItemIcon>
                            <Typography sx={{ fontSize: '13px', marginRight: 'auto', fontWeight: 'bold' }}>
                                Lớp 12
                            </Typography>
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton>
                    <ListItemIcon>
                        <LibraryBooksIcon />
                    </ListItemIcon>
                    <Typography sx={{ fontSize: '16px', marginRight: 'auto',  }}>Thư Viện </Typography>
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <HelpOutlineIcon />
                    </ListItemIcon>
                    <Typography sx={{ fontSize: '16px', marginRight: 'auto',  }}>Hướng dẫn đăng ký </Typography>
                </ListItemButton>
            </List>
        </Box>
    );
};

export default Sidebar;
