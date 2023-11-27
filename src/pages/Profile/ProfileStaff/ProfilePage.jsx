import React, { useCallback, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ProfileAvatar from '../../../components/Layout/components/ProfileAvatar/ProfileAvatar';
import UserProfileInfo from '../../../components/Layout/components/ProfileInfo/Staff/ProfileInfo';
import { Box, Paper, ThemeProvider, createTheme } from '@mui/material';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const theme = createTheme({
  typography: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

function ProfileStaff() {
  const decodedToken = jwtDecode(localStorage.getItem('token'));
  const userId = decodedToken.id;
  const [userData, setUserData] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const fetchUser = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/staffsconnect/ViewInfoStaff?staffId=${userId}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      setUserData(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [userId]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  console.log(userData);

  const updateInfo = async () => {
    try {
      const formData = new FormData();
      formData.append('fullname', userData.fullName);
      formData.append('staffid', decodedToken.id);
      formData.append('file', userData.avt);
      formData.append('birthdate', userData.birthdate);
      formData.append('city', userData.city);
      formData.append('wards', userData.wards);

      const response = await axios.put(
        'http://localhost:8081/staffsconnect/UpdateStaff',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

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
    updateInfo();
    setUploadedFile(userData.avt);
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