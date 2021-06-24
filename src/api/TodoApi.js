import axios from 'axios';
import { API_URL } from '../config/api';

export const getAllTodos = async (token) => {
  return await axios.get(`${API_URL}/todos`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const createTodo = async (token, todo) => {
  const headers = { Authorization: `Bearer ${token}` };

  return await axios.post(`${API_URL}/todos`, todo, { headers });
};
