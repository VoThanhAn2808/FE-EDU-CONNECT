import { Box, Grid, Typography } from "@mui/material";
import { Chart } from 'react-google-charts';
import MovingIcon from '@mui/icons-material/Moving';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

function Admin() {
  const data = [
    ['Month', 'Học sinh', 'Gia sư', 'Tiền'],
    ['Jan', 1000, 400, 600],
    ['Feb', 1170, 460, 710],
    ['Mar', 660, 1120, 380],
    ['Apr', 1030, 540, 490],
    ['May', 800, 600, 200],
  ];

  const options = {
    title: 'Học sinh, Gia sư, and Tiền',
    hAxis: {
      title: 'Month',
    },
    vAxis: {
      title: 'Amount',
    },
    seriesType: 'line',
    series: { 2: { type: 'line' } },
  };
  return (
    <Box>
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Box sx={{ marginTop: '20px', backgroundColor: 'gold', marginLeft: '40px', height: '80px', width: '300px', borderRadius: '5px' }}>
              <Typography variant="h5" sx={{ textAlign: 'center', paddingTop: '10px', fontFamily: 'cursive' }}>Số lượng học sinh</Typography>
              <Box sx={{ display: 'flex', paddingTop: '10px', justifyContent: 'center' }}>
                <Typography variant="h4">500</Typography>
                <Box sx={{display : 'flex', paddingTop: '3px', marginLeft:"10px", backgroundColor:"#1151F8", borderRadius:"10px"}}>
                  <Typography sx={{fontSize:"15px", marginLeft:"5px"}}>45,54%</Typography>
                  <MovingIcon sx={{fontSize : '20px', marginLeft:"10px"}}/>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ marginTop: '20px', backgroundColor: 'gold', marginLeft: '40px', height: '80px', width: '300px', borderRadius: '5px' }}>
              <Typography variant="h5" sx={{ textAlign: 'center', paddingTop: '10px', fontFamily: 'cursive' }}>Số lượng gia sư</Typography>
              <Box sx={{ display: 'flex', paddingTop: '10px', justifyContent: 'center' }}>
                <Typography variant="h4">100</Typography>
                <Box sx={{display : 'flex', paddingTop: '3px', marginLeft:"10px", backgroundColor:"red", borderRadius:"10px"}}>
                  <Typography sx={{fontSize:"15px", marginLeft:"5px"}}>20,2%</Typography>
                  <TrendingDownIcon sx={{fontSize : '20px', marginLeft:"10px"}}/>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ marginTop: '20px', backgroundColor: 'gold', marginLeft: '40px', height: '80px', width: '300px', borderRadius: '5px' }}>
              <Typography variant="h5" sx={{ textAlign: 'center', paddingTop: '10px', fontFamily: 'cursive' }}>Lượng tiền </Typography>
              <Box sx={{ display: 'flex', paddingTop: '10px', justifyContent: 'center' }}>
                <Typography variant="h4">5.000.000</Typography>
                <Box sx={{display : 'flex', paddingTop: '3px', marginLeft:"10px", backgroundColor:"#1151F8", borderRadius:"10px"}}>
                  <Typography sx={{fontSize:"15px", marginLeft:"5px"}}>45,54%</Typography>
                  <MovingIcon sx={{fontSize : '20px', marginLeft:"10px"}}/>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Chart
        width={'100%'}
        height={'400px'}
        chartType="ComboChart"
        loader={<Box>Loading Chart</Box>}
        data={data}
        options={options}
      />
    </Box>
  );
}

export default Admin;