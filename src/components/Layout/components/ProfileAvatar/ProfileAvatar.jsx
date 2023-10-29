import React from 'react';
import Avatar from '@mui/material/Avatar';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

function ProfileAvatar({ onFileChange, isEditing }) {
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    onFileChange(selectedFile);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant='h4'
        color='initial'
        sx={{
          textAlign: 'center',
          marginY: '30px',
        }}
      >
        User Profile
      </Typography>
      <Avatar
        alt='Remy Sharp'
        src='/static/images/avatar/1.jpg'
        sx={{
          height: '155px',
          width: '155px',
        }}
      />
      {isEditing ? (
        <>
          <Input
            id='file-input'
            type='file'
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <label htmlFor='file-input'>
            <Typography
              variant='contained'
              sx={{
                color: '#0072E5',
                cursor: 'pointer',
              }}
            >
              Upload File
            </Typography>
          </label>
        </>
      ) : null}
    </Box>
  );
}

export default ProfileAvatar;


