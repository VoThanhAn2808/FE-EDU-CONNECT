import React, { useState } from 'react';
import { Card, Button, Grid, Typography, withStyles } from '@material-ui/core';
import { Box } from '@mui/material';

const styles = {
  root: {
    width: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  input: {
    display: 'none',
  },
  img: {
    width: 200,
    height: 256,
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
};

const ImageUploadCard = ({ classes, onUploadSuccess, onUploadFail }) => {
  const [mainState, setMainState] = useState('initial');
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleUploadClick = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = function (e) {
      setSelectedFile(reader.result);
    };

    reader.readAsDataURL(file);

    setMainState('uploaded');
    setSelectedFile(event.target.files[0]);
    setUploadSuccess(true);

    if (onUploadSuccess) {
      onUploadSuccess(selectedFile);
    }
  };

  const renderInitialState = () => {
    return (
      <Grid container direction="column" alignItems="center">
        <label htmlFor="contained-button-file">
          <Button variant="contained" component="span">
            Ảnh chuyển khoản
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={handleUploadClick}
            />
          </Button>
        </label>
      </Grid>
    );
  };

  const renderUploadedState = () => {
    return (
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <img
            width="100%"
            className={classes.img}
            src={selectedFile}
            alt="Uploaded"
          />
        </Grid>
        {uploadSuccess}
        <label htmlFor="contained-button-file">
          <Button variant="contained" component="span">
            Ảnh chuyển khoản
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={handleUploadClick}
            />
          </Button>
        </label>
      </Grid>
    );
  };

  return (
    <Box className={classes.root}>
      <Card>
        {mainState === 'initial' && renderInitialState()}
        {mainState === 'uploaded' && renderUploadedState()}
      </Card>
    </Box>
  );
};

export default withStyles(styles)(ImageUploadCard);