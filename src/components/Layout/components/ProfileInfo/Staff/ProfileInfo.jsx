import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import {MenuItem} from '@mui/material';

function ProfileInfo({ userData, handleInputChange, isEditing }) {
  return (
    <>
      <TextField
        label='Họ Và Tên'
        fullWidth
        value={userData.fullName || ''}
        onChange={(e) => handleInputChange('fullName', e.target.value)}
        disabled={!isEditing}
        InputLabelProps={{
          shrink: userData.fullName ? true : undefined,
        }}
      />
      <TextField
        label='Email'
        fullWidth
        value={userData.email || ''}
        onChange={(e) => handleInputChange('email', e.target.value)}
        disabled={true}
        InputLabelProps={{ shrink: true }}
      />
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          gap: '30px',
        }}
      >
        <TextField
          select
          label='Giới Tính'
          value={userData.gender !== undefined ? userData.gender : ''}
          InputLabelProps={{
            shrink: true,
          }}
          disabled={!isEditing}
          sx={{
            width: '100%',
          }}
          onChange={(e) => handleInputChange('gender', e.target.value)}
        >
          <MenuItem value={1}>Nam</MenuItem>
          <MenuItem value={0}>Nữ</MenuItem>
        </TextField>
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          gap: '30px',
        }}
      >
        <TextField
          label='Huyện'
          fullWidth
          value={userData.wards || ''}
          onChange={(e) => handleInputChange('wards', e.target.value)}
          disabled={!isEditing}
        />
        <TextField
          label='Tỉnh / Thành Phố'
          fullWidth
          value={userData.city || ''}
          onChange={(e) => handleInputChange('city', e.target.value)}
          disabled={!isEditing}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          gap: '30px',
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label='Ngày Sinh'
            defaultValue={dayjs(userData.birthdate)}
            onChange={(date) => handleInputChange('dateOfBirth', date)}
            inputFormat='DD/MM/YYYY'
            renderInput={(params) => (
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant='caption'>Date of Birth</Typography>
                <TextField {...params} fullWidth />
              </Box>
            )}
            sx={{
              width: '50%',
            }}
            disabled={!isEditing}
          />
        </LocalizationProvider>
        <TextField
          label='Số Điện Thoại'
          value={userData.phone || ''}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          disabled={!isEditing}
          sx={{
            width: '50%',
          }}
        />
      </Box>
    </>
  );
}

export default ProfileInfo;