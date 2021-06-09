import React from 'react';

const Paper = ({ children, width = '500px', height = '400px' }) => {
  return (
    <div className="paper" style={{ width: width, height: height }}>
      {children}
    </div>
  );
};

export default Paper;
