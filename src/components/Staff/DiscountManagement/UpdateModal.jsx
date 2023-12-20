import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Container, Grid, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import dayjs from 'dayjs';
import { format } from "date-fns";
import ClearIcon from '@mui/icons-material/Clear';
import InputAdornment from '@mui/material/InputAdornment';
import { Snackbar, Alert } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

export default function UpdateModal(props) {
  const decodedToken = jwtDecode(localStorage.getItem('token'));
  const [dataDetailDiscount, setDataDetailDiscount] = useState({});
  const { isShowModal, setOpenUpdate, selectDiscountId } = props;
  const [image, setImage] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [dataToSend, setDataToSend] = useState({
    discountId: selectDiscountId
  });
  const handleClose = () => setOpenUpdate(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarType, setSnackbarType] = useState('success');

  const showSnackbar = (message, type) => {
    setSnackbarMessage(message);
    setSnackbarType(type);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  useEffect(() => {
    setDataToSend(prevData => ({
      ...prevData,
      discountId: selectDiscountId
    }));
  }, [selectDiscountId]);



  useEffect(() => {
    axios.post('http://localhost:8081/discount/detailDiscount', dataToSend)
      .then((response) => {
        setDataDetailDiscount(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dataToSend]);

  useEffect(() => {
    const filename = dataDetailDiscount.img;
    axios.get(`http://localhost:8081/edu/file/files/${filename}`, {
      responseType: 'blob',  // Important: Set the response type to 'blob'
    })
      .then((response) => {
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dataDetailDiscount]);


  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      // Define the allowed file types
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/svg+xml'];

      // Check if the selected file type is in the allowed types
      if (!allowedTypes.includes(selectedImage.type)) {
        showSnackbar("Làm ơn chọn file theo định dạng (JPG, JPEG, GIF, PNG, SVG)! ", "warning");
        // Clear the input if an invalid file is selected
        e.target.value = null;
        return;
      }

      // Set the file to state if needed
      setImage(selectedImage);
    }

  };

  const handleSubmit = async (event) => {

    event.preventDefault(); // Clear the form fields after submission if needed
    const btnFileElement = document.getElementById("grdImage");
    const grdImageDisplayStyle = window.getComputedStyle(btnFileElement).display;


    const formData = new FormData();
    if (grdImageDisplayStyle === "none") { // input image hide
      if (image == null) {
        showSnackbar("Chọn file để lưu!", "warning");
        return;
      }
      else {
        formData.append('file', image)
        const checkstartdate = startDate ? startDate : dataDetailDiscount.startDate
        const formatstartDate = format(new Date(checkstartdate), 'yyyy-MM-dd');
        const checkenddate = endDate ? endDate : dataDetailDiscount.endDate
        const formatendDate = format(new Date(checkenddate), 'yyyy-MM-dd');
        if (formatstartDate > formatendDate) {
          showSnackbar("Chọn ngày kết thúc lớn hơn ngày bắt đầu!", "warning");
          return;
        }
        const myObject = {
          discountid: dataDetailDiscount.discountid,
          discount: dataDetailDiscount.discount,
          img: image.name,
          startDate: formatstartDate,
          endDate: formatendDate,
          title: dataDetailDiscount.title,
          desciption: dataDetailDiscount.description,
          staffid: decodedToken.id,
        };
        try {
          //Upload image
          const responseUploadImage = await axios.post('http://localhost:8081/edu/file/upload/discount', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          if (responseUploadImage.data.message === -1) {
            showSnackbar("Tệp tin bị trùng vui lòng chọn tệp hình ảnh khác!", "warning");
          } else if (responseUploadImage.data.message === 0) {
            showSnackbar("Hệ thống lỗi.Liên hệ với admin để giải quyết!", "error");
          }
          else if (responseUploadImage.status === 200) {
            const response = await axios.put(`http://localhost:8081/staffsconnect/discount/updateDiscount/${decodedToken.id}`, myObject);
            if (response.data === 1) {
              showSnackbar("Lưu thành công", "success");
            }
            handleClose();
            window.location.reload();
          }
          // onSubmit(myObject);
        } catch (error) {
          showSnackbar("Hệ thống lỗi.Liên hệ với admin để giải quyết!", "error");
          await axios.delete(`http://localhost:8081/edu/file/deleteFile/discount/${image.name}`);
        }
      }
    } else {
      const checkstartdate = startDate ? startDate : dataDetailDiscount.startDate
      const formatstartDate = format(new Date(checkstartdate), 'yyyy-MM-dd');
      const checkenddate = endDate ? endDate : dataDetailDiscount.endDate
      const formatendDate = format(new Date(checkenddate), 'yyyy-MM-dd');
      if (formatstartDate > formatendDate) {
        showSnackbar("Chọn ngày kết thúc lớn hơn ngày bắt đầu!", "warning");
        return;
      }
      const myObject = {
        discountid: dataDetailDiscount.discountid,
        discount: dataDetailDiscount.discount,
        startDate: formatstartDate,
        endDate: formatendDate,
        title: dataDetailDiscount.title,
        desciption: dataDetailDiscount.description,
        staffid: decodedToken.id,
      };
      try {
        const response = await axios.put(`http://localhost:8081/staffsconnect/discount/updateDiscount/${decodedToken.id}`, myObject);
        if (response.data === 1) {
          showSnackbar("Cập nhập thành công", "success");
        }
        handleClose();
        window.location.reload();
      }
      // onSubmit(myObject);
      catch (error) {
        showSnackbar("Hệ thống lỗi.Liên hệ với admin để giải quyết!", "error");
        await axios.delete(`http://localhost:8081/edu/file/deleteFile/discount/${image.name}`);
      }
    }
  };

  const handleStartDateChange = (e) => {
    setStartDate(e);
  };
  const handleEndDateChange = (e) => {
    setEndDate(e);
  };

  const handleClearClick = () => {
    const inputImage = document.getElementById("grdImage");
    const buttonFile = document.getElementById("btnFile");
    buttonFile.style.display = "block";
    inputImage.style.display = "none";

  };

  return (


    <Modal
      open={!!isShowModal}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Container maxWidth='lg' style={{ marginTop: '10px', padding: '10px' }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid style={{ float: 'left' }}>
                <Typography variant='h3' style={{ fontFamily: 'cursive' }}>
                  Cập Nhập Mã Giảm Giá
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="discount"
                  fullWidth
                  label='Giảm Giá'
                  variant='outlined'
                  style={{ fontSize: '15px', fontFamily: 'cursive', textAlign: 'center' }}
                  value={dataDetailDiscount.discount}
                  onChange={(e) => setDataDetailDiscount({ ...dataDetailDiscount, discount: e.target.value })}
                  required
                  InputLabelProps={{
                    shrink: String(dataDetailDiscount.discount).trim() !== "" // Shrink khi giá trị không rỗng
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="title"
                  fullWidth
                  label='Tiêu Đề'
                  variant='outlined'
                  sx={{ fontSize: '15px', fontFamily: 'cursive', textAlign: 'center' }}
                  value={dataDetailDiscount.title}
                  onChange={(e) => setDataDetailDiscount({ ...dataDetailDiscount, title: e.target.value })}
                  required
                  InputLabelProps={{
                    shrink: String(dataDetailDiscount.title).trim() !== "" // Shrink khi giá trị không rỗng
                  }}
                />
              </Grid>
              <Grid item xs={12} id="grdImage">
                <TextField
                  id="image"
                  fullWidth
                  label='Hình Ảnh'
                  variant='outlined'
                  sx={{ fontSize: '15px', fontFamily: 'cursive', textAlign: 'center' }}
                  value={dataDetailDiscount.img}
                  onChange={(e) => setDataDetailDiscount({ ...dataDetailDiscount, title: e.target.value })}
                  required
                  InputLabelProps={{
                    shrink: String(dataDetailDiscount.img).trim() !== "" // Shrink khi giá trị không rỗng
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {dataDetailDiscount.img && (
                          <ClearIcon
                            style={{ cursor: 'pointer' }}
                            onClick={handleClearClick}
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} id="btnFile" style={{ display: "none" }}>
                <TextField
                  accept="image/*"
                  fullWidth
                  variant='outlined'
                  style={{ fontSize: '15px', fontFamily: 'cursive', textAlign: 'center' }}
                  type="file"
                  id="contained-button-file"
                  // value={dataDetailDiscount.img}
                  onChange={handleImageChange}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    id="startDate"
                    label='Ngày Bắt Đầu'
                    fullWidth
                    value={dayjs(dataDetailDiscount.startDate)}
                    onChange={handleStartDateChange}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs} style={{ width: '100%' }}>
                  <DatePicker
                    id="endDate"
                    label='Ngày Kết Thúc'
                    fullWidth
                    value={dayjs(dataDetailDiscount.endDate)}
                    onChange={handleEndDateChange}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="description"
                  fullWidth
                  label='Mô Tả'
                  variant='outlined'
                  multiline
                  rows={4}
                  style={{ fontSize: '15px', fontFamily: 'cursive', textAlign: 'center' }}
                  value={dataDetailDiscount.desciption}
                  onChange={(e) => setDataDetailDiscount({ ...dataDetailDiscount, desciption: e.target.value })}
                  required
                  InputLabelProps={{
                    shrink: String(dataDetailDiscount.desciption).trim() !== "" // Shrink khi giá trị không rỗng
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  size='large'
                  style={{ float: 'right' }}
                  onClick={handleSubmit}
                >
                  Lưu
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MuiAlert
            onClose={handleSnackbarClose}
            severity={snackbarType}
            sx={{ width: '100%', fontSize: '15px' }}
          >
            {snackbarMessage}
          </MuiAlert>
        </Snackbar>
      </Box>
    </Modal>
  );
}
