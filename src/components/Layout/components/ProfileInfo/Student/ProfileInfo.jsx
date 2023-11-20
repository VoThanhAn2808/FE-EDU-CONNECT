import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { MenuItem } from '@mui/material';
import axios from 'axios';

function ProfileInfo({ userData, handleInputChange, isEditing }) {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8081/student/class`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <TextField
        label='Họ Và Tên'
        fullWidth
        value={userData.fullname}
        onChange={(e) => handleInputChange('fullname', e.target.value)}
        disabled={!isEditing}
        InputLabelProps={{
          shrink: userData.fullname ? true : undefined,
        }}
      />
      <TextField
        label='Email'
        fullWidth
        value={userData.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
        disabled={!isEditing}
        InputLabelProps={{
          shrink: userData.email ? true : undefined,
        }}
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
          label='Lớp'
          value={userData.classId} // Thêm thuộc tính value
          onChange={(e) => handleInputChange('classId', e.target.value)}
          disabled={!isEditing}
          sx={{
            width: '50%',
          }}
          InputLabelProps={{
            shrink: !!userData.classId,
          }}
          SelectProps={{
            MenuProps: {
              'aria-readonly': true,
            },
          }}
        >
          {data.map((item) => (
            <MenuItem
              value={item.classid}
              key={item.classid}
            >
              {item.className}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ width: '50%', m: 0 }}>
          <TextField
            select
            label='Giới Tính'
            value={userData.gender !== undefined ? userData.gender : ''}
            InputLabelProps={{
              shrink: userData.gender ? true : undefined,
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
          value={userData.wards}
          onChange={(e) => handleInputChange('wards', e.target.value)}
          disabled={!isEditing}
          InputLabelProps={{
            shrink: userData.wards ? true : undefined,
          }}
        />
        <TextField
          label='Tỉnh / Thành Phố'
          fullWidth
          value={userData.city}
          onChange={(e) => handleInputChange('city', e.target.value)}
          disabled={!isEditing}
          InputLabelProps={{
            shrink: userData.city ? true : undefined,
          }}
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
            value={userData.birthdate ? dayjs(userData.birthdate) : null}
            onChange={(date) => handleInputChange('birthdate', date)}
            InputLabelProps={{
              shrink: userData.birthdate ? true : undefined,
            }}
            sx={{ width: '50%' }}
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
          InputLabelProps={{
            shrink: userData.phone ? true : undefined,
          }}
        />
      </Box>
    </>
  );
}

export default ProfileInfo;