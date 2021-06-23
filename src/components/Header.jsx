import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { logOut } from '../redux/actions/authActions';

const Header = () => {
  let location = useLocation();
  let dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.authData.isAuthenticated
  );

  useEffect(() => {}, [location]);

  const handleLogout = () => {
    dispatch(logOut());
  };

  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Welcome';

      case '/app':
        break;

      default:
        return '__Unknown title__';
    }
  };

  return (
    <header className="header">
      <div className="frame frame--flex">
        <ul className="header__nav">
          <li className="header__list-item">
            <Link to="/">home</Link>
          </li>
          {isAuthenticated && (
            <li className="header__list-item">
              <a href="any">users</a>
            </li>
          )}
        </ul>

        <div className="header__title-bar">
          <span className="header__title">{getTitle()}</span>
        </div>

        <ul className="header__auth-bar">
          {(() => {
            if (!isAuthenticated) {
              return (
                <React.Fragment>
                  <li className="header__list-item">
                    <Link to="/signup">signup</Link>
                  </li>
                  <li className="header__list-item">
                    <Link to="/login">login</Link>
                  </li>
                </React.Fragment>
              );
            }
          })()}

          {(() => {
            if (isAuthenticated) {
              return (
                <li className="header__list-item">
                  <button
                    className="header__logout-button"
                    onClick={() => handleLogout()}
                  >
                    logout
                  </button>
                </li>
              );
            }
          })()}
        </ul>
      </div>
    </header>
  );
};

export default Header;
