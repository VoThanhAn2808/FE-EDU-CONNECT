import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Box, Collapse, Typography} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';
import TopicIcon from '@mui/icons-material/Topic';
import { Link } from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Sidebar = () => {
  const [openGrades, setOpenGrades] = React.useState(true);

  const handleGradesClick = () => {
    setOpenGrades(!openGrades);
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
          <Typography sx={{ fontSize: '16px', marginRight: 'auto' }}><Link  style={{color:"black", textDecoration: "none"}}>Trang chủ</Link></Typography>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <CalendarMonthIcon />
          </ListItemIcon>
          <Typography sx={{ fontSize: '16px', marginRight: 'auto' }}><Link to="calendartutor"  style={{color:"black", textDecoration: "none"}}>Lịch dạy</Link></Typography>
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
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemIcon></ListItemIcon>
              <Typography sx={{ fontSize: '13px', marginRight: 'auto', fontWeight: 'bold' }}>
                <Link  style={{color:"black", textDecoration: "none"}}>Toán 10</Link>
              </Typography>
            </ListItemButton>

            <ListItemButton sx={{ pl: 3 }}>
              <ListItemIcon></ListItemIcon>
              <Typography sx={{ fontSize: '13px', marginRight: 'auto', fontWeight: 'bold' }}>
                Toán 11
              </Typography>
            </ListItemButton>

            <ListItemButton sx={{ pl: 3 }}>
              <ListItemIcon></ListItemIcon>
              <Typography sx={{ fontSize: '13px', marginRight: 'auto', fontWeight: 'bold' }}>
                Toán 12
              </Typography>
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton>
          <ListItemIcon>
            <TopicIcon />
          </ListItemIcon>
          <Typography sx={{ fontSize: '16px', marginRight: 'auto' }}><Link  style={{color:"black", textDecoration: "none"}}>Tài liệu dạy </Link></Typography>
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;