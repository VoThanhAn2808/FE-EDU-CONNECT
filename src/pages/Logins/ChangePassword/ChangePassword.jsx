import { Box, Typography, IconButton, InputAdornment, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import React, { useState } from 'react';
import LOGIN from '../../../assests/login.png';
import LOGO from '../../../assests/lglogin.jpg';
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
              width: '70%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <FormControl sx={{mt: 1, width: "55ch", ml: -4}} variant='outlined' size='large'>
                <InputLabel htmlFor="password" style={{fontSize: 18, marginLeft: "4%"}}>Mật khẩu cũ</InputLabel>
                <OutlinedInput
                  id='password'
                  type={showCurrentPassword ? 'text' : 'password'}
                  sx={{ fontSize: '18px' }}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton onClick={toggleShowCurrentPassword}>
                        {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <FormControl sx={{mt: 1, width: "55ch", ml: -4}} variant='outlined' size='large'>
                <InputLabel htmlFor="password" style={{fontSize: 18, marginLeft: "4%"}}>Mật khẩu mới</InputLabel>
                <OutlinedInput
                  id='password'
                  type={showNewPassword ? 'text' : 'password'}
                  sx={{ fontSize: '18px' }}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton onClick={toggleShowNewPassword}>
                        {showNewPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <FormControl sx={{mt: 1, width: "55ch", ml: -4}} variant='outlined' size='large'>
                <InputLabel htmlFor="password" style={{fontSize: 18, marginLeft: "4%"}}>Nhập lại mật khẩu</InputLabel>
                <OutlinedInput
                  id='password'
                  type={showConfirmPassword ? 'text' : 'password'}
                  sx={{ fontSize: '18px' }}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton onClick={toggleShowConfirmPassword}>
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
          </Box>
          <Button
            sx={{
              width: '250px',
              height: '45px',
              fontSize: '23px',
              marginTop: '10px',
              background: '#2D3748',
            }}
          >
            Đổi Mật Khẩu
          </Button>
        </Box>
        <Typography
          sx={{
            position: 'absolute',
            bottom: '10%',
            fontSize: "18px"
          }}
        >
          Vui lòng nhập thông tin để thay đổi mật khẩu
        </Typography>
      </Box>
    </Box>
  );
}

export default ChangePassword;