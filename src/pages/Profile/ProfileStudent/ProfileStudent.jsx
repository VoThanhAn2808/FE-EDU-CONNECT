import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ProfileAvatar from '../../../components/Layout/components/ProfileAvatar/ProfileAvatar';
import UserProfileInfo from '../../../components/Layout/components/ProfileInfo/Student/ProfileInfo';
import { Box, Paper, ThemeProvider, createTheme } from '@mui/material';
import { useCallback } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';

const theme = createTheme({
  typography: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const ProfileStudent = () => {

  const decodedToken = jwtDecode(localStorage.getItem('token'));
  const userId = decodedToken.id;
  const [uploadedFile, setUploadedFile] = useState(null);

  const [userData, setUserData] = useState({
    fullname: '',
    studentid: userId,
    class: '',
    gender: '',
    wards: '',
    city: '',
    birthdate: null,
    phone: '',
    classId : '',
    img : '',
  });
  const [isEditing, setIsEditing] = useState(false);


  const fetchUser = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/student/viewstudent?email=${userId}`,
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
      formData.append('fullname', userData.fullname);
      formData.append('studentid', decodedToken.id);
      formData.append('file', userData.avt);
      formData.append('gender', userData.gender);
      formData.append('birthdate', userData.birthdate);
      formData.append('phone', userData.phone);
      formData.append('city', userData.city);
      formData.append('wards', userData.wards);
      formData.append('classentity', userData.classId);

      const response = await axios.put(
        'http://localhost:8081/student/updatestudent',
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
    setUserData({
      ...userData,
      avt: selectedFile,
    });
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
