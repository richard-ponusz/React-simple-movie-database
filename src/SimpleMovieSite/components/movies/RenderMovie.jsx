import React from 'react';
import MovieType from '../../types/MovieType'

const RenderMovies = ({ movie }) => {
  return (
    <p>{movie.title}</p>
  )
}

RenderMovies.propTypes = {
  movie: MovieType,
}

export default RenderMovies;
