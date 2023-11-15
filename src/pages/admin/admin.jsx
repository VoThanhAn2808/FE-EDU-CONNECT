import { Box } from "@mui/material";
import { Chart } from 'react-google-charts';

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