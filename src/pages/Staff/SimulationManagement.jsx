import React, { useState } from "react";
import { Box, Button, Menu, MenuItem, Modal, Table, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';


function SimulationManagement() {
    const [classAnchorEl, setClassAnchorEl] = useState(null);
    const [subjectAnchorEl, setSubjectAnchorEl] = useState(null);
    const [selectedClassOption, setSelectedClassOption] = useState("Tất cả");
    const [selectedSubjectOption, setSelectedSubjectOption] = useState("Tất cả");
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleClassIconClick = (event) => {
        setClassAnchorEl(event.currentTarget);
    };

    const handleSubjectIconClick = (event) => {
        setSubjectAnchorEl(event.currentTarget);
    };

    const handleClassMenuClose = (option) => {
        setSelectedClassOption(option);
        setClassAnchorEl(null);
    };

    const handleSubjectMenuClose = (option) => {
        setSelectedSubjectOption(option);
        setSubjectAnchorEl(null);
    };

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

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
                        fontFamily: "cursive"
                    }}>
                        Danh sách mô phỏng
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
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontSize: "20px", textAlign: "center" }}>STT</TableCell>
                                <TableCell sx={{ fontSize: "20px", textAlign: "center" }}>
                                    <Box>
                                        {selectedClassOption}
                                        <ExpandMoreIcon onClick={handleClassIconClick} />
                                    </Box>
                                    <Menu
                                        anchorEl={classAnchorEl}
                                        open={Boolean(classAnchorEl)}
                                        onClose={handleClassMenuClose}
                                    >
                                        <MenuItem onClick={() => handleClassMenuClose("Tất cả")}>Tất cả</MenuItem>
                                        <MenuItem onClick={() => handleClassMenuClose("Lớp 10")}>Lớp 10</MenuItem>
                                        <MenuItem onClick={() => handleClassMenuClose("Lớp 11")}>Lớp 11</MenuItem>
                                        <MenuItem onClick={() => handleClassMenuClose("Lớp 12")}>Lớp 12</MenuItem>
                                    </Menu>
                                </TableCell>
                                <TableCell sx={{ fontSize: "20px", textAlign: "center" }}>
                                    <Box>
                                        {selectedSubjectOption}
                                        <ExpandMoreIcon onClick={handleSubjectIconClick} />
                                    </Box>
                                    <Menu
                                        anchorEl={subjectAnchorEl}
                                        open={Boolean(subjectAnchorEl)}
                                        onClose={handleSubjectMenuClose}
                                    >
                                        <MenuItem onClick={() => handleSubjectMenuClose("Tất cả")}>Tất cả</MenuItem>
                                        <MenuItem onClick={() => handleSubjectMenuClose("Toán")}>Toán</MenuItem>
                                        <MenuItem onClick={() => handleSubjectMenuClose("Lý")}>Lý</MenuItem>
                                        <MenuItem onClick={() => handleSubjectMenuClose("Hoá")}>Hoá</MenuItem>
                                    </Menu>
                                </TableCell>
                                <TableCell sx={{ fontSize: "20px", textAlign: "center" }}>Tên mô phỏng</TableCell>
                                <TableCell sx={{ fontSize: "20px", textAlign: "center" }}>Mô phỏng</TableCell>
                                <TableCell sx={{ fontSize: "20px", textAlign: "center" }}>
                                    <AddBoxIcon sx={{ fontSize: "25px" }} onClick={handleOpenModal} />
                                    <Modal
                                        open={openModal}
                                        onClick={handleOpenModal}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Box sx={{ backgroundColor: "#D9D9D9", width: "400px", height: "300px", borderRadius: "10px", border: '2px solid #000000', p: 2, }}>
                                            <Typography sx={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}>Thêm Mô Phỏng</Typography>
                                            <Typography sx={{ fontSize: "17px", display: "flex", justifyContent: "space-between", marginTop: "20px" }}>Tên mô phỏng:
                                                <TextField
                                                    InputProps={{
                                                        style: {
                                                            fontSize: "14px",
                                                            height: "28px",
                                                        },
                                                    }}
                                                />
                                            </Typography>
                                            <Typography sx={{ fontSize: "17px", display: "flex", justifyContent: "space-between", marginTop: "20px" }}>Lớp:
                                                <TextField
                                                    InputProps={{
                                                        style: {
                                                            fontSize: "14px",
                                                            height: "28px",
                                                        },
                                                    }}
                                                />
                                            </Typography>
                                            <Typography sx={{ fontSize: "17px", display: "flex", justifyContent: "space-between", marginTop: "20px" }}>Môn:
                                                <TextField
                                                    InputProps={{
                                                        style: {
                                                            fontSize: "14px",
                                                            height: "28px",
                                                        },
                                                    }}
                                                />
                                            </Typography>
                                            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} sx={{marginTop:"20px", fontSize:"20px", display:"flex", justifyContent:"center", alignItems:"center"}}>
                                                Upload file
                                                <VisuallyHiddenInput type="file" />
                                            </Button>
                                        </Box>
                                    </Modal>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}

export default SimulationManagement;