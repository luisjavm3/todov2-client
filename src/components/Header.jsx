import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="frame frame--flex">
        <ul className="header__nav">
          <li className="header__list-item">
            <a href="any">home</a>
          </li>
          <li className="header__list-item">
            <a href="any">users</a>
          </li>
        </ul>

        <div className="header__title-bar">
          <span className="header__title">view title</span>
        </div>

        <ul className="header__auth-bar">
          <li className="header__list-item">
            <Link to="/signup">signup</Link>
          </li>
          <li className="header__list-item">
            <Link to="/login">login</Link>
          </li>
          <li className="header__list-item">
            <a href="any">logout</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
