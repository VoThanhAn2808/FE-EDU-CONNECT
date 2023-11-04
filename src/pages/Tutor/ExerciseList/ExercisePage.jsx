import { Box, TextField, Typography } from "@mui/material";
import * as React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import { Button } from "@mui/base";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';


function ExerciseListPage() {
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [open5, setOpen5] = React.useState(false);
    const [open6, setOpen6] = React.useState(false);
    const [open7, setOpen7] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
    const handleOpen4 = () => setOpen4(true);
    const handleClose4 = () => setOpen4(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);
    const handleOpen5 = () => setOpen5(true);
    const handleClose5 = () => setOpen5(false);
    const handleOpen6 = () => setOpen6(true);
    const handleClose6 = () => setOpen6(false);
    const handleOpen7 = () => setOpen7(true);
    const handleClose7 = () => setOpen7(false);
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
    const styles = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 350,
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
                <Box sx={{ height: "100%", borderRadius: "5px", backgroundColor: "#BFBDBD", marginTop: "1%" }} >
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
                            <MenuItem onClick={handleOpen4}>Thêm tập tin</MenuItem>
                            <MenuItem onClick={handleOpen2}>Thêm video</MenuItem>
                            <MenuItem onClick={handleOpen3}>Thêm bài kiểm tra tiến độ</MenuItem>
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
                    <Modal
                        open={open2}
                        onClose={handleClose2}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={styles}>
                            <Typography id="modal-modal-title" component="h2" sx={{ marginTop: '-80px', width: '250px', fontSize: '15px', fontFamily: 'cursive' }}>
                                Thêm Video
                            </Typography>
                            <TextField label='Tên Video'
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
                            <TextField label='Link Video'
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
                    <Modal
                        open={open3}
                        onClose={handleClose3}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={styles}>
                            <Typography id="modal-modal-title" component="h2" sx={{ marginTop: '-80px', width: '250px', fontSize: '15px', fontFamily: 'cursive' }}>
                                Thêm bài kiểm tra
                            </Typography>
                            <TextField label='Tên bài kiểm tra'
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
                            <TextField label='Link bài kiểm tra'
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
                    <Modal
                        open={open4}
                        onClose={handleClose4}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={styles}>
                            <Typography id="modal-modal-title" component="h2" sx={{ marginTop: '-80px', width: '250px', fontSize: '15px', fontFamily: 'cursive' }}>
                                Thêm tập tin
                            </Typography>
                            <TextField label='Tên bài tập tin'
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
                            <TextField label='Tập tin'
                                type="file"
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
                        <InsertDriveFileIcon sx={{ fontSize: "25px", marginLeft: "4%" }} />
                        <Typography sx={{ fontSize: "25px", marginLeft: "1%" }}> Tên File</Typography>
                        <UpdateIcon sx={{ fontSize: "25px", marginLeft: "auto" }} onClick={handleOpen5} />
                        <DeleteIcon sx={{ fontSize: "25px", marginLeft: "2%", marginRight: '40px' }} />
                    </Box>
                    <Modal
                        open={open5}
                        onClose={handleClose5}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={styles}>
                            <Typography id="modal-modal-title" component="h2" sx={{ marginTop: '-80px', width: '250px', fontSize: '15px', fontFamily: 'cursive' }}>
                                Cập nhật tập tin
                            </Typography>
                            <TextField label='Tên bài tập tin'
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
                            <TextField label='Tập tin'
                                type="file"
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
                        <PersonalVideoIcon sx={{ fontSize: "25px", marginLeft: "4%" }} />
                        <Typography sx={{ fontSize: "25px", marginLeft: "1%" }}> Tên Video</Typography>
                        <UpdateIcon sx={{ fontSize: "25px", marginLeft: "auto" }} onClick={handleOpen6}/>
                        <DeleteIcon sx={{ fontSize: "25px", marginLeft: "2%", marginRight: '40px' }} />
                    </Box>
                    <Modal
                        open={open6}
                        onClose={handleClose6}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={styles}>
                            <Typography id="modal-modal-title" component="h2" sx={{ marginTop: '-80px', width: '250px', fontSize: '15px', fontFamily: 'cursive' }}>
                                Cập nhật Video
                            </Typography>
                            <TextField label='Tên Video'
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
                            <TextField label='Link Video'
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
                        <Typography sx={{ fontSize: "25px", marginLeft: "1%" }}> Tên ClassRoom</Typography>
                        <UpdateIcon sx={{ fontSize: "25px", marginLeft: "auto" }} onClick={handleOpen7}/>
                        <DeleteIcon sx={{ fontSize: "25px", marginLeft: "2%", marginRight: '40px' }} />
                    </Box>
                    <Modal
                        open={open7}
                        onClose={handleClose7}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={styles}>
                            <Typography id="modal-modal-title" component="h2" sx={{ marginTop: '-80px', width: '250px', fontSize: '15px', fontFamily: 'cursive' }}>
                                Cập nhật bài kiểm tra
                            </Typography>
                            <TextField label='Tên bài kiểm tra'
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
                            <TextField label='Link bài kiểm tra'
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
                        <HomeWorkIcon sx={{ fontSize: "25px", marginLeft: "4%" }} />
                        <Typography sx={{ fontSize: "25px", marginLeft: "1%" }}> Tên Homework</Typography>
                        <UpdateIcon sx={{ fontSize: "25px", marginLeft: "auto" }} />
                        <DeleteIcon sx={{ fontSize: "25px", marginLeft: "2%", marginRight: '40px' }} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default ExerciseListPage;