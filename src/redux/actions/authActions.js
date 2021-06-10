import * as API from '../../api/AuthAPI';
import { LOGIN } from '../actionTypes';

export const signUp = (usernameAndPassword) => async (dispatch) => {};

export const logIn = (usernameAndPassword) => async (dispatch) => {
  try {
    // data = {success: true, token: _valid_token_}
    const { data: payload } = await API.logIn(usernameAndPassword);
    dispatch({ type: LOGIN, payload });
  } catch (error) {
    console.log(`Error: Bad request!`);
  }
};
