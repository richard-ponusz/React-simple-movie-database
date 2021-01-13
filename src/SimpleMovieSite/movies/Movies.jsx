import React, { useEffect } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  backgroundColor: blue;
`

const Movies = ({ movies = [] }) => {

  useEffect(() => {
    renderMovies();
  }, [movies])

  const renderMovies = () => {
    if (movies.length === 0) {
      return null;
    }

    return movies.map((movie) => {
      return <p key={movie.id}>{movie.title}</p>
    })
  }

  return (
    <Container>
      <h1>Movies:</h1>
      {renderMovies}
    </Container>
  )
}

export default Movies;
