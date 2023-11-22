import React, { useState, useEffect } from "react";
import { Box, Button, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, Checkbox, Grid, Container } from "@mui/material";
import { jwtDecode } from "jwt-decode";
import { makeStyles } from '@mui/styles';
import axios from "axios";

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

    const onclickButtonDelete = (event) => {

    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // Clear the form fields after submission if needed


    };

    return (
        <Box style={{ width: '100%', padding: '20px', minHeight: '200vh' }}>
            <Box style={{ display: 'inline-block', width: '100%' }}>
                <Box style={{ display: 'inline-block', width: '100%', }}>
                    <Box style={{ float: 'left' }}>
                        <Typography variant="h3" style={{ fontFamily: "cursive", }}>
                            Discount
                        </Typography>
                    </Box>
                    <Box style={{ display: 'flex', float: 'right', height: '25px' }} className=''>
                        <TextField id="outlined-basic" label="Search Title" variant="outlined" className={classes.input} value={searchValue}
                            onChange={handleSearchInputChange}
                            onKeyDown={handleKeyPress}
                        />
                        <Button variant="contained" style={{ marginRight: '10px', fontSize: "10px", fontFamily: "cursive", }}>
                            Thêm
                        </Button>
                        <Button variant="contained" style={{ fontSize: "10px", fontFamily: "cursive", }} onClick={onclickButtonDelete}>
                            Xóa
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
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={7}>No data available</TableCell>
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
            <Container maxWidth="md" style={{ marginTop: '10px', border: '1px solid', padding: '10px' }}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid style={{ float: 'left' }}>
                            <Typography variant="h3" style={{ fontFamily: "cursive", }}>
                                Thêm Mã Giảm Giá
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Discount"
                                variant="outlined"
                                // value={discount}
                                // onChange={(e) => setDiscount(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Description"
                                variant="outlined"
                                // value={discount}
                                // onChange={(e) => setDiscount(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Image"
                                variant="outlined"
                                // value={discount}
                                // onChange={(e) => setDiscount(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Discount"
                                variant="outlined"
                                // value={discount}
                                // onChange={(e) => setDiscount(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Discount"
                                variant="outlined"
                                // value={discount}
                                // onChange={(e) => setDiscount(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Title"
                                variant="outlined"
                                multiline
                                rows={4}
                                // value={description}
                                // onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary" style={{ float: 'right' }}>
                               Lưu
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </Box>
    );
}

export default DiscountManagement;