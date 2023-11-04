import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Box, Typography} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [openCourse, setOpenCourse] = React.useState(true);
  const [openGrades, setOpenGrades] = React.useState(true);

  const handleCourseClick = () => {
    setOpenCourse(!openCourse);
    setOpenGrades(false);
  };

  const handleGradesClick = () => {
    setOpenGrades(!openGrades);
    setOpenCourse(false);
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
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <Typography sx={{ fontSize: '16px', marginRight: 'auto' }}><Link to="/homestudent" style={{color:"black", textDecoration: "none"}}>Trang chủ</Link></Typography>
        </ListItemButton>

        <ListItemButton onClick={handleCourseClick}>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <Typography sx={{ fontSize: '16px', marginRight: 'auto' }}>Khoá học của tôi</Typography>
          {openCourse ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openCourse} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemIcon></ListItemIcon>
              <Typography sx={{ fontSize: '13px', marginRight: 'auto', fontWeight: 'bold' }}>
                <Link to="/teacherprogramlist" style={{color:"black", textDecoration: "none"}}>Môn học 1</Link>
              </Typography>
            </ListItemButton>

            <ListItemButton sx={{ pl: 3 }}>
              <ListItemIcon></ListItemIcon>
              <Typography sx={{ fontSize: '13px', marginRight: 'auto', fontWeight: 'bold' }}>
                Môn học 2
              </Typography>
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton>
          <ListItemIcon>
            <CalendarMonthIcon />
          </ListItemIcon>
          <Typography sx={{ fontSize: '16px', marginRight: 'auto' }}><Link to="/calendarstudent" style={{color:"black", textDecoration: "none"}}>Lịch học</Link></Typography>
        </ListItemButton>

        <ListItemButton onClick={handleGradesClick}>
          <ListItemIcon>
            <MenuBookIcon />
          </ListItemIcon>
          <Typography sx={{ fontSize: '16px', marginRight: 'auto' }}>Điểm </Typography>
          {openGrades ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openGrades} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemIcon></ListItemIcon>
              <Typography sx={{ fontSize: '13px', marginRight: 'auto', fontWeight: 'bold' }}>
                <Link to="/studentgrade" style={{color:"black", textDecoration: "none"}}>Môn học 1</Link>
              </Typography>
            </ListItemButton>

            <ListItemButton sx={{ pl: 3 }}>
              <ListItemIcon></ListItemIcon>
              <Typography sx={{ fontSize: '13px', marginRight: 'auto', fontWeight: 'bold' }}>
                Môn học 2
              </Typography>
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <Typography sx={{ fontSize: '16px', marginRight: 'auto' }}>Cài đặt</Typography>
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;
