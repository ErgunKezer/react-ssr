import React from 'react';
import { Link } from 'react-router-dom';
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
    </div>
  );
};

export default Home;
