import axios from 'axios';
import APIBearerKey from '../config/APIconfig';

/** Use your Axios key here, More about this: in the Readme.md*/
const accessToken = APIBearerKey;

/**
 * Connects to the Movie DB 
 */
const AxiosAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
  }
});

export default AxiosAPI;
