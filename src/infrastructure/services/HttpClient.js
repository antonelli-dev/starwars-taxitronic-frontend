import axios from 'axios';

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL, 
  timeout: 40000,
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API call error:', error);
    return Promise.reject(error);
  }
);

export default httpClient;
