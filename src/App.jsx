import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { privateRoute, publicRoute } from "./routes/routes";


function App() {
  return (
    <Router>
      <Routes>
      <Route />
        {publicRoute.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <route.layout>
                  <route.component />
                </route.layout>
              }
            />
          );
        })}
        <Route  element={<Navigate to="/homestudent" />} />
        {privateRoute.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <route.layout>
                  <route.component />
                </route.layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;