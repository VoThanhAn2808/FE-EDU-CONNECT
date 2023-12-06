import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';

function RadarChartMui() {
  const data = [
    { name: 'Thành An', value: 80 },
    { name: 'Thái Hoà', value: 50 },
    { name: 'Đức Nghĩa', value: 150 },
    { name: 'Công Hậu', value: 40 },
    { name: 'Đức Toàn', value: 100 },
    { name: 'Trọng Hiếu', value: 20 },
  ];

  return (
    <Box sx={{marginTop:"20px"}}>
      <Typography variant="h6" align="center" gutterBottom>
        Những gia sư nỗi trội
      </Typography>
      <ResponsiveContainer width="100%" height={350}>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <Radar name="Lượng học sinh học" dataKey="value" stroke="#8884d8" fill="green" fillOpacity={0.6} />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default RadarChartMui;