import axios from 'axios';
import { API_URL } from '../config/api';

export const getAllTodos = async (token) => {
  return await axios.get(`${API_URL}/todos`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
