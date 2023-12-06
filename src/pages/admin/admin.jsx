import { Box, Grid, Typography } from "@mui/material";
import MovingIcon from '@mui/icons-material/Moving';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import './DateCalendar.css';
import ApexChart from "./ApexChart";
import PieChartMui from "./PieChart";
import RadarChartMui from "./RadarChart";



function Admin() {
  const data = [
    { name: 'Jan', học_sinh: 4000, gia_sư: 2400, tiền: 2400, nhân_viên: 500 },
    { name: 'Feb', học_sinh: 3000, gia_sư: 1398, tiền: 2210, nhân_viên: 1000 },
    { name: 'Mar', học_sinh: 2000, gia_sư: 9800, tiền: 2290, nhân_viên: 2000 },
    { name: 'Apr', học_sinh: 2780, gia_sư: 3908, tiền: 2000, nhân_viên: 3000 },
    { name: 'May', học_sinh: 1890, gia_sư: 4800, tiền: 2181, nhân_viên: 4000 },
    { name: 'Jun', học_sinh: 2390, gia_sư: 3800, tiền: 2500, nhân_viên: 5000 },
    { name: 'Jul', học_sinh: 3490, gia_sư: 4300, tiền: 2100, nhân_viên: 6000 },
  ];

  return (
    <Box>
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Box sx={{ marginTop: '20px', backgroundColor: 'gold', marginLeft: '10px', height: '80px', width: '300px', borderRadius: '5px' }}>
              <Typography variant="h5" sx={{ textAlign: 'center', paddingTop: '10px', fontFamily: 'cursive' }}>Số lượng học sinh</Typography>
              <Box sx={{ display: 'flex', paddingTop: '10px', justifyContent: 'center' }}>
                <Typography variant="h4">500</Typography>
                <Box sx={{ display: 'flex', paddingTop: '3px', marginLeft: "10px", backgroundColor: "#1151F8", borderRadius: "10px" }}>
                  <Typography sx={{ fontSize: "15px", marginLeft: "5px" }}>45,54%</Typography>
                  <MovingIcon sx={{ fontSize: '20px', marginLeft: "10px" }} />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{ marginTop: '20px', backgroundColor: 'gold', marginLeft: '10px', height: '80px', width: '300px', borderRadius: '5px' }}>
              <Typography variant="h5" sx={{ textAlign: 'center', paddingTop: '10px', fontFamily: 'cursive' }}>Số lượng gia sư</Typography>
              <Box sx={{ display: 'flex', paddingTop: '10px', justifyContent: 'center' }}>
                <Typography variant="h4">100</Typography>
                <Box sx={{ display: 'flex', paddingTop: '3px', marginLeft: "10px", backgroundColor: "red", borderRadius: "10px" }}>
                  <Typography sx={{ fontSize: "15px", marginLeft: "5px" }}>20,2%</Typography>
                  <TrendingDownIcon sx={{ fontSize: '20px', marginLeft: "10px" }} />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{ marginTop: '20px', backgroundColor: 'gold', marginLeft: '10px', height: '80px', width: '300px', borderRadius: '5px' }}>
              <Typography variant="h5" sx={{ textAlign: 'center', paddingTop: '10px', fontFamily: 'cursive' }}>Lượng tiền </Typography>
              <Box sx={{ display: 'flex', paddingTop: '10px', justifyContent: 'center' }}>
                <Typography variant="h4">5.000.000</Typography>
                <Box sx={{ display: 'flex', paddingTop: '3px', marginLeft: "10px", backgroundColor: "#1151F8", borderRadius: "10px" }}>
                  <Typography sx={{ fontSize: "15px", marginLeft: "5px" }}>45,54%</Typography>
                  <MovingIcon sx={{ fontSize: '20px', marginLeft: "10px" }} />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{ marginTop: '20px', backgroundColor: 'gold', marginLeft: '10px', height: '80px', width: '300px', borderRadius: '5px' }}>
              <Typography variant="h5" sx={{ textAlign: 'center', paddingTop: '10px', fontFamily: 'cursive' }}>Số lượng nhân viên</Typography>
              <Box sx={{ display: 'flex', paddingTop: '10px', justifyContent: 'center' }}>
                <Typography variant="h4">500</Typography>
                <Box sx={{ display: 'flex', paddingTop: '3px', marginLeft: "10px", backgroundColor: "#1151F8", borderRadius: "10px" }}>
                  <Typography sx={{ fontSize: "15px", marginLeft: "5px" }}>45,54%</Typography>
                  <MovingIcon sx={{ fontSize: '20px', marginLeft: "10px" }} />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginTop: "40px", display: "flex" }}>
        <Box sx={{ backgroundColor: "#E8F4F5", marginLeft: "10px", borderRadius: "5px" }}>
          <LineChart width={900} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="nhân_viên" stroke="#C7A805" />
            <Line type="monotone" dataKey="học_sinh" stroke="#78068B" />
            <Line type="monotone" dataKey="gia_sư" stroke="#08950D" />
            <Line type="monotone" dataKey="tiền" stroke="#E80F0F" />
          </LineChart>
        </Box>
        <Box sx={{ backgroundColor: "#E8F4F5", marginLeft: "10px", borderRadius: "5px" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
          </Box>
      </Box>
      <Box sx={{ display: "flex", width:"100%"}}>
        <ApexChart />
        <Box sx={{width:"100%"}}>
          <PieChartMui />
          <RadarChartMui />
        </Box>
      </Box>
    </Box>
  );
}

export default Admin;