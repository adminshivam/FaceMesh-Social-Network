import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/header/Header";
// import Navbar from './pages/Navbar';
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <div>
        {/* <Navbar /> */}
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
