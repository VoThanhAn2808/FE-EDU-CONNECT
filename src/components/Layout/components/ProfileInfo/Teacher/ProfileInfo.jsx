import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import { FormControl, InputAdornment, InputLabel, List, ListItem, ListItemText, MenuItem, Select } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

function ProfileInfo({ userData, handleInputChange, isEditing }) {

  const classList = userData.class.map((classObj) => classObj.name);
  console.log(classList);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  
  return (
    <>
      <TextField
        label='Họ Và Tên'
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
        label='Số Nhà & Tên Đường'
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
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: '50%' }}>
          <FormControl fullWidth disabled={!isEditing}>
            <InputLabel id='gen'>Giới Tính</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='gen'
              value={userData.gen}
              label='Giới Tính'
              onChange={(e) => handleInputChange('gen', e.target.value)}
            >
              <MenuItem value={0}>Nam</MenuItem>
              <MenuItem value={1}>Nữ</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: '50%' }}>
          <FormControl fullWidth disabled={!isEditing}>
            <List>
              <Box>
                <TextField
                  id='subj'
                  label='Chuyên Môn'
                  value={classList.length}
                  onClick={handleClick}
                  sx={{
                    width: '200px',
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        {open ? <ExpandLess /> : <ExpandMore />}
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  backgroundColor: 'white',
                  zIndex: 99,
                  width: '200px',
                }}
              >
                {open &&
                  classList.map((value) => (
                    <ListItem key={value} disableGutters>
                      <ListItemText primary={value} />
                    </ListItem>
                  ))}
              </Box>
            </List>
          </FormControl>
        </Box>
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
          value={userData.district}
          onChange={(e) => handleInputChange('district', e.target.value)}
          disabled={!isEditing}
        />
        <TextField
          label='Tỉnh / Thành Phố'
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
            label='Ngày sinh'
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
          label='Số Điện Thoại'
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