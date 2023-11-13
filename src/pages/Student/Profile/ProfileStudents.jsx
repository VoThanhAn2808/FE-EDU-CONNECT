import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ProfileAvatar from '../../../components/Layout/components/ProfileAvatar/ProfileAvatar';
import UserProfileInfo from './ProfileInfo';
import { Box, Paper, ThemeProvider, createTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const theme = createTheme({
  typography: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const ProfileStudents = () => {
  const [userData, setUserData] = useState({
  });
  const [isEditing, setIsEditing] = useState(true);
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
            <Link to="/homestudent">
              <Button variant="contained" onClick={handleSave}>
                Lưu
              </Button>
            </Link>
          ) : (
            <Button variant="contained" onClick={() => setIsEditing(true)}>
              Chỉnh Sửa
            </Button>
          )}
        </Paper>
      </ThemeProvider>
    </Box>
  );
};

export default ProfileStudents;