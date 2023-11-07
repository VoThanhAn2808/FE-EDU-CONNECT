import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
import React from 'react';
import LOGIN from '../../../assests/login.png';
import LOGO from '../../../assests/lglogin.jpg';
import Button from '@mui/joy/Button';
import { Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';


function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        background: 'linear-gradient(to bottom, #F9C01F, white)',
      }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50%',
        }}>
        <img
          src={LOGIN}
          alt='login'
          style={{
            height: '400px',
            width: '600px',
          }} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '50%',
          justifyContent: 'center',
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            height: '90vh',
            borderRadius: '30px',
            padding: '50px',
            gap: '30px',
          }}>
          <img
            src={LOGO}
            alt='logo'
            style={{
              width: '350px',
              height: '100px',
            }} />

            <FormControl sx={{ mt: 5 , width: '50ch' }} variant="outlined" size='large'>
            <InputLabel htmlFor="Email" style={{fontSize: 15}}>Email</InputLabel>
            <OutlinedInput
             style={{fontSize: '18px'}}
              id="Email"
              label="Email"
            />
          </FormControl>

          <FormControl sx={{ mt: 1, width: '50ch' }} variant="outlined" size='large'>
            <InputLabel htmlFor="password" style={{fontSize: 15}}>Mật khẩu</InputLabel>
            <OutlinedInput
             style={{fontSize: '18px'}}
              id="password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end" >
                  <IconButton 
                    onClick={handleClickShowPassword}
                    aria-label="toggle password visibility"
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
          <Button
            sx={{
              width: '250px',
              height: '45px',
              fontSize: '23px',
              marginTop: '10px',
              background: '#2D3748'
            }}>
            Đăng nhập
          </Button>
        </Box>
        <Typography
          sx={{
            position: 'absolute',
            fontSize: '18px',
            bottom: '16%'
          }}>
          Bạn chưa có tài khoản, đăng kí <Link to='/signup' style={{color: "blue", textDecoration: "none"}}>tại đây</Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default LoginPage;
