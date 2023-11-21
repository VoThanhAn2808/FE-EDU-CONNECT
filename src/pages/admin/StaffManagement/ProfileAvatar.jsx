import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';

const AvatarWrapper = styled('div')({
    position: 'relative',
    height: 150, // Decreased height
    width: 150, // Decreased width
    margin: '20px auto', // Adjusted margin
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: '1px 1px 15px -5px black',
    transition: 'all .3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      cursor: 'pointer',
    },
    '&:hover .profile-pic': {
      opacity: 0.5,
    },
  });

const ProfilePic = styled(Avatar)({
  height: '100%',
  width: '100%',
  transition: 'all .3s ease',
  '&:after': {
    fontFamily: 'FontAwesome',
    content: '"\f007"',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    fontSize: 190,
    background: '#ecf0f1',
    color: '#34495e',
    textAlign: 'center',
  },
});

const UploadButton = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '50%',
  width: '50%',
});

const FileUpload = styled(Input)({
  display: 'none',
});

const ProfileAvatar = () => {
  const [profilePicSrc, setProfilePicSrc] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setProfilePicSrc(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleUploadButtonClick = () => {
    document.getElementById('file-upload').click();
  };

  return (
    <AvatarWrapper>
      <ProfilePic alt="Profile Pic" src={profilePicSrc} className="profile-pic" />
      <UploadButton>
        <IconButton
          color="primary"
          aria-label="Upload File"
          component="span"
          className="fa-arrow-circle-up"
          onClick={handleUploadButtonClick}
        >
          <CloudUploadIcon sx={{ fontSize: 130 }} />
        </IconButton>
      </UploadButton>
      <FileUpload
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
    </AvatarWrapper>
  );
};

export default ProfileAvatar;