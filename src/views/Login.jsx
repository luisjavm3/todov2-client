import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { logIn } from '../redux/actions/authActions';
import Paper from '../components/Paper';
import { useHistory } from 'react-router';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  let history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username && password) {
      dispatch(logIn({ username, password }));
    } else {
      console.warn('Insert Username and Password');
    }

    history.push('/app');
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login">
      <div className="frame frame--padding">
        <div className="login__paper-wrapper">
          <Paper className="login__paper" minHeight="450px">
            <h2 className="login__title">Login</h2>

            <form className="login__form">
              <div className="login__form-group">
                <div className="login__form-control">
                  <label htmlFor="username">username</label>
                </div>
                <div className="login__form-control">
                  <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    onChange={(e) => handleUsernameChange(e)}
                  />
                </div>
              </div>

              <div className="login__form-group">
                <div className="login__form-control">
                  <label htmlFor="password">password</label>
                </div>
                <div className="login__form-control">
                  <input
                    type="password"
                    id="password"
                    autoComplete="off"
                    onChange={(e) => handlePasswordChange(e)}
                  />
                </div>
              </div>

              <div className="login__form-group">
                <button onClick={(e) => handleLogin(e)}>login</button>
              </div>
            </form>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Login;
