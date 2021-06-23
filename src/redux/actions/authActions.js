import * as API from '../../api/AuthAPI';
import { LOGIN, LOGOUT, SIGNUP } from '../actionTypes';

export const signUp = (usernameAndPassword) => async (dispatch) => {
  try {
    const { data } = await API.signUp(usernameAndPassword);
    console.log(data);
    dispatch({ type: SIGNUP, payload: data });
  } catch (error) {
    console.log(`Error: Bad request!`);
  }
};

export const logIn = (usernameAndPassword) => async (dispatch) => {
  try {
    // data = {success: [Boolean], token: [token]}
    const { data } = await API.logIn(usernameAndPassword);
    dispatch({ type: LOGIN, payload: data });
  } catch (error) {
    console.log(`Error: Bad request!`);
    dispatch({ type: LOGIN, payload: { token: null, success: false } });
  }
};

export const logOut = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
