import { Box, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';
import React from 'react';
import LOGIN from '../../../assests/login.png';
import LOGO from '../../../assests/lglogin.jpg';
import Button from '@mui/joy/Button';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function SignupPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
                  label="Name"
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
                  label="Number"
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
                  label="Email"
                />
              </FormControl>
            </Box>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                gap: '10px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >

                <FormControl sx={{ width: '24ch' }} variant="outlined" size='large'>
                  <InputLabel htmlFor="password" style={{ fontSize: 15 }}>Mật khẩu</InputLabel>
                  <OutlinedInput
                    style={{ fontSize: '18px' }}
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end" >
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
                    label="Password"
                  />
                </FormControl>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >

                <FormControl sx={{ width: '24ch' }} variant="outlined" size='large'>
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
            </Box>
            <Box>
              <FormControl sx={{ width: "50ch" }} variant='outlined'>
              <InputLabel htmlFor="text" style={{ fontSize: 15 }}>Bạn là gì :</InputLabel>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  style={{ fontSize: 16 }}
                >
                  <MenuItem value={10} style={{ fontSize: 16 }}>Học sinh</MenuItem>
                  <MenuItem value={20} style={{ fontSize: 16 }}>Giáo viên </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          <Button
            sx={{
              width: '250px',
              height: '45px',
              fontSize: '23px',
              background: '#2D3748'
            }}
          >
            Đăng ký
          </Button>
        </Box>
        <Typography
          sx={{
            position: 'absolute',
            bottom: '15px',
            fontSize: "18px"
          }}
        >
          Bạn đã có tài khoản, đăng nhập <Link to='/login' style={{ color: "blue" }}>tại đây</Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default SignupPage;
