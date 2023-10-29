import { Box, Input, Typography } from '@mui/material';
import React from 'react';
import LOGIN from '../../assests/login.png';
import LOGO from '../../assests/lglogin.jpg';
import Button from '@mui/joy/Button';

const ForgotPassword = () => {
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
              <label htmlFor='email'>Email:</label>
              <Input
                size='lg'
                id='email'
                placeholder='Email'
                variant='outlined'
                sx={{
                  fontSize: '15px',
                }}
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
            Lấy lại mật khẩu
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
          Vui lòng nhập email của bạn để lấy lại mật khẩu
        </Typography>
      </Box>
    </Box>
  );
};

export default ForgotPassword;