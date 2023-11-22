import { Box, Button, Checkbox, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import CreateModal from "../../components/Staff/DiscountManagement/CreateModal";

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
    const decodedToken = jwtDecode(localStorage.getItem('token'));
    const [dataDicount, setDicount] = useState([]);
    const [selectAll, setSelectAll] = useState(true);
    const [selectedItems, setSelectedItems] = useState([]);
    const classes = useStyles();
    const [searchValue, setSearchValue] = useState('');
    const [dataToSend, setDataToSend] = useState({
        title: '',
        pageNo: '',
        // Add other key-value pairs as needed
    });
    const [open, setOpen] = useState(false);

    useEffect(() => {
        axios.post('http://localhost:8081/discount/listdiscount', dataToSend)
            .then((response) => {
                setDicount(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [dataToSend]); //Thêm dependencies trống để chỉ gọi useEffect một lần sau componentDidMount


    const handleItemCheckboxChange = (event, itemId) => {
        const checked = event.target.checked;
        if (checked) {
            setSelectedItems([...selectedItems, itemId]);
        } else {
            setSelectedItems(selectedItems.filter((id) => id !== itemId));
        }
        console.log(selectedItems);
    };
    const onSelectAllClick = (event) => {
        setSelectAll(event.target.checked);
        const selected = event.target.checked ? (Array.isArray(dataDicount.listDiscount) ? dataDicount.map((item) => item.discountid) : []) : [];
        setSelectedItems(selected);

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
    const handleSearchInputChange = (event) => {
        // Update searchValue state as the TextField value changes
        setSearchValue(event.target.value);
    };

    const onDeleteRow = (id) => {
        let rowIndex = dataDicount?.listDiscount?.findIndex((item, i) => {
            return item.discountid === id
        })
        dataDicount?.listDiscount.splace(rowIndex, 1) // remove item in UI
        // Add function handle call api delete here
        //
    }

    return (
        <Box style={{ width: '100%', padding: '20px' }}>
            <CreateModal isShowModal={open} setOpen={setOpen} />
            <Box style={{ display: 'inline-block', width: '100%' }}>
                <Box style={{ width: '100%', }}>
                    <Box style={{ marginBottom: "20px"}}>
                        <Typography variant="h3" style={{ fontFamily: "cursive", }}>
                            Discount
                        </Typography>
                    </Box>
                    <Box style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }} className=''>
                        <Box style={{ minWidth: "360px", display: "flex", alignItems: "center"}} className=''>
                            <TextField id="outlined-basic" label="Search Title" variant="outlined" className={classes.input} value={searchValue}
                                size="small"
                                fullWidth
                                onChange={handleSearchInputChange}
                                onKeyDown={handleKeyPress}
                            />
                            <Button variant="outlined" type="secondary" style={{ marginLeft: '10px', fontSize: "10px", fontFamily: "cursive", minWidth: "100px" }}>
                                Tìm kiếm
                            </Button>
                        </Box>
                        <Button variant="contained" style={{ marginRight: '10px', fontSize: "10px", fontFamily: "cursive", }} onClick={setOpen}>
                            Thêm
                        </Button>
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
                                    <TableCell style={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>Discount</TableCell>
                                    <TableCell style={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>Description</TableCell>
                                    <TableCell style={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>Image</TableCell>
                                    <TableCell style={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>Start Date</TableCell>
                                    <TableCell style={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>End Date</TableCell>
                                    <TableCell style={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>Title</TableCell>
                                    <TableCell style={{ fontSize: "15px", fontFamily: "cursive", textAlign: "center" }}>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Array.isArray(dataDicount.listDiscount) ? (
                                    (dataDicount.listDiscount).map((item, index) => (
                                        <TableRow key={item.discountid}>
                                            <TableCell>
                                                <Checkbox
                                                    checked={selectedItems.includes(item.discountid)}
                                                    onChange={(event) => handleItemCheckboxChange(event, item.discountid)}
                                                    color="primary"
                                                />
                                            </TableCell>
                                            <TableCell style={{ fontSize: "10px", fontFamily: "cursive", textAlign: "center" }}>{item.discount}</TableCell>
                                            <TableCell style={{ fontSize: "10px", fontFamily: "cursive", textAlign: "center" }}>{item.desciption}</TableCell>
                                            <TableCell style={{ fontSize: "10px", fontFamily: "cursive", textAlign: "center" }}>{item.img}</TableCell>
                                            <TableCell style={{ fontSize: "10px", fontFamily: "cursive", textAlign: "center" }}>{item.startDate}</TableCell>
                                            <TableCell style={{ fontSize: "10px", fontFamily: "cursive", textAlign: "center" }}>{item.endDate}</TableCell>
                                            <TableCell style={{ fontSize: "10px", fontFamily: "cursive", textAlign: "center" }}>{item.title}</TableCell>
                                            <TableCell style={{ fontSize: "10px", fontFamily: "cursive", textAlign: "center" }}>
                                            <Button variant="contained" type="danger" style={{ marginRight: '10px', fontSize: "10px", fontFamily: "cursive", }} onClick={() => onDeleteRow(item.discountid)}>
                                                Xoá
                                            </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell style={{ fontSize: "10px", fontFamily: "cursive", textAlign: "center" }} colSpan={8}>No data available</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: "15px" }}>
                    <Pagination count={dataDicount.pageCount} sx={{ '& .MuiPaginationItem-root': { fontSize: '15px', minWidth: '50px' } }} />
                </Box>
            </Box>
        </Box>
    );
}

export default DiscountManagement;