import { Box, List, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";


function SideBar() {
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
                <ListItemButton>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <Typography sx={{ fontSize: '16px', marginRight: 'auto' }}><Link to='/admin' style={{ color: "black", textDecoration: "none" }}>Dashboard</Link></Typography>
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <AccountCircleIcon />
                    </ListItemIcon>
                    <Typography sx={{ fontSize: '16px', marginRight: 'auto' }}><Link to='/staffmanagement' style={{ color: "black", textDecoration: "none" }}>Quản lý nhân viên</Link></Typography>
                </ListItemButton>

            </List>
        </Box>
    );
}

export default SideBar;