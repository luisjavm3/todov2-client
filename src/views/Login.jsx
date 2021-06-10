import React, { useState } from 'react';
import Paper from '../components/Paper';

const Login = () => {
  const [username, setUsername] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
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
                  <input type="text" id="username" />
                </div>
              </div>

              <div className="login__form-group">
                <div className="login__form-control">
                  <label htmlFor="password">password</label>
                </div>
                <div className="login__form-control">
                  <input type="password" id="password" />
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
