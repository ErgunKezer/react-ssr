import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import './custom.scss';
const clickMe = () => {
  console.log('clicked');
};
const Home = () => {
  return (
    <div>
      <div className='alert alert-primary' role='alert'>
        A simple primary alert—check it out!
      </div>
      <div className='colorRed'>
        I m in the home component.Very best. really really!!!
      </div>
      <button onClick={clickMe}>Click Me</button>
      <Link to='/users'>Path to Users Page</Link>
    </div>
  );
};

export default Home;
