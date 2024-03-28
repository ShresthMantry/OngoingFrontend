import axios from 'axios';
import { getToken } from '../utils/auth.utils';

const API_URL = 'http://localhost:3000/api/cars';

const addCar = async (carData) => {
  const token = getToken();
  const response = await axios.post(`${API_URL}`, carData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

const getAvailableCars = async () => {
  const response = await axios.get(`${API_URL}/available`);
  return response.data;
};

export { addCar, getAvailableCars };