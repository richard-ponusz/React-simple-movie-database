import axios from 'axios';
// import API_BEARER_KEY from '../local.env';

const API_BEARER_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODU3OWQ1YTE2OTEwOTRmNDUxMzhiMWJiMGJkYmVhNiIsInN1YiI6IjVlY2I3NDJiOGUyZTAwMDAyMDI3NTVhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zU3UMOfwGYqImQ3D1uqd1g-bwyg1bgI-mr-dTHkv3nM';

/**
 * Connects to the Movie DB 
 */
const axiosAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Authorization': `Bearer ${API_BEARER_KEY}`,
  }
});

export default axiosAPI;
