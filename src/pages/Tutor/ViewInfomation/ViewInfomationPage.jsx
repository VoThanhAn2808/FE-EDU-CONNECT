import React from 'react';
import './ViewInfomation.css';
import { Box, Grid, Rating, Typography} from '@mui/material';
import Slide from '../../../assests/slide.jpg';
import GroupIcon from '@mui/icons-material/Group';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import SlideFeedback from './SlideFeedback/SlideFeedback';

function ViewInfomationPage() {
  return (
    <Box className='body'>
      <Box>
        <img src={Slide} alt='Slide' className='Slide' />
      </Box>
      <Box className='container Item'>
        <Box className='Icon'>
          <GroupIcon sx={{fontSize:"30px"}}/>
          <Typography sx={{fontSize:"14px", fontWeight:"700"}}> 1200</Typography>
          <Typography sx={{fontSize:"13px", fontWeight:"800", fontFamily:"cursive"}}>Học sinh theo học</Typography>
        </Box>
        <Box className='Icon'>
        <MenuBookIcon sx={{fontSize:"30px"}}/>
          <Typography sx={{fontSize:"14px", fontWeight:"700"}}> 4+</Typography>
          <Typography sx={{fontSize:"13px", fontWeight:"800", fontFamily:"cursive"}}>Khóa học trên trang</Typography>
        </Box>
        <Box className='Icon'>
          <StarIcon sx={{fontSize:"30px"}}/>
          <Typography sx={{fontSize:"14px", fontWeight:"700"}}> 5+</Typography>
          <Typography sx={{fontSize:"13px", fontWeight:"800", fontFamily:"cursive"}}>Số năm kinh nghiệm</Typography>
        </Box>
        <Box className='Icon'>
          <PersonIcon sx={{fontSize:"30px"}}/>
          <Typography sx={{fontSize:"14px", fontWeight:"700"}}> 800</Typography>
          <Typography sx={{fontSize:"13px", fontWeight:"800", fontFamily:"cursive"}}>Học sinh theo dõi</Typography>
        </Box>
        <Box></Box>
      </Box>
      <Box className='info'>
        <Typography sx={{fontSize:"25px", fontWeight:"900", fontFamily:"cursive"}}>Thông Tin Chung</Typography>     
          <Box className='infoTutor'>
            <Grid container sapacing={1} sx={{height:"200px"}}>
                <Grid item xs={7}>
                    <Typography sx={{fontSize:"14px", marginTop:"15px", fontWeight:"600"}}>Giáo viên: Nguyễn Công Nguyên</Typography>
                    <Typography sx={{fontSize:"14px", marginTop:"15px", fontWeight:"600"}}>Bộ môn : Toán</Typography>
                    <Typography sx={{fontSize:"14px", marginTop:"15px", fontWeight:"600"}}>Nơi công tác: EDUCONNECT</Typography>
                </Grid>
                <Grid item xs={5}>
                <Typography sx={{fontSize:"14px", marginTop:"15px", fontWeight:"600"}}>Trình độ: Đại học</Typography>
                <Typography sx={{fontSize:"14px", marginTop:"15px", fontWeight:"600"}}>Phụ trách lớp: 10, 11, 12</Typography>
                </Grid>
            </Grid>
          </Box>
      </Box>

      <Box className='container feedback-box'>
      <Typography sx={{
        fontSize:"20px", fontWeight:"900", fontFamily:"cursive"
      }}>
        Chia sẻ và cảm nhận của học sinh đã đăng kí học thử
      </Typography>
        <SlideFeedback/>
      </Box>
      <Box className='container feedback-box'>
      <Typography sx={{
        fontSize:"20px", fontWeight:"900", fontFamily:"cursive"
      }}>
        Chia sẻ và cảm nhận của học sinh
      </Typography>
      <SlideFeedback/>
      </Box>
    </Box>
  );
}
export default ViewInfomationPage;
