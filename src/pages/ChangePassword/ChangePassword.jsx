import { Box, Input, Typography, IconButton, InputAdornment } from '@mui/material';
import React, { useState } from 'react';
import LOGIN from '../../assests/login.png';
import LOGO from '../../assests/lglogin.jpg';
import Button from '@mui/joy/Button';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function ChangePassword() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const toggleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
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
            height: '70vh',
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
              width: '70%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <label htmlFor='current-password'>Mật Khẩu Cũ:</label>
              <Input
                type={showCurrentPassword ? 'text' : 'password'}
                id='current-password'
                size='lg'
                placeholder='Password'
                variant='outlined'
                sx={{
                  fontSize: '15px',
                }}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton onClick={toggleShowCurrentPassword}>
                      {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
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
              <label htmlFor='new-password'>Mật Khẩu Mới:</label>
              <Input
                type={showNewPassword ? 'text' : 'password'}
                id='new-password'
                size='lg'
                placeholder='Password'
                variant='outlined'
                sx={{
                  fontSize: '15px',
                }}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton onClick={toggleShowNewPassword}>
                      {showNewPassword ? <VisibilityOff /> : <Visibility />}
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
              <label htmlFor='confirm-password'>Xác Nhận Mật Khẩu:</label>
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
          <Button
            sx={{
              width: '200px',
              height: '30px',
              fontSize: '15px',
              marginTop: '10px',
              background: '#2D3748',
            }}
          >
            Đổi Mật Khẩu
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
          Vui lòng nhập thông tin để thay đổi mật khẩu
        </Typography>
      </Box>
    </Box>
  );
}

export default ChangePassword;