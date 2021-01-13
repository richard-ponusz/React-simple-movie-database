import axios from 'axios';

const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODU3OWQ1YTE2OTEwOTRmNDUxMzhiMWJiMGJkYmVhNiIsInN1YiI6IjVlY2I3NDJiOGUyZTAwMDAyMDI3NTVhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zU3UMOfwGYqImQ3D1uqd1g-bwyg1bgI-mr-dTHkv3nM'

const API = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
  }
});

export default API;
