
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

function ExerciseTable(props) {
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
    alert("Xóa bài tập thành công")
  }
  return (
    <TableContainer component={Paper} sx={{}}>
      <Table >
        <TableHead>
          <TableRow style={{ backgroundColor: "#e2d6d6c9"}}>
            <TableCell style={{ width: 50, fontSize: "14px" }}>ID</TableCell>
            <TableCell style={{ width: 200, fontSize: "14px" }}>Tên chương</TableCell>
            <TableCell style={{ width: 50, fontSize: "14px" }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {res.map((row) => (
            <TableRow key={row.exerciseid} style={{fontSize: "14px"}}>
              <TableCell style={{fontSize: "14px"}}>{row.exerciseid}</TableCell>
              <TableCell style={{fontSize: "14px"}}>{row.title}</TableCell>
              <TableCell style={{fontSize: "14px"}}>
                <Button type='link' variant="contained" color="success" sx={{marginRight: "10px"}} href={`/exercisedetail/${row.exerciseid}`}>
                Xem
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

export default ExerciseTable;
