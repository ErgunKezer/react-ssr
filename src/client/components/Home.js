import React from 'react';
const clickMe = (props) => {
  console.log('clicked');
};
const Home = () => {
  return (
    <div>
      <div>I m in the home component.Very best. really really!!!</div>
      <button onClick={clickMe}>Click Me</button>
    </div>
  );
};

export default Home;
