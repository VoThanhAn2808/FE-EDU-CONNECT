import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ProfileAvatar from '../../../components/Layout/components/ProfileAvatar/ProfileAvatar';
import UserProfileInfo from '../../../components/Layout/components/ProfileInfo/Student/ProfileInfo';
import { Box, Paper, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const ProfileStudent = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    dateOfBirth: null,
    district: '',
    city: '',
    gen: 0,
    class: 0,
    avt: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleInputChange = (field, value) => {
    setUserData({
      ...userData,
      [field]: value,
    });
  };

  const handleSave = () => {
    setUserData({
      ...userData,
      avt: uploadedFile,
    });
    setIsEditing(!isEditing);
  };

  const handleFileChange = (selectedFile) => {
    setUploadedFile(selectedFile);
  };
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <ThemeProvider theme={theme}>
        <ProfileAvatar
          userData={userData}
          onFileChange={handleFileChange}
          isEditing={isEditing} 
          role={'học sinh'}
          uploadedFile={uploadedFile}
        />
        <Paper
          style={{
            marginBottom: '30px',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            padding: '30px',
            width: '50vw',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <UserProfileInfo
            userData={userData}
            handleInputChange={handleInputChange}
            isEditing={isEditing}
          />
          {isEditing ? (
            
            <Button variant="contained" onClick={handleSave}>
              Lưu
            </Button>
          ) : (
            <Button variant="contained" onClick={() => setIsEditing(!isEditing)}>
            Chỉnh Sửa
          </Button>
          )}
        </Paper>
      </ThemeProvider>
    </Box>
  );
};

export default ProfileStudent;
