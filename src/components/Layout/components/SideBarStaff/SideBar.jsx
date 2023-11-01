import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Box, Typography} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import BiotechIcon from '@mui/icons-material/Biotech';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from 'react-router-dom';

function Sidebar() {

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
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <Typography sx={{ fontSize: '16px', marginRight: 'auto' }}>Dashboard</Typography>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <ImportContactsIcon />
          </ListItemIcon>
          <Typography sx={{ fontSize: '16px', marginRight: 'auto' }}><Link to='/tutormanagement' style={{color:"black", textDecoration: "none"}}>Quản lý gia sư</Link></Typography>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <BiotechIcon />
          </ListItemIcon>
          <Typography sx={{ fontSize: '16px', marginRight: 'auto' }}><Link to='/studentmanagement' style={{color:"black", textDecoration: "none"}}>Quản lý học sinh</Link></Typography>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <CalendarMonthIcon />
          </ListItemIcon>
          <Typography sx={{ fontSize: '16px', marginRight: 'auto' }}><Link to='/trylearningmanagement' style={{color:"black", textDecoration: "none"}}>Quản lý lịch học thử</Link></Typography>
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;
