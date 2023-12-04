
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';

function HomeworkTable(props) {
  const [res, setRes] = useState(props.data)
  
  useEffect(() => {
    setRes(props.data)
  }, [props.data]);
  const deleteExecise = (id) => {
    axios
    .delete(`http://localhost:8081/exersice/deleteexercise/${id}`)
    .then(() => {
      props.fetchData();
    })
    .catch((error) => {
        console.error("Error fetching timeline:", error);
    });
  }
  return (
    <TableContainer component={Paper} sx={{}}>
      <Table >
        <TableHead>
          <TableRow style={{ backgroundColor: "#e2d6d6c9"}}>
            <TableCell width={100} style={{ width: 50, fontSize: "14px" }}>ID</TableCell>
            <TableCell style={{ width: 150, fontSize: "14px" }}>Tên bài tập</TableCell>
            <TableCell style={{ minWidth: 130, fontSize: "14px" }}>Tên mô phỏng</TableCell>
            <TableCell style={{ maxWidth: 100, width: 100, minWidth: 100, fontSize: "14px" }}>Link mô phỏng</TableCell>
            <TableCell style={{ maxWidth: 150, fontSize: "14px" }}>Link file</TableCell>
            <TableCell style={{ minWidth: 130, fontSize: "14px" }}>Ngày bắt đầu</TableCell>
            <TableCell style={{ minWidth: 130, fontSize: "14px" }}>Ngày kết thúc</TableCell>
            <TableCell style={{ width: 50, fontSize: "14px" }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {res.map((row) => (
            <TableRow key={row.exerciseid} style={{fontSize: "14px"}}>
              <TableCell style={{fontSize: "14px"}}>{row.homeworkid}</TableCell>
              <TableCell style={{fontSize: "14px"}}>{row.title}</TableCell>
              <TableCell style={{fontSize: "14px"}}>{row.demo}</TableCell>
              <TableCell style={{fontSize: "14px"}}>{row.linkDemo}</TableCell>
              <TableCell style={{fontSize: "14px"}}>{row.files}</TableCell>
              <TableCell style={{fontSize: "14px"}}>{row.startDate}</TableCell>
              <TableCell style={{fontSize: "14px"}}>{row.endDate}</TableCell>
              <TableCell style={{fontSize: "14px"}}>
                <Button type='link' variant="contained" color="success" sx={{marginRight: "10px"}} href='/exercisedetail'>
                Sửa
              </Button>
              <Button variant="contained" color="error" onClick={() => deleteExecise(row.exerciseid)}>
                Xoá
              </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
}

export default HomeworkTable;
