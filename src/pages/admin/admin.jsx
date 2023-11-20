import { Box, Grid, Typography } from "@mui/material";
import { Chart } from 'react-google-charts';
import MovingIcon from '@mui/icons-material/Moving';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

function Admin() {
  const data = [
    ['Month', 'Sales', 'Expenses', 'Profit'],
    ['Jan', 1000, 400, 600],
    ['Feb', 1170, 460, 710],
    ['Mar', 660, 1120, 380],
    ['Apr', 1030, 540, 490],
    ['May', 800, 600, 200],
  ];

  const options = {
    title: 'Sales, Expenses, and Profit',
    hAxis: {
      title: 'Month',
    },
    vAxis: {
      title: 'Amount',
    },
    seriesType: 'bars',
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
                <Typography variant="h6" sx={{}}>500</Typography>
                <Box sx={{display : 'flex', paddingTop: '3px'}}>
                  <Typography>45%</Typography>
                  <MovingIcon sx={{fontSize : '20px'}}/>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ marginTop: '20px', backgroundColor: 'gold', marginLeft: '40px', height: '80px', width: '300px', borderRadius: '5px' }}>
              <Typography variant="h5" sx={{ textAlign: 'center', paddingTop: '10px', fontFamily: 'cursive' }}>Số lượng học sinh</Typography>

            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ marginTop: '20px', backgroundColor: 'gold', marginLeft: '40px', height: '80px', width: '300px', borderRadius: '5px' }}>
              <Typography variant="h5" sx={{ textAlign: 'center', paddingTop: '10px', fontFamily: 'cursive' }}>Số lượng học sinh</Typography>
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