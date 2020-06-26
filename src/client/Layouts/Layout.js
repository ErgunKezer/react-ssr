import React from 'react';
import '../../../assets/scss/main.scss';
import Navbar from '../components/Navbar';
import Routes from '../Routes';
const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes></Routes>
    </div>
  );
};

export default Layout;
