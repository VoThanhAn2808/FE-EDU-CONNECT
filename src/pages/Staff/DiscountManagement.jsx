import { Box, Button, Checkbox, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import axios from "axios";
// import { jwtDecode } from "jwt-decode";
import DiscountForCourse from "../../components/Staff/DiscountManagement/Discountforcourse";
import React, { useEffect, useState } from "react";
import CreateModal from "../../components/Staff/DiscountManagement/CreateModal";
import UpdateModal from "../../components/Staff/DiscountManagement/UpdateModal";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ListCourseByDiscout from "../../components/Staff/DiscountManagement/ListCourseByDiscount";

const useStyles = makeStyles(() => ({
    input: {
        width: '120px',
        marginRight: '10px',
        fontSize: '20px !important',
        fontFamily: 'caption !important'
    },
    // Add more custom classes if needed
}));


function DiscountManagement() {
    const [dataDicount, setDicount] = useState([]);
    // const [selectAll, setSelectAll] = useState(true);
    const [selectDiscountId, setSelectDiscoutId] = useState('');
    const [listDelete, setListDelete] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [openDiscount, setOpenDiscount] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);
    const [openCourse, setOpenCourse] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [title, setTitle] = useState('');
    const [dataToSend, setDataToSend] = useState({
        title: '',
        pageNo: '',
        // Add other key-value pairs as needed
    });
    const [checkAllList, setCheckAllList] = useState(false);

    useEffect(() => {
        axios.post('http://localhost:8081/discount/listdiscount', dataToSend)
            .then((response) => {
                setDicount(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [dataToSend]); //Thêm dependencies trống để chỉ gọi useEffect một lần sau componentDidMount


    const handleItemCheckboxChange = (event, itemId) => {
        if (checkAllList) {
            // If checkAllList is true, select/deselect the checkbox for the specific item
            setSelectedItems((prevSelectedItems) => {
                if (prevSelectedItems.includes(itemId)) {
                    // If item is already in selectedItems, remove it
                    return prevSelectedItems.filter((selectedItem) => selectedItem !== itemId);
                } else {
                    // If item is not in selectedItems, add it
                    return [...prevSelectedItems, itemId];
                }
            });
        } else {
            // If checkAllList is false, toggle the checkbox for the specific item
            setSelectedItems((prevSelectedItems) => {
                console.log("prevSelectedItems", prevSelectedItems);
                if (prevSelectedItems.includes(itemId)) {
                    // If item is already in selectedItems, remove it
                    return prevSelectedItems.filter((selectedItem) => selectedItem !== itemId);
                } else {
                    // If item is not in selectedItems, add it
                    const updatedSelectedItems = [...prevSelectedItems, itemId]; 
                    setListDelete(updatedSelectedItems);
                }
            });
        }
        // if (checked) {
        //     // If checked, add itemId to selectedItems and update listDelete
        //     setSelectedItems((prevSelectedItems) => {
        //         const updatedSelectedItems = [...prevSelectedItems, itemId];
        //         setListDelete(updatedSelectedItems);
        //         return updatedSelectedItems;
        //     });
        // } else {
        //     // If unchecked, remove itemId from selectedItems and update listDelete
        //     setSelectedItems((prevSelectedItems) => {
        //         const updatedSelectedItems = prevSelectedItems.filter((id) => id !== itemId);
        //         setListDelete(updatedSelectedItems);
        //         return updatedSelectedItems;
        //     });
        // }
        // console.log(selectedItems);
    };
    const onSelectAllClick = (event) => {
        // setSelectAll(event.target.checked);
        console.log("checked: ", event.target.checked);
        if (event.target.checked == true) {
            setCheckAllList(true);
        } else {
            setCheckAllList(false);
        }
        // const selected = event.target.checked ? (Array.isArray(dataDicount.listDiscount) ? (dataDicount.listDiscount).map((item) => item.discountid) : []) : [];
        // setSelectedItems(selected);
        // setListDelete(selected);

    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            // Handle Enter key press event
            // You can update the dataToSend object here
            setDataToSend({
                ...dataToSend,
                title: searchValue,
                // Update other keys as needed
            });

        }
    };
    const handleClickFind = (event) => {
        setDataToSend({
            ...dataToSend,
            title: searchValue,
            // Update other keys as needed
        });
    }

    const handleSearchInputChange = (event) => {
        // Update searchValue state as the TextField value changes
        setSearchValue(event.target.value);
    };

    const handleCellClick = (discountId) => {
        setSelectDiscoutId(discountId);
        setOpenUpdate(true);
    };

    const handleCoursellClick = (discountId, title) => {
        setSelectDiscoutId(discountId);
        setOpenCourse(true);
        setTitle(title);
    };

    const onDeleteRow = async (id) => {
        try {
            const response = await axios.post('http://localhost:8081/discount/deleteDiscount', listDelete);

            alert(response.data.message);
            setDicount((prevDataList) => prevDataList.filter((item) => item.discountid !== id));
        } catch (error) {
            console.error('Error deleting row:', error);
        }


    };
    const handleChangePage = (e, newPage) => {
        setCurrentPage(newPage);
        setDataToSend({
            ...dataToSend,
            pageNo: newPage,

        });
    }

    return (
        <Box style={{ width: '100%', padding: '20px' }}>
            <CreateModal isShowModal={open} setOpen={setOpen} />
            <DiscountForCourse isShowModal={openDiscount} setOpen={setOpenDiscount} />
            <UpdateModal selectDiscountId={selectDiscountId} isShowModal={openUpdate} setOpenUpdate={setOpenUpdate} />
            <ListCourseByDiscout selectDiscountId={selectDiscountId} isShowModal={openCourse} setOpen={setOpenCourse} title={title} />
            <Box style={{ display: 'inline-block', width: '100%' }}>
                <Box style={{ width: '100%', }}>
                    <Box style={{ marginBottom: "20px" }}>
                        <Typography variant="h3" style={{ fontFamily: "cursive", }}>
                            Mã giảm giá
                        </Typography>
                    </Box>
                    <Box style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }} className=''>
                        <Box style={{ minWidth: "360px", display: "flex", alignItems: "center" }} className=''>
                            <TextField id="outlined-basic" label="Tìm Kiếm Theo Tiêu Đề" variant="outlined" className={classes.input} value={searchValue}
                                size="small"
                                fullWidth
                                onChange={handleSearchInputChange}
                                onKeyDown={handleKeyPress}
                            />
                            <Button variant="outlined" type="secondary" style={{ marginLeft: '10px', fontSize: "10px", fontFamily: "cursive", minWidth: "100px" }} onClick={handleClickFind}>
                                Tìm kiếm
                            </Button>
                        </Box>
                        <Box>
                            <Button variant="contained" style={{ marginRight: '10px', fontSize: "10px", fontFamily: "cursive", }} onClick={setOpenDiscount}>
                                Thêm giảm giá cho môn
                            </Button>
                            <Button variant="contained" style={{ marginRight: '10px', fontSize: "10px", fontFamily: "cursive", }} onClick={setOpen}>
                                Thêm
                            </Button>
                            <Button variant="contained" style={{ marginRight: '10px', fontSize: "10px", fontFamily: "cursive", }} onClick={() => onDeleteRow()} >
                                Xóa
                            </Button>
                        </Box>


                    </Box>
                </Box>
                <Box style={{ display: 'inline-block', height: 200, width: '100%' }}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <Checkbox
                                            // checked={selectAll}
                                            onChange={onSelectAllClick}
                                            color="primary"
                                        />
                                    </TableCell>
                                    <TableCell style={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>Giảm Giá</TableCell>
                                    <TableCell style={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>Mô Tả</TableCell>
                                    <TableCell style={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>Hình Ảnh</TableCell>
                                    <TableCell style={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>Ngày Bắt Đầu</TableCell>
                                    <TableCell style={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>Ngày Kết Thúc</TableCell>
                                    <TableCell style={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>Tiêu Đề</TableCell>
                                    <TableCell style={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>Hành Động</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Array.isArray(dataDicount.listDiscount) ? (
                                    (dataDicount.listDiscount).map((item, index) => (
                                        <TableRow key={item.discountid}>
                                            <TableCell>
                                                <Checkbox
                                                    checked={checkAllList || selectedItems.includes(item.discountid)}
                                                    onChange={(event) => handleItemCheckboxChange(event, item.discountid)}
                                                    color="primary"
                                                />
                                            </TableCell>
                                            <TableCell onClick={() => handleCellClick(item.discountid)} style={{ fontSize: "10px", fontFamily: "cursive", textAlign: "center" }}>{item.discount}</TableCell>
                                            <TableCell onClick={() => handleCellClick(item.discountid)} style={{ fontSize: "10px", fontFamily: "cursive", textAlign: "center" }}>{item.desciption}</TableCell>
                                            <TableCell onClick={() => handleCellClick(item.discountid)} style={{ fontSize: "10px", fontFamily: "cursive", textAlign: "center", width: '18px' }}><img src={'http://localhost:8081/edu/file/files/' + item.img} alt={`Discount Image for ${item.title}`} style={{ maxWidth: '100%', maxHeight: '100%', }} /></TableCell>

                                            <TableCell onClick={() => handleCellClick(item.discountid)} style={{ fontSize: "10px", fontFamily: "cursive", textAlign: "center" }}>{item.startDate}</TableCell>
                                            <TableCell onClick={() => handleCellClick(item.discountid)} style={{ fontSize: "10px", fontFamily: "cursive", textAlign: "center" }}>{item.endDate}</TableCell>
                                            <TableCell onClick={() => handleCellClick(item.discountid)} style={{ fontSize: "10px", fontFamily: "cursive", textAlign: "center" }}>{item.title}</TableCell>
                                            <TableCell style={{ fontSize: "10px", fontFamily: "cursive" }}>
                                                <Button variant="contained" type="danger" style={{ marginRight: '10px', fontSize: "10px", fontFamily: "cursive", marginBottom: '10px' }} onClick={() => onDeleteRow(item.discountid)}>
                                                    Xoá
                                                </Button>
                                                <RemoveRedEyeIcon sx={{ fontSize: '22px', marginLeft: '10px' }} onClick={() => handleCoursellClick(item.discountid, item.title)} />
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell style={{ fontSize: "10px", fontFamily: "cursive", textAlign: "center" }} colSpan={8}>Không có dữ liệu </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: "15px" }}>
                    <Pagination count={dataDicount.pageCount} sx={{ '& .MuiPaginationItem-root': { fontSize: '15px', minWidth: '50px' } }} onChange={handleChangePage} page={currentPage} />
                </Box>
            </Box>
        </Box>
    );
}

export default DiscountManagement;