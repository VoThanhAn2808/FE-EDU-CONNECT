import React from 'react';
import { Box, Typography } from '@mui/material';
import { BarChart, Bar, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function ApexChart() {
  const data = [
    { name: 'Lớp 1', hoc_sinh: 400, gia_su: 50, nhan_vien: 400 },
    { name: 'Lớp 2', hoc_sinh: 430, gia_su: 40, nhan_vien: 400 },
    { name: 'Lớp 3', hoc_sinh: 448, gia_su: 55, nhan_vien: 400 },
    { name: 'Lớp 4', hoc_sinh: 470, gia_su: 60, nhan_vien: 400 },
    { name: 'Lớp 5', hoc_sinh: 540, gia_su: 70, nhan_vien: 400 },
    { name: 'Lớp 6', hoc_sinh: 580, gia_su: 80, nhan_vien: 400 },
    { name: 'Lớp 7', hoc_sinh: 690, gia_su: 90, nhan_vien: 400 },
    { name: 'Lớp 8', hoc_sinh: 1100, gia_su: 100, nhan_vien: 400 },
    { name: 'Lớp 9', hoc_sinh: 1200, gia_su: 110, nhan_vien: 400 },
    { name: 'Lớp 10', hoc_sinh: 1380, gia_su: 120, nhan_vien: 400 },
    { name: 'Lớp 11', hoc_sinh: 1380, gia_su: 130, nhan_vien: 400 },
    { name: 'Lớp 12', hoc_sinh: 1380, gia_su: 140, nhan_vien: 400 },
  ];

  return (
    <Box id="chart" sx={{marginTop:"30px", marginLeft:"10px"}}>
      <Typography variant="h6" align="center" gutterBottom>
        Lượng học sinh theo từng lớp
      </Typography>
      <BarChart width={850} height={600} data={data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" />
        <Tooltip />
        <Legend />
        <Bar dataKey="gia_su" fill="#F41B3F" />
        <Bar dataKey="nhan_vien" fill="green" />
        <Bar dataKey="hoc_sinh" fill="#1B08F4" />
      </BarChart>
    </Box>
  );
}

export default ApexChart;