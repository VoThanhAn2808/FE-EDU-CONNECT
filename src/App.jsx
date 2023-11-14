import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { privateRoute, publicRoute } from "./routes/routes";
import { jwtDecode } from "jwt-decode";


function App() {

  const token = localStorage.getItem("token");
  let isAuthenticated = false;

  if (token) {
    const decodedToken = decodeToken(token);
    if (decodedToken && decodedToken.exp) {
      const expirationTime = decodedToken.exp * 1000; 
      const currentTime = Date.now();
      isAuthenticated = currentTime < expirationTime;

      if (!isAuthenticated) {
        localStorage.removeItem("token");
      }
    }
  }

  function decodeToken(token) {
    try {
      const decoded = jwtDecode(token);
      return decoded;
    } catch (error) {
      console.error("Failed to decode token:", error);
      return null;
    }
  }


  return (
    <Router>
      <Routes>
        <Route />
        {publicRoute.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              isAuthenticated ? (
                <Navigate to="/homestudent" />
              ) : (
                <route.layout>
                  <route.component />
                </route.layout>
              )
            }
          />
        ))}
        <Route path="/" element={<Navigate to="/login" />} />
        {privateRoute.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                isAuthenticated ? (
                  <route.layout>
                    <route.component />
                  </route.layout>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;