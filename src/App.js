import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Oil1 from "./components/Pages/Oil1";
import Oil2 from "./components/Pages/Oil2";
import Oil3 from "./components/Pages/Oil3";
import Oil4 from "./components/Pages/Oil4";
import Oil5 from "./components/Pages/Oil5";
import Oil6 from "./components/Pages/Oil6";
import Oil7 from "./components/Pages/Oil7";
import Oil8 from "./components/Pages/Oil8";

const App = () => {
    const PrivateOil1 = () => {
        const isAuthenticated = sessionStorage.getItem('username');
        return isAuthenticated ? <Oil1 /> : <Navigate to="/" replace />
    };
    const PrivateOil2 = () => {
        const isAuthenticated = sessionStorage.getItem('username');
        return isAuthenticated ? <Oil2 /> : <Navigate to="/" replace />
    };
    const PrivateOil3 = () => {
        const isAuthenticated = sessionStorage.getItem('username');
        return isAuthenticated ? <Oil3 /> : <Navigate to="/" replace />
    };
    const PrivateOil4 = () => {
        const isAuthenticated = sessionStorage.getItem('username');
        return isAuthenticated ? <Oil4 /> : <Navigate to="/" replace />
    };
    const PrivateOil5 = () => {
        const isAuthenticated = sessionStorage.getItem('username');
        return isAuthenticated ? <Oil5 /> : <Navigate to="/" replace />
    };
    const PrivateOil6 = () => {
        const isAuthenticated = sessionStorage.getItem('username');
        return isAuthenticated ? <Oil6 /> : <Navigate to="/" replace />
    };
    const PrivateOil7 = () => {
        const isAuthenticated = sessionStorage.getItem('username');
        return isAuthenticated ? <Oil7 /> : <Navigate to="/" replace />
    };
    const PrivateOil8 = () => {
        const isAuthenticated = sessionStorage.getItem('username');
        return isAuthenticated ? <Oil8 /> : <Navigate to="/" replace />
    };
    return (
      <div>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/oil1" element={<PrivateOil1 />} />
              <Route path="/oil2" element={<PrivateOil2 />} />
              <Route path="/oil3" element={<PrivateOil3 />} />
              <Route path="/oil4" element={<PrivateOil4 />} />
              <Route path="/oil5" element={<PrivateOil5 />} />
              <Route path="/oil6" element={<PrivateOil6 />} />
              <Route path="/oil7" element={<PrivateOil7 />} />
              <Route path="/oil8" element={<PrivateOil8 />} />
          </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;