import styled from '@emotion/styled';

import MovieType from '../types/MovieType'

const Movie = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`

const Poster = styled.img`
  width: 12rem;
  height: 17rem;
`

const Title = styled.p`
  width: 100%;
  text-align: center;
  color: #2c3e50;
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
