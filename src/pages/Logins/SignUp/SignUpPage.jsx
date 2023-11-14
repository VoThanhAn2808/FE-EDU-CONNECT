import { Box, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import LOGIN from '../../../assests/login.png';
import LOGO from '../../../assests/lglogin.jpg';
import Button from '@mui/joy/Button';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [age, setAge] = useState('');
  const [isStudent, setIsStudent] = useState(false); // Biến trạng thái cho lựa chọn Học sinh/Giáo viên
  const [isTeacher, setIsTeacher] = useState(false);
  const [selectedClass, setSelectedClass] = useState(''); // Biến trạng thái cho lựa chọn lớp
  const [files, setFiles] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8081/student/class`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('fullname', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('phone', phone);
      formData.append('role', age);
      formData.append('classentity', selectedClass ? selectedClass : 1);
      formData.append('file', files);

      const response = await axios.post(
        "http://localhost:8081/edu/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      window.location.href = "/login";
      console.log(response.data);
    } catch (error) {
      console.error(error);
      console.log(error.response.data);
    }
  };



  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setAge(event.target.value);
    setIsStudent(event.target.value === 1); // Kiểm tra lựa chọn là Học sinh
    setIsTeacher(event.target.value === 2);
  };

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleUploadFile = (event) => {
    const selectedFile = event.target.files[0];
    setFiles(selectedFile);
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
    <Box
      className='image-container'
      sx={{
        display: 'flex',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, #F9C01F, white)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50%',
        }}
      >
        <img
          src={LOGIN}
          alt='login'
          style={{
            height: '400px',
            width: '600px',
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '50%',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '45vw',
            backgroundColor: 'white',
            minHeight: '50vh',
            height: '90vh',
            borderRadius: '30px',
            padding: '50px',
            gap: '30px',
          }}
        >
          <img
            src={LOGO}
            alt='logo'
            style={{
              width: '350px',
              height: '100px',
            }}
          />
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                width: '100%',
                padding: '20px',
                fontSize: '13px'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <FormControl sx={{ mt: 1, width: '50ch' }} variant="outlined" size='large'>
                  <InputLabel htmlFor="Name" style={{ fontSize: 15 }}>Họ và tên</InputLabel>
                  <OutlinedInput
                    style={{ fontSize: '18px' }}
                    id="Name"
                    value={name}
                    label="Namee"
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <FormControl sx={{ width: '50ch' }} variant="outlined" size='large'>
                  <InputLabel htmlFor="Number" style={{ fontSize: 15 }}>Số điện thoại</InputLabel>
                  <OutlinedInput
                    style={{ fontSize: '18px' }}
                    id="Number"
                    value={phone}
                    label="Number"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <FormControl sx={{ width: '50ch' }} variant="outlined" size='large'>
                  <InputLabel htmlFor="Email" style={{ fontSize: 15 }}>Email</InputLabel>
                  <OutlinedInput
                    style={{ fontSize: '18px' }}
                    id="Email"
                    value={email}
                    label="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <FormControl sx={{ width: '50ch' }} variant="outlined" size='large'>
                  <InputLabel htmlFor="Age" style={{ fontSize: "15px" }}>Bạn là :</InputLabel>
                  <Select
                    value={age}
                    onChange={handleChange}
                    label="Ageee"
                    style={{ fontSize: 16 }}
                  >
                    <MenuItem value={1} sx={{ fontSize: "13px" }}>Học sinh</MenuItem>
                    <MenuItem value={2} sx={{ fontSize: "13px" }}>Giáo viên</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              {isStudent && (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <FormControl sx={{ width: '50ch' }} variant="outlined" size='large'>
                    <InputLabel htmlFor="Class" style={{ fontSize: 15 }}>Chọn lớp</InputLabel>
                    <Select
                      value={selectedClass}
                      onChange={handleClassChange}
                      label="Class" sx={{ fontSize: "15px" }}
                    >
                      {data.map((item, index) => (
                        <MenuItem key={index} value={item.classid} sx={{ fontSize: "15px" }}>
                          {item.className}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              )}
              {isTeacher && (
                <Button component="label" sx={{ fontSize: "18px" }}>
                  Upload file CV
                  <VisuallyHiddenInput type="file" onChange={handleUploadFile} />
                </Button>
              )}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <FormControl sx={{ width: '25ch' }} variant="outlined" size='large'>
                  <InputLabel htmlFor="Password" style={{ fontSize: 15 }}>Mật khẩu</InputLabel>
                  <OutlinedInput
                    style={{ fontSize: '18px' }}
                    id="Password"
                    type={showPassword ? 'text' : 'password'}
                    label="Mật khẩu"
                    value={password}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>

                <FormControl sx={{ width: '25ch' }} variant="outlined" size='large'>
                  <InputLabel htmlFor="password" style={{ fontSize: 15 }}>Nhập lại mật khẩu</InputLabel>
                  <OutlinedInput
                    style={{ fontSize: '18px' }}
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end" >
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          // onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}>
                <Button
                  sx={{
                    width: '250px',
                    height: '45px',
                    fontSize: '23px',
                    background: '#2D3748',
                    margin: "auto"
                  }}
                  type='submit'
                >
                  Đăng ký
                </Button>
                <Typography
                  sx={{
                    position: 'absolute',
                    marginTop: "60px",
                    fontSize: "18px",

                  }}
                >
                  Bạn đã có tài khoản, đăng nhập <Link to='/login' style={{ color: "blue", textDecoration: "none" }}>tại đây</Link>
                </Typography>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </Box >
  );
}

export default SignupPage;