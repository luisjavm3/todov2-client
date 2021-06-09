import React from 'react';
import Header from '../components/Header';

const Welcome = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="frame frame--padding">
        <h1>Welcome!</h1>
        <p>Please signup or login.</p>
      </div>
    </React.Fragment>
  );
};

export default Welcome;
