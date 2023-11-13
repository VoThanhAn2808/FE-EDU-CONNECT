import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ProfileAvatar from '../../../components/Layout/components/ProfileAvatar/ProfileAvatar';
import UserProfileInfo from '../../../components/Layout/components/ProfileInfo/Staff/ProfileInfo';
import { Box, Paper, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

function ProfileStaff() {
  const [userData, setUserData] = useState({
    name: 'Nguyen Duc Nghia',
    email: 'nghiadeptrai@gmail.com',
    address: '123 Vn',
    phone: '0780800909',
    dateOfBirth: new Date('2001-08-09'),
    district: 'Duy Xuyên',
    city: 'Quảng Nam',
    gen: 0,
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
    setIsEditing(false);
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
          onFileChange={handleFileChange}
          isEditing={isEditing}
          role={'nhân viên'}
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
            <Button variant='contained' onClick={handleSave}>
              Lưu
            </Button>
          ) : (
            <Button variant='contained' onClick={() => setIsEditing(true)}>
              Chỉnh Sửa
            </Button>
          )}
        </Paper>
      </ThemeProvider>
    </Box>
  );
}

export default ProfileStaff;