import React from 'react';
import '../../../assets/scss/main.scss';
import Navbar from '../components/Navbar';
import Routes from '../Routes';
import { renderRoutes } from 'react-router-config';
const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>{renderRoutes(Routes)}</div>
    </div>
  );
};

export default Layout;
