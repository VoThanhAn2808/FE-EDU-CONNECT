import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Box, Collapse, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';
import TopicIcon from '@mui/icons-material/Topic';
import { Link } from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const Sidebar = () => {
  const [openGrades, setOpenGrades] = useState(true);
  const [openSubject, setOpenSubject] = useState(true);
  const decodedToken = jwtDecode(localStorage.getItem('token'));
  const userId = decodedToken.id;
  const [course, setCourse] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8081/educonnect/tutor/listcourse?tutorid=${userId}`)
      .then((response) => {
        setCourse(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userId]);

  const handleGradesClick = () => {
    setOpenGrades(!openGrades);
  };
  const handleSubjectClick = () => {
    setOpenSubject(!openSubject);
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
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <Typography sx={{ fontSize: '16px', marginRight: 'auto' }}><Link to="/hometutor" style={{ color: "black", textDecoration: "none" }}>Trang chủ</Link></Typography>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <CalendarMonthIcon />
          </ListItemIcon>
          <Typography sx={{ fontSize: '16px', marginRight: 'auto' }}><Link to="/calendartutor" style={{ color: "black", textDecoration: "none" }}>Lịch dạy</Link></Typography>
        </ListItemButton>

        <ListItemButton onClick={handleGradesClick}>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <Typography sx={{ fontSize: '16px', marginRight: 'auto' }}>Xem khoá dạy </Typography>
          {openGrades ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openGrades} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {course.map((item, index) => (
              <ListItemButton sx={{ pl: 3 }} key={index}>
                <ListItemIcon></ListItemIcon>
                <Typography sx={{ fontSize: '13px', marginRight: 'auto', fontWeight: 'bold' }}>
                  <Link to="/managerstudent" style={{ color: "black", textDecoration: "none" }}>{item.courseName} {item.classname}</Link>
                </Typography>
              </ListItemButton>
            ))}
          </List>
        </Collapse>

        <ListItemButton onClick={handleSubjectClick}>
          <ListItemIcon>
            <TopicIcon />
          </ListItemIcon>
          <Typography sx={{ fontSize: '16px', marginRight: 'auto' }}><Link style={{ color: "black", textDecoration: "none" }}>Tài liệu dạy </Link></Typography>
          {openSubject ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openSubject} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {course.map((item, index) => (
              <ListItemButton sx={{ pl: 3 }} key={index}>
                <ListItemIcon></ListItemIcon>
                <Typography sx={{ fontSize: '13px', marginRight: 'auto', fontWeight: 'bold' }}>
                  <Link to="/managerstudent" style={{ color: "black", textDecoration: "none" }}>{item.courseName} {item.classname}</Link>
                </Typography>
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>
    </Box>
  );
};

export default Sidebar;