import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/header/Header';
// import Navbar from './pages/Navbar';
// import Home from './pages/Home';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <div style={{ display: 'flex' }}>
        {/* <Navbar /> */}
        {/* <div style={{ flexGrow: 1, padding: '20px' }}>
          <Routes>
            <Route path="/abc" element={<Home />} />
          </Routes>
        </div> */}
      </div>
    </Router>
  );
};

export default AppRouter;
