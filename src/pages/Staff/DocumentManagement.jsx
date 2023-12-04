import React, { useCallback, useEffect, useState } from "react";
import { Box, Link, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import CheckIcon from '@mui/icons-material/Check';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';


function DocumentManagement() {
    const [searchName, setSearchName] = useState("");
    const decodedToken = jwtDecode(localStorage.getItem('token'));
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState('');

    const handleSearch = (event) => {
        setSearchName(event.target.value);
    };

    const handlePageChange = (pageNumber) => {
        setPage(pageNumber);
    };
    const fetchData = useCallback((pageNumber) => {
        axios
            .get(`http://localhost:8081/staffsconnect/listtutorregistersforlessons?page=${pageNumber}&staffid=${decodedToken.id}`)
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [decodedToken.id]);

    useEffect(() => {
        fetchData(page);
        axios
            .get(`http://localhost:8081/staffsconnect/totalpageTutor?staffid=${decodedToken.id}`)
            .then((response) => {
                setPages(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [decodedToken.id, fetchData, page]);

    const handleClickChange = async (event, fileid, status) => {
        event.preventDefault();
        event.stopPropagation();
        try {
            const response = await axios.put(
                `http://localhost:8081/staffsconnect/acceptfile`,
                {
                    fileid : fileid,
                    status : status,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            alert(response.data);
            window.location.reload();
            console.log(response.data);
        } catch (error) {
            console.error(error);
            console.log(error.response.data);
        }
    };
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
                    marginLeft: '80%',
                    marginTop: '10px',
                }}>
                    <TextField
                    label="Tìm Kiếm"
                        sx={{
                            borderRadius: '11%',
                            width: '200px',
                        }}
                        InputProps={{
                            style: {
                                height: '45px',
                                fontSize: "14px"
                            },
                        }}
                        value={searchName}
                        onChange={handleSearch}
                    />
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
                                            <TableRow key={item.fileid}>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.fileid}</TableCell>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.tutorname}</TableCell>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.nameFile}</TableCell>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.coursename}</TableCell>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>
                                                    <Link style={{ textDecoration: "none" }} href={'http://localhost:8081/edu/file/files/' + item.files} target="_blank">
                                                        Tải File
                                                    </Link>
                                                </TableCell>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center", color: "red" }}>Đang đợi duyệt</TableCell>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>
                                                    <CheckIcon sx={{ fontSize: "25px", marginRight : '15px' }} onClick={(e) => handleClickChange(e, item.fileid, 2)}/>
                                                    <RemoveDoneIcon sx={{ fontSize: "25px" }} onClick={(e) => handleClickChange(e, item.fileid, 0)} />
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
                    <Pagination count={pages.length} page={page} onChange={handlePageChange} sx={{ '& .MuiPaginationItem-root': { fontSize: '15px', minWidth: '50px' } }} />
                </Box>
            </Box>
        </Box>
    );
}

export default DocumentManagement;