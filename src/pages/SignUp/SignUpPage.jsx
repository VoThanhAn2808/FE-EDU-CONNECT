import { Box, IconButton, Input, InputAdornment, Typography } from '@mui/material';
import React, { useState } from 'react';
import LOGIN from '../../assests/login.png';
import LOGO from '../../assests/lglogin.jpg';
import Button from '@mui/joy/Button';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { Link } from 'react-router-dom';

function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <Box
      className='image-container'
      sx={{
        display: 'flex',
        width: '100%',
        height: '100vh',
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
              <label htmlFor='name'>Họ và tên:</label>
              <Input
                size='lg'
                id='name'
                placeholder='Họ và tên:'
                variant='outlined'
                sx={{
                  fontSize: '15px',
                }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <label htmlFor='phone'>Số Điện Thoại:</label>
              <Input
                id='phone'
                size='lg'
                placeholder='Số Điện Thoại:'
                variant='outlined'
                sx={{
                  fontSize: '15px',
                }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <label htmlFor='email'>Email:</label>
              <Input
                id='email'
                size='lg'
                placeholder='Email'
                variant='outlined'
                sx={{
                  fontSize: '15px',
                }}
              />
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
                <label htmlFor='password'>Mật khẩu:</label>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  size='lg'
                  placeholder='Mật Khẩu'
                  variant='outlined'
                  sx={{
                    fontSize: '15px',
                  }}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton onClick={toggleShowPassword}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <label htmlFor='confirm-password'>Xác nhận mật khẩu:</label>
                <Input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id='confirm-password'
                  size='lg'
                  placeholder='Xác nhận lại'
                  variant='outlined'
                  sx={{
                    fontSize: '15px',
                  }}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton onClick={toggleShowConfirmPassword}>
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: '10px',
                //   alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <label htmlFor='role'>Bạn là ai :</label>
              <Select id='role' placeholder='Choose one…' size='lg' variant='outlined'>
                <Option value={0}>Học Sinh</Option>
                <Option value={1}>Giáo Viên</Option>
              </Select>
            </Box>
          </Box>

          <Button
            sx={{
              width: '100px',
              height: '30px',
              fontSize: '15px',
              background: '#2D3748',
            }}
          >
            Sign Up
          </Button>
        </Box>
        <Typography
          variant='subtitle1'
          color='initial'
          sx={{
            position: 'absolute',
            bottom: '10px',
          }}
        >
          Tôi đã có tài khoản, đăng nhập <Link to='/login'>tại đây</Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default SignupPage;
