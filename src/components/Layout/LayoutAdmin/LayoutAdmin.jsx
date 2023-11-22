import { Box } from '@mui/material';
import Header from './Header/Header';
import Sidebar from './SideBar/SideBar';

function LayoutAdmin({ children }) {
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
            marginTop: '70px',
            height: "calc(100vh - 70px)"
          }}
        >
          <Box
            sx={{
              minWidth: '15%',
            }}
          >
            <Sidebar />
          </Box>
          <Box
            sx={{
              flex: "1",
              height: 'calc(100vh - 70px)',
              overflowY: "scroll",
              position: 'relative',
            }}
          >
            <Box
            sx={{
              minHeight: 'calc(100vh - 110px)',
            }}>
              {children}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LayoutAdmin;
