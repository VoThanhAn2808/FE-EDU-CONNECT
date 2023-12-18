import axios from 'axios';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link} from "react-router-dom";
import { Alert, Snackbar, Box, Button, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
function ExerciseTable(props) {
  const [res, setRes] = useState(props.data);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [book, setBook] = useState('');
  const [exerciseId, setExerciseId] = useState(null);

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenUserMenu = (event, exerciseId, bookid) => {
    setAnchorElUser(event.currentTarget);
    setExerciseId(exerciseId);
    setBook(bookid);
  };

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
    setShowSnackbar(true);
  }

  return (
    <Box>
      <TableContainer component={Paper} sx={{}}>
        <Table >
          <TableHead>
            <TableRow style={{ backgroundColor: "#e2d6d6c9" }}>
              <TableCell style={{ width: 50, fontSize: "14px" }}>ID</TableCell>
              <TableCell style={{ width: 200, fontSize: "14px" }}>Tên chương</TableCell>
              <TableCell style={{ width: 50, fontSize: "14px", textAlign: "center" }}>Action</TableCell>
              <TableCell style={{ width: 50, fontSize: "14px" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {res.length > 0 ? res.map((row) => (
              <TableRow key={row.exerciseid} style={{ fontSize: "14px" }}>
                <TableCell style={{ fontSize: "14px" }}>{row.exerciseid}</TableCell>
                <TableCell style={{ fontSize: "14px" }}>{row.title}</TableCell>
                <TableCell style={{ fontSize: "14px", textAlign: "center" }}>
                  <Button type='link' variant="contained" color="success" sx={{ marginRight: "10px" }} href={`/exercisedetail/${row.exerciseid}`}>
                    Xem
                  </Button>
                  <Snackbar
                    open={showSnackbar}
                    autoHideDuration={3000}
                    onClose={handleCloseSnackbar}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                  >
                    <Alert severity="success" onClose={handleCloseSnackbar}>
                      Xóa bài tập thành công!
                    </Alert>
                  </Snackbar>
                  <Button variant="contained" color="error" onClick={() => deleteExecise(row.exerciseid)}>
                    Xoá
                  </Button>
                </TableCell>
                <TableCell sx={{ height: '50px', textAlign: 'center' }}>
                  <MoreHorizIcon sx={{ fontSize: '30px' }} onClick={(event) => handleOpenUserMenu(event, row.exerciseid, row.bookid)} />
                </TableCell>
              </TableRow>
            )) :
              <TableCell sx={{ height: '50px', textAlign: 'center' }}>
                <TableCell style={{ fontSize: "10px", fontFamily: "cursive", textAlign: "center" }} colSpan={4}>Không có dữ liệu</TableCell>
              </TableCell>}
          </TableBody>
        </Table>
      </TableContainer>
      <Menu
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        // keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <>
          <Link to={`/homeworklistscore/${book}`} style={{ textDecoration: 'none', color: 'black' }}>
            <MenuItem onClick={handleCloseUserMenu}>Bài tập về nhà</MenuItem>
          </Link>
          <Link to={`/classroomlistscore/${book}`} style={{ textDecoration: 'none', color: 'black' }}>
            <MenuItem onClick={handleCloseUserMenu}>Bài tập trắc nghiệm</MenuItem>
          </Link>
        </>
      </Menu>
    </Box>

  );
}

export default ExerciseTable;
