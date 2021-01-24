import React from 'react';
import styled from '@emotion/styled';

import MovieType from '../../types/MovieType'

const Movie = styled.div`
  display: block;
  margin: 0 auto;
`

const Poster = styled.img`
  width: 12rem;
  height: 17rem;
`

const Title = styled.p`
text-align: center;
  color: #8e44ad;
`

const RenderMovies = ({ movie }) => {
  return (
    <Movie>
      <Poster src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`poster_${movie.title}`} />
      <Title>{movie.title}</Title>
    </Movie>
  )
}

RenderMovies.propTypes = {
  movie: MovieType,
}

export default RenderMovies;
