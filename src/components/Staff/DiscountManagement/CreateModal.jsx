import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Container, Grid, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

export default function CreateModal(props) {
  const { isShowModal, setOpen } = props;
  const handleClose = () => setOpen(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    // Clear the form fields after submission if needed
  };
  return (
    <Modal
      open={!!isShowModal}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Container maxWidth='lg' style={{ marginTop: '10px', padding: '10px' }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid style={{ float: 'left' }}>
                <Typography variant='h3' style={{ fontFamily: 'cursive' }}>
                  Thêm Mã Giảm Giá
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Discount'
                  variant='outlined'
                  // value={discount}
                  // onChange={(e) => setDiscount(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Description'
                  variant='outlined'
                  // value={discount}
                  // onChange={(e) => setDiscount(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Image'
                  variant='outlined'
                  // value={discount}
                  // onChange={(e) => setDiscount(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Discount'
                  variant='outlined'
                  // value={discount}
                  // onChange={(e) => setDiscount(e.target.value)}
                  required
                />
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Discount'
                  variant='outlined'
                  // value={discount}
                  // onChange={(e) => setDiscount(e.target.value)}
                  required
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Title'
                  variant='outlined'
                  multiline
                  rows={4}
                  // value={description}
                  // onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  size='large'
                  style={{ float: 'right' }}
                >
                  Lưu
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>
    </Modal>
  );
}
