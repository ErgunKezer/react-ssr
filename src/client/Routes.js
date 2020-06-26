import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';

const Routes = () => {
  return (
    <div>
      <Route exact component={Home} path='/' />
      <Route component={Users} path='/users'></Route>
    </div>
  );
};

export default Routes;
