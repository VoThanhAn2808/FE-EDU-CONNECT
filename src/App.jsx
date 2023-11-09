import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { privateRoute, publicRoute } from "./routes/routes";


function App() {

  const token = localStorage.getItem("token");
  const isAuthenticated = token;

  
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