import * as React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        height: '40px',
        background: '#F9C01F',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        bottom: '0',
      }}
    >
      <Typography sx={{ fontSize: '12px', fontFamily: 'math' }}>
        Copyright @2023 BA Warrior. All right reserved
      </Typography>
    </Box>
  );
}

export default Footer;
