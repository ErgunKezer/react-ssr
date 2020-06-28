import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
const app = express();
app.use('/public', express.static('public')); // tells the express, public is open to world
app.use('/build', express.static('build')); // tells the express, public is open to world

app.get('*', (req, res) => {
  if (req.path === '/favicon.ico') {
    return;
  }
  const store = createStore();
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(3000, () => {
  // console.log('listening in port 3000!!!');
});
