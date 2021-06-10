import React from 'react';
import Paper from '../components/Paper';

const Login = () => {
  return (
    <div className="login">
      <div className="frame frame--padding">
        {/* <div className="login__paper-wrapper"> */}
        <Paper className="login__paper">
          <h2 className="login__title">Login</h2>
          <form className="login__form">
            <div className="login__form-group">
              <label htmlFor="username">username</label>
              <input type="text" id="username" />
            </div>
            <div className="login__form-group">
              <label htmlFor="password">password</label>
              <input type="text" id="password" />
            </div>
          </form>
        </Paper>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Login;
