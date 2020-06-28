import React from 'react';
import helmetFunc from '../../helpers/helmet';
const clickMe = () => {
  console.log('clicked');
};
const Home = () => {
  const helmet = helmetFunc({
    title: 'Home',
  });
  return (
    <div>
      {helmet}
      <div className='alert alert-primary' role='alert'>
        A simple primary alert—check it out!
      </div>
      <div className='colorRed'>
        I m in the home component.Very best. really really!!!
      </div>
      <button onClick={clickMe}>Click</button>
    </div>
  );
};

export default Home;
