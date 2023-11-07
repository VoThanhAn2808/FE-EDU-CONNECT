import { Box, FormControl, InputLabel, OutlinedInput, Typography } from '@mui/material';
import React from 'react';
import LOGIN from '../../../assests/login.png';
import LOGO from '../../../assests/lglogin.jpg';
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
              <FormControl sx={{ mt: 5, width: '50ch', ml: -4 }} variant="outlined" size='large'>
                <InputLabel htmlFor="Email" style={{ fontSize: 15 }}>Email</InputLabel>
                <OutlinedInput
                  style={{ fontSize: '18px' }}
                  id="Email"
                  label="Email"
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
            Lấy lại mật khẩu
          </Button>
        </Box>
        <Typography
          sx={{
            position: 'absolute',
            bottom: '27%',
            fontSize: '18px',
          }}
        >
          Vui lòng nhập email của bạn để lấy lại mật khẩu
        </Typography>
      </Box>
    </Box>
  );
};

export default ForgotPassword;