import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Box,
  Typography,
} from '@mui/material';

import { useParams } from 'react-router';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import * as React from 'react';
import { useState, useEffect } from 'react';
import HomeworkTable from './HomeworkTable';
function ExerciseDetailPage() {
  const [open, setOpen] = useState(false);

  const [homework, setHomework] = useState([]);
  const [files, setFiles] = useState([]);
  const [videos, setVideos] = useState([]);
  const [demo, setDemo] = useState([]);
  const [generalData, setGeneralData] = useState({});
  const params = useParams();
  const fetchHomework = () => {
    axios
      .get(`http://localhost:8081/exersice/getHomeworkByExercise?exerciseId=${params.exerciseid}`)
      .then((response) => {
        if (response && response.data) {
          setHomework(response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching timeline:', error);
      });
  };
  const fetchDemo = () => {
    axios
      .get(`http://localhost:8081/demo/listAllDemo`)
      .then((response) => {
        if (response && response.data) {
          setDemo(response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching timeline:', error);
      });
  };
  const fetchData = () => {
    axios
      .get(`http://localhost:8081/exersice/getExerciseById/${params.exerciseid}`)
      .then((response) => {
        if (response && response.data) {
          setGeneralData(response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching timeline:', error);
      });
  };

  useEffect(() => {
    setFormData({
      title: '',
      file: '',
      demoid: '',
      startDate: '',
      endDate: '',
    });
    setErrors({
      title: '',
      file: '',
      demoid: '',
      startDate: '',
      endDate: '',
    });
  }, [open]);
  
  useEffect(() => {
    fetchData();
    fetchHomework();
    fetchDemo();
  }, []);

  const [formData, setFormData] = useState({
    title: '',
    file: '',
    demoid: '',
    startDate: '',
    endDate: '',
  });

  const [errors, setErrors] = useState({
    title: '',
    file: '',
    demoid: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'file' ? files[0] : value,
    }));
    // Xóa thông báo lỗi khi người dùng bắt đầu nhập lại dữ liệu
    if (name !== 'file')
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra xem các trường có giá trị null không
    let hasError = false;
    const newErrors = {};

    for (const key in formData) {
      if (key !== 'file')
        if (formData[key] === null || formData[key] === '') {
          newErrors[key] = `Vui lòng nhập giá trị cho trường ${key}`;
          hasError = true;
        }
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }
    try {
      await axios.post(
        'http://localhost:8081/exersice/addhomework2',
          // (!!formData.file ? '?file=' + formData.file : ''),
        { exerciseid: params.exerciseid, ...formData },
      );
    } catch (error) {
      console.log(error);
    }
    setOpen(false);
    fetchData();
    // Handle form submission logic here
  };
  return (
    <Box
      sx={{
        height: '100%',
        padding: '10px',
      }}
    >
      <Box
        sx={{
          borderRadius: '5px',
          marginBottom: '10px',
          backgroundColor: '#E2D6D6',
        }}
      >
        <Typography
          sx={{
            fontSize: '40px',
            marginLeft: '2%',
            fontFamily: 'cursive',
            paddingBottom: '20px',
          }}
        >
          {generalData.title}
        </Typography>
      </Box>
      <Box sx={{ padding: '10px', border: '1px solid gray' }}>
        <Box sx={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
          <Typography
            sx={{
              fontSize: '20px',
              marginRight: '20px',
              fontFamily: 'cursive',
            }}
          >
            Bài tập về nhà
          </Typography>
          <Button
            type='button'
            variant='contained'
            color='success'
            sx={{ marginRight: '10px' }}
            onClick={() => setOpen(true)}
          >
            Thêm bài tập về nhà
          </Button>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              style={{
                backgroundColor: '#fff',
                height: 'fit-content',
                minWidth: '400px',
                width: '50%',
                padding: 30,
                borderRadius: 10,
              }}
            >
              <Typography
                sx={{
                  fontSize: '20px',
                  marginRight: '20px',
                  fontFamily: 'cursive',
                  marginBottom: 2,
                }}
              >
                Thêm bài tập về nhà
              </Typography>
              <form
                onSubmit={handleSubmit}
                style={{
                  fontSize: '16px',
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label='Tiêu đề'
                      variant='outlined'
                      fullWidth
                      name='title'
                      value={formData.title}
                      error={!!errors.title}
                      helperText={errors.title}
                      InputLabelProps={{
                        style: {
                          fontSize: '14px',
                        },
                      }}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant='contained' component='label'>
                      Upload File
                      <input
                        type='file'
                        name='file'
                        hidden
                        accept='.doc, .docx, .xls, .xlsx, .txt, .ppt, .pptx, application/msword, image/*, video/*'
                        onChange={handleChange}
                      />
                    </Button>
                    <Typography
                      style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        fontSize: '14px',
                        marginTop: '10px',
                      }}
                    >
                      {formData.file?.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth variant='outlined'>
                      <InputLabel style={{ fontSize: '14px' }}>Chọn mô phỏng</InputLabel>
                      <Select
                        name='demoid'
                        value={formData.demoid}
                        error={!!errors.demoid}
                        helperText={errors.demoid}
                        onChange={handleChange}
                      >
                        {demo.map((item) => (
                          <MenuItem
                            value={item.demoid}
                            key={item.demoid}
                            style={{ fontSize: '14px' }}
                          >
                            <img
                              src={item.img}
                              alt='demo'
                              style={{
                                width: 100,
                                height: 40,
                                objectFit: 'contain',
                                marginRight: '10px',
                              }}
                            />
                            {item.demoname}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label='Chọn ngày bắt đầu'
                      type='date'
                      variant='outlined'
                      fullWidth
                      error={!!errors.startDate}
                      InputLabelProps={{
                        shrink: true,
                        style: {
                          fontSize: '14px',
                        },
                      }}
                      name='startDate'
                      helperText={errors.startDate}
                      value={formData.startDate}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label='Chọn ngày kết thúc'
                      type='date'
                      variant='outlined'
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                        style: {
                          fontSize: '14px',
                        },
                      }}
                      name='endDate'
                      error={!!errors.endDate}
                      helperText={errors.endDate}
                      value={formData.endDate}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{ display: 'flex', justifyContent: 'flex-end', fontSize: '16px' }}
                  >
                    <Button type='submit' variant='contained' color='primary' size='large'>
                      Thêm
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Modal>
        </Box>
        <HomeworkTable data={homework} fetchData={fetchHomework} />
      </Box>
      <Box sx={{ padding: '10px', border: '1px solid gray' }}>
        <Box sx={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
          <Typography
            sx={{
              fontSize: '20px',
              marginRight: '20px',
              fontFamily: 'cursive',
            }}
          >
            Videos
          </Typography>
          <Button type='button' variant='contained' color='success' sx={{ marginRight: '10px' }}>
            Thêm Videos
          </Button>
        </Box>
        <HomeworkTable data={files} fetchData={fetchData} />
      </Box>
      <Box sx={{ padding: '10px', border: '1px solid gray' }}>
        <Box sx={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
          <Typography
            sx={{
              fontSize: '20px',
              marginRight: '20px',
              fontFamily: 'cursive',
            }}
          >
            Files
          </Typography>
          <Button type='button' variant='contained' color='success' sx={{ marginRight: '10px' }}>
            Thêm Files
          </Button>
        </Box>
        <HomeworkTable data={videos} fetchData={fetchData} />
      </Box>
    </Box>
  );
}

export default ExerciseDetailPage;
