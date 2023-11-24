import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Box, Typography} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ClassIcon from '@mui/icons-material/Class';
import { Link } from 'react-router-dom';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import SchoolIcon from '@mui/icons-material/School';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BiotechIcon from '@mui/icons-material/Biotech';
import DiscountIcon from '@mui/icons-material/Discount';

function Sidebar() {

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
          <Typography sx={{ fontSize: '16px', marginRight: 'auto' }}><Link to='/dashboard' style={{color:"black", textDecoration: "none"}}>Dashboard</Link></Typography>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <CastForEducationIcon />
          </ListItemIcon>
          <Typography sx={{ fontSize: '16px', marginRight: 'auto' }}><Link to='/tutormanagement' style={{color:"black", textDecoration: "none"}}>Quản lý gia sư</Link></Typography>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <Typography sx={{ fontSize: '16px', marginRight: 'auto' }}><Link to='/studentmanagement' style={{color:"black", textDecoration: "none"}}>Quản lý học sinh</Link></Typography>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <CalendarMonthIcon />
          </ListItemIcon>
          <Typography sx={{ fontSize: '16px', marginRight: 'auto' }}><Link to='/trylearningmanagement' style={{color:"black", textDecoration: "none"}}>Quản lý lịch học thử</Link></Typography>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <ClassIcon />
          </ListItemIcon>
          <Typography sx={{ fontSize: '16px', marginRight: 'auto' }}><Link to='/coursemanagement' style={{color:"black", textDecoration: "none"}}>Quản lý đăng ký khoá học</Link></Typography>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <FolderCopyIcon />
          </ListItemIcon>
          <Typography sx={{ fontSize: '16px', marginRight: 'auto' }}><Link to='/documentmanagement' style={{color:"black", textDecoration: "none"}}>Quản lý tài liệu dạy</Link></Typography>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <PeopleAltIcon />
          </ListItemIcon>
          <Typography sx={{ fontSize: '16px', marginRight: 'auto' }}><Link to='/tutorregistermanagement' style={{color:"black", textDecoration: "none"}}>Quản lý gia sư đăng ký</Link></Typography>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <BiotechIcon />
          </ListItemIcon>
          <Typography sx={{ fontSize: '16px', marginRight: 'auto' }}><Link to='/simulationmanagement' style={{color:"black", textDecoration: "none"}}>Quản lý mô phỏng</Link></Typography>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <DiscountIcon />
          </ListItemIcon>
          <Typography sx={{ fontSize: '16px', marginRight: 'auto' }}><Link to='/discountmanagement' style={{color:"black", textDecoration: "none"}}>Quản lý voucher</Link></Typography>
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;
