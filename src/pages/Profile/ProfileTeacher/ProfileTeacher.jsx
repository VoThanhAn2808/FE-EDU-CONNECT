import React, { useCallback, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ProfileAvatar from '../../../components/Layout/components/ProfileAvatar/ProfileAvatar';
import UserProfileInfo from '../../../components/Layout/components/ProfileInfo/Teacher/ProfileInfo';
import { Box, Paper, ThemeProvider, createTheme } from '@mui/material';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const theme = createTheme({
  typography: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
const ProfileTeacher = () => {
  const decodedToken = jwtDecode(localStorage.getItem('token'));
  const userId = decodedToken.id;
  
  const [userData, setUserData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const fetchUser = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/educonnect/viewTutor?tutorId=${userId}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      setUserData({ ...response.data, email: decodedToken.sub});
    } catch (error) {
      console.error(error);
    }
  }, [userId, decodedToken.sub]);

  const fetchCourse = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/educonnect/tutor/course?tutorid=${userId}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      setUserData((prevUserData) => ({ ...prevUserData, courseList: response.data }));
    } catch (error) {
      console.error(error);
    }
  }, [userId]);

  const updateInfo = async () => {

    try {
      const formData = new FormData();
      formData.append('fullname', userData.fullname);
      formData.append('tutorid', decodedToken.id);
      formData.append('gender', userData.gender);
      formData.append('birthdate', userData.birthdate);
      formData.append('phone', userData.phone);
      formData.append('city', userData.city);
      formData.append('wards', userData.wards);
      formData.append('file', uploadedFile);
      const response = await axios.put('http://localhost:8081/educonnect/UpdateTutor', formData,
        {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    fetchUser();
    fetchCourse();
  }, [fetchUser, fetchCourse]);
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
    setIsEditing(false);
  };
  // console.log('hehehehehe', userData);
  
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
          role={'giáo viên'}
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
};

export default ProfileTeacher;