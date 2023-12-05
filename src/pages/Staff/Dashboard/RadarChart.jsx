import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';

function RadarChartMui() {
  const data = [
    { name: 'Toán', value: 80 },
    { name: 'Lý', value: 50 },
    { name: 'Hoá', value: 30 },
    { name: 'Văn', value: 40 },
    { name: 'Anh', value: 100 },
    { name: 'Sinh', value: 20 },
  ];

  return (
    <Box sx={{marginTop:"20px"}}>
      <Typography variant="h6" align="center" gutterBottom>
        Những môn học nỗi trội
      </Typography>
      <ResponsiveContainer width="100%" height={350}>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <Radar name="Lượng học sinh học" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default RadarChartMui;