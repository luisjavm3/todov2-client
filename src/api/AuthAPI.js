import axios from 'axios';
import { API_URL } from '../config/api';

export const signUp = (usernameAndPassword) =>
  axios.post(`${API_URL}/auth/signup`, usernameAndPassword);

export const logIn = (usernameAndPassword) =>
  axios.post(`${API_URL}/auth/login`, usernameAndPassword);
