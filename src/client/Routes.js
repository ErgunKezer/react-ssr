import React from 'react';
import Home from './pages/Home';
import Users, { loadData } from './pages/Users';

// const Routes = () => {
//   return (
//     <div>
//       <Route exact component={Home} path='/' />
//       <Route component={Users} path='/users'></Route>
//     </div>
//   );
// };

export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    loadData,
    path: '/users',
    component: Users,
  },
];

// export default Routes;
