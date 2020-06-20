import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';

const Routes = () => {
  return (
    <div>
      <Route exact component={Home} path='/' />
      <Route component={Users} path='/users'></Route>
    </div>
  );
};

export default Routes;
