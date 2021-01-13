import API from './api';

const handleMovieSearch = (searchedMovie) => {
  API.get(`/search/movie`, {
    params: {
      query: searchedMovie,
      include_adult: true,
    }
  })
    .then(({ data }) => {
      const foundMovies = data.results;
      console.log('in service: ', foundMovies);
      return foundMovies;
    }).catch(error => {
      return console.log(error);
    });
};

export default handleMovieSearch;
