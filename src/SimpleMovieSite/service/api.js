import axios from 'axios';
import config from '../../config';

/** Use your API key here, More about this: in the Readme.md*/
const accessToken = config.ACCESS_TOKEN;

/**
 * Connects to the Movie DB 
 */
const API = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
  }
});

export default API;
