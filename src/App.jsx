import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { privateRoute, publicRoute } from './routes/routes';
import PageNotFound from './pages/PageNotFound';
import TutorRoute from './components/Auth/TutorRoute';
import StudentRoute from './components/Auth/StudentRoute';

function App() {

  return (
    <Router>
      <Routes>
        <Route />
        {publicRoute.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <route.layout>
                <route.component />
              </route.layout>
            }
          />
        ))}
        <Route path='/' element={<Navigate to='/login' />} />
        {privateRoute.map((route) => {
          if (route?.allowedRoles?.includes('tutor')) {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <TutorRoute
                    element={
                      <route.layout>
                        <route.component />
                      </route.layout>
                    }
                    allowedRoles={route.allowedRoles}
                  />
                }
              />
            );
          } else if (route?.allowedRoles?.includes('student')) {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <StudentRoute
                    element={
                      <route.layout>
                        <route.component />
                      </route.layout>
                    }
                    allowedRoles={route.allowedRoles}
                  />
                }
              />
            );
          } else {
            return (
              <Route
                path={route.path}
                key={route.path}
                exact={route.exact}
                element={
                  <route.layout>
                    <route.component />
                  </route.layout>
                }
              />
            );
          }
        })}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
