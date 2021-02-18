import MoviesType from '../types/MovieType';
import styled from '@emotion/styled/macro';

import RenderMovie from './movies/RenderMovie';
import MoviesPagination from "./movies/MoviesPagination";

const Container = styled.div`
  background-color: #ecf0f1;
  padding: 1rem;
`

const MoviesList = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 1rem;
`

const Movies = ({ movies, setMovies, searchedMovie}) => {

  const renderMovies = () => {
    if (!movies) {
      return;
    }
    return movies.map(movie => <RenderMovie movie={movie} key={movie.id} />)
  }

  return (
    <Container>
      {movies ? null : 'No movies searched for as of yet! Find the movie you are looking for!'}
      <MoviesList>
        {renderMovies()}
      </MoviesList>
      <MoviesPagination movies={movies} setMovies={setMovies} searchedMovie={searchedMovie} />
    </Container>
  )
}

Movies.propTypes = {
  movies: MoviesType,
}

export default Movies;
