import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Paper from '../components/Paper';
import { signUp } from '../redux/actions/authActions';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  let history = useHistory();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!username) {
      console.log('Insert a username');
      return;
    }

    if (password.length === 0 || password !== confirmPassword) {
      console.log('The passwords must match.');
      return;
    }

    dispatch(signUp({ username, password }))
      .then(() => {
        history.push('/app');
      })
      .catch(() => {
        console.log(`Error in the dispatch.`);
      });
  };

  return (
    <div className="login">
      <div className="frame frame--padding">
        <div className="login__paper-wrapper">
          <Paper className="login__paper" minHeight="450px">
            <h2 className="login__title">SignUp</h2>

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
                <div className="login__form-control">
                  <label htmlFor="confirm-password">confirm password</label>
                </div>
                <div className="login__form-control">
                  <input
                    type="password"
                    id="confirm-password"
                    autoComplete="off"
                    onChange={(e) => handleConfirmPasswordChange(e)}
                  />
                </div>
              </div>

              <div className="login__form-group">
                <button onClick={(e) => handleSignup(e)}>signup</button>
              </div>
            </form>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Signup;
