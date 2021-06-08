import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="frame frame--flex">
        <ul className="header__nav">
          <li className="header__list-item">
            <a href>home</a>
          </li>
          <li className="header__list-item">
            <a href>users</a>
          </li>
        </ul>

        <div className="header__title-bar">
          <span className="header__title">view title</span>
        </div>

        <ul className="header__auth-bar">
          <li className="header__list-item">
            <a href>signup</a>
          </li>
          <li className="header__list-item">
            <a href>login</a>
          </li>
          <li className="header__list-item">
            <a href>logout</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
