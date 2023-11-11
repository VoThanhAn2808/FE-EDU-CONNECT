import React from 'react';
import Avatar from '@mui/material/Avatar';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function ProfileAvatar({uploadedFile, userData, onFileChange, isEditing }) {
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
        Thông tin cá nhân
      </Typography>
      <Box
        sx={{
          position: 'relative',
        }}
      >
        <Avatar
          alt='Remy Sharp'
          src={uploadedFile ? URL.createObjectURL(uploadedFile) : userData.avt}
          sx={{
            height: '155px',
            width: '155px',
            filter: isEditing ? 'blur(2px)' : 'none',
          }}
        />
        {isEditing ? (
          <>
            <Input
              id='file-input'
              type='file'
              onChange={handleFileChange}
              style={{
                display: 'none',
              }}
            />
            <label htmlFor='file-input'>
              <CloudUploadIcon
                sx={{
                  width: '100px',
                  height: '100px',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'gray',
                }}
              />
            </label>
          </>
        ) : null}
      </Box>
    </Box>
  );
}

export default ProfileAvatar;