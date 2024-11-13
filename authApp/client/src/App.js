// import { useContext } from 'react';

// const App = () => {
//   const { logout } = useContext(AuthContext);

//   useAutoLogout(logout);

//   return (
//     <p>sdsa</p>
//   );
// };

// export default App;
import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoutes";
import { AuthContext } from "./context/AuthContext";
import useAutoLogout from "./hooks/useAutoLogout";

function App() {
  const { logout } = useContext(AuthContext);

  useAutoLogout(logout);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for existing tokens here and set isAuthenticated accordingly
    const token = localStorage.getItem("accessToken");
    if (token) setIsAuthenticated(true);
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
