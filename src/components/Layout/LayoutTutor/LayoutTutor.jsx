import { Box } from '@mui/material';
import Header from '../components/Header/Header';
import SideBar from "./SideBarTutor/SideBar"
import Footer from '../components/Footer/Footer';

function LayoutTutor({ children }) {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            msFlex: 1,
          }}
        >
          <Box
            sx={{
              width: '15%',
              position: 'fixed',
              top: '70px',
              left: '0',
              zIndex: 100,
            }}
          >
            <SideBar />
          </Box>
          <Box
            sx={{
              width: '85%',
              marginLeft: '15%',
              minHeight: '100vh',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                marginTop: '70px',
              }}
            >
              {children}
            </Box>
            <Footer />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LayoutTutor;
