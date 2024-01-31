import { API_BASE_URL, API_KEY } from '@env';
import axios from 'axios';

const instance = axios.create({
  baseURL: API_BASE_URL,  // Do NOT set this option if there is multiple gateway urls
  params: {
    apikey: API_KEY,  // Do NOT set this param if apikey could change or not be needed for some gateways
  },
});

export default instance;