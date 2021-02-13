import API from './api';

/**
 * Handles API call to the MovieDB with the searched movie's title
 * 
 * @param {string} searchedMovie, the searched Movie title
 * @returns {[movies]} returns an array of found movies
 */
export const getSearchedMovies = (searchedMovie) => {
  return API.get(`/search/movie`, {
    params: {
      query: searchedMovie,
    }
  })
    .then(({ data }) => {
      return data.results;
    }).catch(error => {
      return console.log(error);
    });
};

/**
 * Fetches the popular movies
 */
export const fetchPopularMovies = async () => {
  return await API.get('/movie/popular').then(
    ({ data }) => data.results
  ).catch(error => console.log(error));
}

