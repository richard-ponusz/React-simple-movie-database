import AxiosAPI from './axios';

/**
 * Handles Axios call to the MovieDB with the searched movie's title
 * 
 * @param {string} searchedMovie, the searched Movie title
 * @returns {[movies]} returns an array of found movies
 */
export const getSearchedMovies = (searchedMovie, selectedPage = 1) => {
  return AxiosAPI.get(`/search/movie`, {
    params: {
      query: searchedMovie,
      page: selectedPage
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
  return await AxiosAPI.get('/movie/popular').then(
    ({ data }) => data.results
  ).catch(error => console.log(error));
}

