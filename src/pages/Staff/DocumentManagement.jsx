import React, { useEffect, useState } from "react";
import { Box, Button, Menu, MenuItem, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from "react-router-dom";
import axios from "axios";


function DocumentManagement() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchName, setSearchName] = useState("");
    const [data, setData] = useState([]);


    const handleSearch = (event) => {
        setSearchName(event.target.value);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        axios
            .get(`http://localhost:8081/staffsconnect/listtutorregistersforlessons?staffid=3`)
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <Box sx={{ marginBottom: "50px" }}>
            <Box sx={{
                backgroundColor: "#D9D9D9",
                height: "100px",
                marginLeft: "20px",
                marginRight: "20px",
                marginTop: "20px",
                borderRadius: "5px",
                border: '1px solid #000000', p: 2
            }}>
                <Box sx={{
                    textAlign: "center",
                }}>
                    <Typography sx={{
                        fontSize: "40px",
                        fontFamily: "cursive",
                    }}>
                        Thông tin gia sư đăng ký bài dạy
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                backgroundColor: "#D9D9D9",
                marginLeft: "20px",
                marginRight: "20px",
                marginTop: "20px",
                borderRadius: "5px",
                border: '1px solid #000000', p: 2,
            }}>
                <Box sx={{
                    marginLeft: '70%',
                    marginTop: '10px',
                }}>
                    <TextField
                        sx={{
                            borderRadius: '11%',
                            width: '200px',
                        }}
                        InputProps={{
                            style: {
                                height: '45px',
                                fontSize:"14px"
                            },
                        }}
                        value={searchName}
                        onChange={handleSearch}
                    />
                    <Button variant="contained" component="a" href="#" hrefLang="#"
                        sx={{
                            height: '45px',
                            marginLeft: '10px',
                            fontSize: '12px',
                            borderRadius: '11%'
                        }}>
                        Tìm Kiếm
                    </Button>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    paddingTop: "15px",
                }}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>STT</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Tên gia sư</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Tên bài dạy</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Môn học</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>File bài dạy</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Trạng thái</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((item) => {
                                    if (item.tutorname.toLowerCase().includes(searchName.toLowerCase())) {
                                        return (
                                            <TableRow key={item.id}>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.exerciseid}</TableCell>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.tutorname}</TableCell>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.nameFile}</TableCell>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.coursename}</TableCell>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.files ? (
                                                    <Link style={{ textDecoration: "none" }} href={item.files} target="_blank" rel="noopener noreferrer">
                                                        Tải File
                                                    </Link>
                                                ) : (
                                                    "No file available"
                                                )}</TableCell>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center", color: "red" }}>{item.status}</TableCell>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>
                                                    <MoreVertIcon sx={{ fontSize: "25px" }} onClick={handleClick} />
                                                    <Menu
                                                        anchorEl={anchorEl}
                                                        open={Boolean(anchorEl)}
                                                        onClose={handleClose}
                                                    >
                                                        {/* <MenuItem onClick={() => handleDeleteRow(item.id)}>Duyệt</MenuItem>
                                                        <MenuItem onClick={() => handleDeleteRow(item.id)}>Không duyệt</MenuItem> */}
                                                    </Menu>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    }
                                    return null;
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: "15px" }}>
                    <Pagination count={10} sx={{ '& .MuiPaginationItem-root': { fontSize: '15px', minWidth: '50px' } }} />
                </Box>
            </Box>
        </Box>
    );
}

export default DocumentManagement;