import React, { useEffect, useState } from "react";
import { Box, Button, Modal, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { jwtDecode } from "jwt-decode";


function TutorRegisterManagement() {
    const [searchName, setSearchName] = useState("");
    const decodedToken = jwtDecode(localStorage.getItem('token'));
    const [data, setData] = useState([]);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [tutor, setTutor] = useState('');
    const [prices, setPrice] = useState('');
    const [open, setOpen] = React.useState(false);
    const handleCloses = () => setOpen(false);
    const [open1, setOpen1] = React.useState(false);
    const handleCloses1 = () => setOpen1(false);
    const handleOpen1 = (email, tutor) => {
        setEmail(email);
        setTutor(tutor);
        setOpen1(true);
    };
    const handleOpen = (email, tutor) => {
        setEmail(email);
        setTutor(tutor);
        setOpen(true);
    };

    const handleSearch = (event) => {
        setSearchName(event.target.value);
    };

    const handleClick = (event, email, tutor) => {
        setEmail(email);
        setTutor(tutor);
    };
    const handleSend = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        try {
            const response = await axios.put(
                `http://localhost:8081/staffsconnect/accepttutor`,
                {
                    tutorid: tutor,
                    staffid: decodedToken.id,
                    message: message,
                    email: email,
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
        handleCloses();
    };

    const handleSendfinal = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        try {
            const response = await axios.put(
                `http://localhost:8081/staffsconnect/accepttutorfinal`,
                {
                    tutorid: tutor,
                    staffid: decodedToken.id,
                    message: message,
                    email: email,
                    price : prices,
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
        handleCloses();
    };

    const handleDelete = async (event, tutorid) => {
        event.preventDefault();
        event.stopPropagation();
        try {
            const response = await axios.delete(
                `http://localhost:8081/staffsconnect/deletetutorregister/${tutorid}`);
            alert(response.data);
            window.location.reload();
            console.log(response.data);
        } catch (error) {
            console.error(error);
            console.log(error.response.data);
        }
        handleCloses();
    };

    useEffect(() => {
        axios
            .get(`http://localhost:8081/staffsconnect/listwaitforconfirm`)
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
                        Thông tin gia sư mới đăng ký
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
                                fontSize: "14px"
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
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>File CV</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}>Trạng thái</TableCell>
                                    <TableCell sx={{ fontSize: "20px", fontFamily: "cursive", textAlign: "center" }}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((item) => {
                                    if (item.fullName.toLowerCase().includes(searchName.toLowerCase())) {
                                        return (
                                            <TableRow key={item.tutorid}>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.tutorid}</TableCell>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.fullName}</TableCell>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>{item.cv ? (
                                                    <Link style={{ textDecoration: "none" }} href={`` + item.cv} target="_blank" rel="noopener noreferrer">
                                                        Tải File
                                                    </Link>
                                                ) : (
                                                    "No file available"
                                                )}</TableCell>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center", color: "red" }}>{item.status === 3 ? 'Đang đợi duyệt' : 'Đợi phỏng vấn'}</TableCell>
                                                <TableCell sx={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>
                                                    {item.status === 3 ? (
                                                        <InterpreterModeIcon sx={{ fontSize: "25px" }} onClick={() => handleOpen(item.email, item.tutorid)} />
                                                    ) : (
                                                        <CheckCircleIcon sx={{ fontSize: "25px" }} onClick={() => handleOpen1(item.email, item.tutorid)} />
                                                    )}
                                                    <RemoveCircleOutlineIcon sx={{ fontSize: "25px", marginLeft: '10px' }} onClick={(e) => handleDelete(e, item.tutorid)} />
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
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        backgroundColor: "#D9D9D9",
                        width: "500px",
                        height: "410px",
                        borderRadius: "10px",
                        border: '2px solid #000000',
                        p: 2
                    }}
                >
                    <Typography
                        sx={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}
                    >
                        Duyệt gia sư
                    </Typography>
                    <TextField
                        fullWidth
                        label='Email'
                        disabled={true}
                        value={email}
                        InputProps={{
                            style: { fontSize: '14px' },
                        }}
                        required
                        sx={{ marginTop: "20px" }}
                    />
                    <TextField
                        fullWidth
                        label='Nội dung'
                        variant='outlined'
                        InputLabelProps={{
                            style: { fontSize: '15px' },
                        }}
                        InputProps={{
                            style: { fontSize: '14px' },
                            multiline: true,
                            rows: 7,
                        }}
                        required
                        sx={{ marginTop: "20px" }}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <Box sx={{ marginTop: "30px", marginLeft: "45%" }}>
                        <Button
                            variant="outlined"
                            sx={{ backgroundColor: "red", color: "white" }}
                            onClick={handleCloses}
                        >
                            Hủy
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ backgroundColor: "green", marginLeft: '10px' }}
                            onClick={(e) => handleSend(e)}
                        >
                            Send
                        </Button>
                    </Box>
                </Box>
            </Modal>
            <Modal
                open={open1}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        backgroundColor: "#D9D9D9",
                        width: "500px",
                        height: "500px",
                        borderRadius: "10px",
                        border: '2px solid #000000',
                        p: 2
                    }}
                >
                    <Typography
                        sx={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}
                    >
                        Duyệt gia sư
                    </Typography>
                    <TextField
                        fullWidth
                        label='Email'
                        disabled={true}
                        value={email}
                        InputProps={{
                            style: { fontSize: '14px' },
                        }}
                        required
                        sx={{ marginTop: "20px" }}
                    />
                    <TextField
                        fullWidth
                        label='Nội dung'
                        variant='outlined'
                        InputLabelProps={{
                            style: { fontSize: '15px' },
                        }}
                        InputProps={{
                            style: { fontSize: '14px' },
                            multiline: true,
                            rows: 7,
                        }}
                        required
                        sx={{ marginTop: "20px" }}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <TextField
                            fullWidth
                            value={prices}
                            onChange={(e) => setPrice(e.target.value)}
                            label='Tiền'
                            type="number"
                            variant='outlined'
                            InputLabelProps={{
                                style: { fontSize: '15px' },
                            }}
                            InputProps={{
                                style: { fontSize: '14px' },
                            }}
                            required
                            sx={{ marginTop: "20px" }}
                        />
                    <Box sx={{ marginTop: "30px", marginLeft: "45%" }}>
                        <Button
                            variant="outlined"
                            sx={{ backgroundColor: "red", color: "white" }}
                            onClick={handleCloses1}
                        >
                            Hủy
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ backgroundColor: "green", marginLeft: '10px' }}
                            onClick={(e) => handleSendfinal(e)}
                        >
                            Send
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}

export default TutorRegisterManagement;