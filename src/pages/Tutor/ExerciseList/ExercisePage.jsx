import { Box, TextField, Typography } from "@mui/material";
import * as React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import { Button } from "@mui/base";


function ExerciseListPage() {
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 200,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        padding: 16,
    };
    return (
        <Box sx={{
            height: '100%',
        }}>
            <Box sx={{ width: '98%', height: "130px", marginTop: "90px", borderRadius: "5px", marginLeft: "1%", marginRight: "1%", backgroundColor: "#E2D6D6" }}>
                <Box sx={{ display: 'flex' }}>
                    <Typography sx={{ fontSize: "40px", marginLeft: "2%", fontFamily: "cursive", paddingBottom: "20px" }}>Tên Học sinh - Tên môn</Typography>
                    <CreateNewFolderIcon onClick={handleOpen} sx={{ fontSize: '30px', marginLeft: 'auto', marginRight: '30px', marginTop: '20px' }} />
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" component="h2" sx={{ marginTop: '-80px', width: '250px', fontSize: '15px', fontFamily: 'cursive' }}>
                                Thêm mới chương
                            </Typography>
                            <TextField label='Tên Chương'
                                InputLabelProps={{
                                    style: {
                                        fontSize: '12px',
                                        color: 'rgba(0, 0, 0, 0.54)',
                                    },
                                }}
                                sx={{
                                    borderRadius: '11%',
                                    width: '200px',
                                    marginLeft: '-30px',
                                    marginTop: '40px'
                                }}
                                InputProps={{
                                    style: {
                                        fontSize: '14px',
                                        height: '45px'
                                    },
                                }} />
                            <Button variant="contained" style={{ width: '70px', fontSize: '18px', marginTop: '30px', marginLeft: '20%' }}>Lưu</Button>
                        </Box>
                    </Modal>
                </Box>
                <Typography sx={{ fontSize: "25px", marginLeft: "2%", fontFamily: "cursive" }}>Tab chính/Môn/Học Sinh</Typography>
            </Box>
            <Box sx={{ border: '1px solid #ccc', p: 2, marginLeft: "1%", marginRight: "1%", marginBottom: '50px' }} >
                <Box sx={{ height: "185px", borderRadius: "5px", backgroundColor: "#BFBDBD", marginTop: "1%" }} >
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ fontSize: "35px", fontFamily: "cursive", marginLeft: "2%", paddingTop: "1%" }}>Tên chương</Typography>
                        <MoreHorizIcon sx={{ fontSize: '40px', marginLeft: 'auto', marginRight: '20px' }}
                            onClick={handleOpenUserMenu}
                        />
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
                            <MenuItem onClick={handleCloseUserMenu}>Thêm tập tin</MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>Thêm video</MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>Thêm bài kiểm tra tiến độ</MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>Thêm bài tập về nhà</MenuItem>
                            <MenuItem onClick={handleOpen1}>Cập nhật chương</MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>Xóa chương</MenuItem>
                        </Menu>
                    </Box>
                    <Modal
                        open={open1}
                        onClose={handleClose1}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" component="h2" sx={{ marginTop: '-80px', width: '250px', fontSize: '15px', fontFamily: 'cursive' }}>
                                Cập nhật chương
                            </Typography>
                            <TextField label='Tên Chương'
                                InputLabelProps={{
                                    style: {
                                        fontSize: '12px',
                                        color: 'rgba(0, 0, 0, 0.54)',
                                    },
                                }}
                                sx={{
                                    borderRadius: '11%',
                                    width: '200px',
                                    marginLeft: '-30px',
                                    marginTop: '40px'
                                }}
                                InputProps={{
                                    style: {
                                        fontSize: '14px',
                                        height: '45px'
                                    },
                                }} />
                            <Button variant="contained" style={{ width: '70px', fontSize: '18px', marginTop: '30px', marginLeft: '20%' }}>Lưu</Button>
                        </Box>
                    </Modal>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <SchoolIcon sx={{ fontSize: "25px", marginLeft: "4%" }} />
                        <Typography sx={{ fontSize: "25px", marginLeft: "1%" }}> Tên bài học</Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <SchoolIcon sx={{ fontSize: "25px", marginLeft: "4%" }} />
                        <Typography sx={{ fontSize: "25px", marginLeft: "1%" }}> Tên bài học</Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <SchoolIcon sx={{ fontSize: "25px", marginLeft: "4%" }} />
                        <Typography sx={{ fontSize: "25px", marginLeft: "1%" }}> Tên bài học</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default ExerciseListPage;