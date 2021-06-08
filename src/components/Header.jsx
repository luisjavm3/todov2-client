import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="frame frame--flex">
        <ul className="header__nav">
          <li className="header__nav-item">
            <a href>home</a>
          </li>
          <li className="header__nav-item">
            <a href>users</a>
          </li>
        </ul>

        <div className="header__view-name">View Title</div>

        <div className="header__auth-bar">Log</div>
      </div>
    </header>
  );
};

export default Header;
