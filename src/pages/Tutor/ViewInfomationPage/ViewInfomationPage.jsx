import { Box, Grid, Typography } from "@mui/material";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StarIcon from '@mui/icons-material/Star';
import Slide from "./Slide/Slide";

function ViewInfomationPage() {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#E4D3A3",
          height: "250px",
          width: "100%"
        }}
      >

      </Box>
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Box sx={{
              backgroundColor: "#E4D3A3",
              width: "150px",
              height: "150px",
              marginTop: "15px",
              borderRadius: "10px",
              textAlign: "center",
              marginLeft: "35%"
            }}>
              <PeopleAltIcon style={{fontSize:"60px"}}/>
              <Typography sx={{fontSize:"19px"}}>1200</Typography>
              <Typography sx={{fontSize:"20px"}}>Học sinh theo học</Typography>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box sx={{
              backgroundColor: "#E4D3A3",
              width: "150px",
              height: "150px",
              marginTop: "15px",
              borderRadius: "10px",
              textAlign: "center",
              marginLeft: "35%"
            }}>
              <MenuBookIcon style={{fontSize:"60px"}}/>
              <Typography sx={{fontSize:"19px"}}>4+</Typography>
              <Typography sx={{fontSize:"20px"}}>Khoá học trên trang</Typography>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box sx={{
              backgroundColor: "#E4D3A3",
              width: "150px",
              height: "150px",
              marginTop: "15px",
              borderRadius: "10px",
              textAlign: "center",
              marginLeft: "35%"
            }}>
              <StarIcon style={{fontSize:"60px"}}/>
              <Typography sx={{fontSize:"19px"}}>5+</Typography>
              <Typography sx={{fontSize:"20px"}}>Số năm kinh nghiệm</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{
        marginTop: "30px",
      }}>
        <Grid container spacing={1}>
          <Grid item xs={4} sx={{marginLeft:"20%"}}>
            <Typography sx={{fontSize:"20px", fontWeight: "600"}}>Giáo viên: Nguyễn Văn A</Typography>
            <Typography sx={{fontSize:"20px", fontWeight: "600"}}>Môn: Toán học,...</Typography>
            <Typography sx={{fontSize:"20px", fontWeight: "600"}}>Nơi công tác: EDU-CONNECT</Typography>
          </Grid>
          <Grid item xs={4}>
          <Typography sx={{fontSize:"20px", fontWeight: "600"}}>Trình độ: Đại học</Typography>
          <Typography sx={{fontSize:"20px", fontWeight: "600"}}>Phụ trách lớp: 10,11,12</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop:"30px"}}>
        <Typography sx={{fontSize:"20px", fontWeight:"700", color:"blue"}}>Chia sẻ, cảm nhận của học sinh</Typography>
      </Box>
      <Box sx={{}}>
        <Slide/>
      </Box>
    </Box>
  );
}

export default ViewInfomationPage;