import React from 'react';

import MoviesType from '../types/MovieType';
import styled from '@emotion/styled/macro';
import RenderMovie from './movies/RenderMovie';

const Container = styled.div`
  background-color: blue;
`

const Movies = ({ movies }) => {

  const renderMovies = () => {
    if (!movies) {
      return;
    }
    return movies.map(movie => <RenderMovie movie={movie} />)
  }

  return (
    <Container>
      <h1>Movies:</h1>
      {renderMovies()}
    </Container>
  )
}

Movies.propTypes = {
  movies: MoviesType,
}

export default Movies;
