import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';

function ProfileInfo({ userData, handleInputChange, isEditing }) {
  return (
    <>
      <TextField
        label='Name'
        fullWidth
        value={userData.name}
        onChange={(e) => handleInputChange('name', e.target.value)}
        disabled={!isEditing}
      />
      <TextField
        label='Email'
        fullWidth
        value={userData.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
        disabled={!isEditing}
      />
      <TextField
        label='Address'
        fullWidth
        value={userData.address}
        onChange={(e) => handleInputChange('address', e.target.value)}
        disabled={!isEditing}
      />
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          gap: '30px',
        }}
      >
        <TextField
          label='District'
          fullWidth
          value={userData.district}
          onChange={(e) => handleInputChange('district', e.target.value)}
          disabled={!isEditing}
        />
        <TextField
          label='City'
          fullWidth
          value={userData.city}
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
            label='Date of Birth'
            defaultValue={dayjs(userData.dateOfBirth)}
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
          label='Phone number'
          value={userData.phone}
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
