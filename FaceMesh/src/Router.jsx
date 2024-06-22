import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <div>
        {/* <Navbar /> */}
        <div style={{ border: "10px solid black", minHeight: "100%" }}>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
      <Header />
    </Router>
  );
};

export default AppRouter;
