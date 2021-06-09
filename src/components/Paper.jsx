import React from 'react';

const Paper = ({ children, maxWidth = '500px', minHeight = '500px' }) => {
  return (
    <div className="paper" style={{ maxWidth: maxWidth, minHeight: minHeight }}>
      {children}
    </div>
  );
};

export default Paper;
