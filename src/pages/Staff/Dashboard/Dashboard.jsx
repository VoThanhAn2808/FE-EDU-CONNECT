import { Box, Grid, Typography } from "@mui/material";
import MovingIcon from '@mui/icons-material/Moving';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import axios from "axios";
import { useEffect, useState } from "react";


function Dashboard() {
  const [data, setData] = useState([]);
  const [month, setMonth] = useState('');
  const [lmonth, setLmonth] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:8081/staffsconnect/staffstatisticsyear`)
      .then((response) => {
        setData(response.data);
        console.log("ds", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get(`http://localhost:8081/staffsconnect/staffstatisticscurrentmonth?staffId=2`)
      .then((response) => {
        setMonth(response.data);
        console.log("trc", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get(`http://localhost:8081/staffsconnect/staffstatisticspreviousmonth?staffId=2`)
      .then((response) => {
        setLmonth(response.data);
        console.log("sau", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const formattedData = data.map((item) => ({
    name: item.Month,
    Tổng_Tiền: item.totalamount,
    Thanh_Toán: item.payfortutor,
    Tiền_Lời: item.profit,
  }));

  return (
    <Box>
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Box sx={{ marginTop: '20px', backgroundColor: 'gold', marginLeft: '100px', height: '80px', width: '300px', borderRadius: '5px' }}>
              <Typography variant="h5" sx={{ textAlign: 'center', paddingTop: '10px', fontFamily: 'cursive' }}>Số lượng học sinh</Typography>
              <Box sx={{ display: 'flex', paddingTop: '10px', justifyContent: 'center' }}>
                <Typography variant="h4">{month.TotalStudents}</Typography>
                <Box
                  sx={{
                    display: 'flex',
                    paddingTop: '3px',
                    marginLeft: "10px",
                    backgroundColor: month.TotalStudents > lmonth.TotalStudents ? "#1151F8" : "red",
                    borderRadius: "10px"
                  }}
                >
                  <Typography sx={{ fontSize: "15px", marginLeft: "5px" }}>
                    {lmonth.TotalStudents !== 0
                      ? (((month.TotalStudents - lmonth.TotalStudents) / Math.abs(lmonth.TotalStudents)) * 10).toFixed(2)
                      : 0
                    }%
                  </Typography>
                  {month.TotalStudents > lmonth.TotalStudents ? (
                    <MovingIcon sx={{ fontSize: '20px', marginLeft: "10px" }} />
                  ) : (
                    <TrendingDownIcon sx={{ fontSize: '20px', marginLeft: "10px" }} />
                  )}
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ marginTop: '20px', backgroundColor: 'gold', marginLeft: '70px', height: '80px', width: '300px', borderRadius: '5px' }}>
              <Typography variant="h5" sx={{ textAlign: 'center', paddingTop: '10px', fontFamily: 'cursive' }}>Số lượng gia sư</Typography>
              <Box sx={{ display: 'flex', paddingTop: '10px', justifyContent: 'center' }}>
                <Typography variant="h4">{month.TotalTutors}</Typography>
                <Box
                  sx={{
                    display: 'flex',
                    paddingTop: '3px',
                    marginLeft: "10px",
                    backgroundColor: month.TotalTutors > lmonth.TotalTutors ? "#1151F8" : "red",
                    borderRadius: "10px"
                  }}
                >
                  <Typography sx={{ fontSize: "15px", marginLeft: "5px" }}>
                    {((month.TotalTutors - lmonth.TotalTutors) / Math.abs(lmonth.TotalTutors) * 10).toFixed(2)}%
                  </Typography>
                  {month.TotalTutors > lmonth.TotalTutors ? (
                    <MovingIcon sx={{ fontSize: '20px', marginLeft: "10px" }} />
                  ) : (
                    <TrendingDownIcon sx={{ fontSize: '20px', marginLeft: "10px" }} />
                  )}
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ marginTop: '20px', backgroundColor: 'gold', marginLeft: '30px', height: '80px', width: '300px', borderRadius: '5px' }}>
              <Typography variant="h5" sx={{ textAlign: 'center', paddingTop: '10px', fontFamily: 'cursive' }}>Lượng tiền </Typography>
              <Box sx={{ display: 'flex', paddingTop: '10px', justifyContent: 'center' }}>
                <Typography variant="h4">
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(month.TotalRevenue)}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    paddingTop: '3px',
                    marginLeft: "10px",
                    backgroundColor: month.TotalRevenue > lmonth.TotalRevenue ? "#1151F8" : "red",
                    borderRadius: "10px"
                  }}
                >
                  <Typography sx={{ fontSize: "15px", marginLeft: "5px" }}>
                    {((month.TotalRevenue - lmonth.TotalRevenue) / Math.abs(lmonth.TotalRevenue)) * 100}%
                  </Typography>
                  {month.TotalRevenue > lmonth.TotalRevenue ? (
                    <MovingIcon sx={{ fontSize: '20px', marginLeft: "10px" }} />
                  ) : (
                    <TrendingDownIcon sx={{ fontSize: '20px', marginLeft: "10px" }} />
                  )}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginTop: "40px", marginLeft: "15%" }}>
        <LineChart width={900} height={400} data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Tổng_Tiền" stroke="#78068B" />
          <Line type="monotone" dataKey="Thanh_Toán" stroke="#08950D" />
          <Line type="monotone" dataKey="Tiền_Lời" stroke="#E80F0F" />
        </LineChart>
      </Box>
      <Box sx={{ marginTop: "40px", marginLeft: "3%", marginBottom: "60px" }}>
        <BarChart width={1200} height={500} data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Tổng_Tiền" fill="#78068B" />
          <Bar dataKey="Thanh_Toán" fill="#08950D" />
          <Bar dataKey="Tiền_Lời" fill="#E80F0F" />
        </BarChart>
      </Box>
    </Box>
  );
}

export default Dashboard;