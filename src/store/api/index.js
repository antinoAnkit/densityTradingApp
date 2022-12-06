// example of api's using axios.

import axios from 'axios';
import * as config from '../../constants/config.json';

axios.defaults.baseURL = config.baseUrl;

export const API = {
  getLogin: async data => {
    console.log('Login Api');
    const result = await axios({
      method: 'POST',
      url: `users/login`,
      data: data.data,
    });
    return result;
  },

  getSignup: async data => {
    const result = await axios({
      method: 'POST',
      url: `/users/signup`,
      data: data,
    });
    return result;
  },
};
