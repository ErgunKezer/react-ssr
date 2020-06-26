import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
const app = express();
app.use('/public', express.static('public')); // tells the express, public is open to world
app.use('/build', express.static('build')); // tells the express, public is open to world

app.get('*', (req, res) => {
  const store = createStore();
  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log('listening in port 3000!!!');
});
