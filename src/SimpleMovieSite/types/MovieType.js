import PropTypes from "prop-types";

const MovieType = {
  title: PropTypes.string,
}

const MoviesType = {
  movies: PropTypes.arrayOf(MovieType),
}

export default [MovieType, MoviesType];
