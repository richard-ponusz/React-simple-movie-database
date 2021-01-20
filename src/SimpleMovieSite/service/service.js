import API from './api';

/**
 * Handles API call to the MovieDB with the searched movie's title
 * 
 * @param {string} searchedMovie, the searched Movie title
 * @returns {[movies]} returns an array of found movies
 */
const requestSearchedMovies = (searchedMovie) => {
  return API.get(`/search/movie`, {
    params: {
      query: searchedMovie,
      include_adult: true,
    }
  })
    .then(({ data }) => {
      return data.results;
    }).catch(error => {
      return console.log(error);
    });
};

export default requestSearchedMovies;
