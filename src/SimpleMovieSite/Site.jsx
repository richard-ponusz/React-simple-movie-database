import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import API from './service/api';
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import Movies from './components/Movies';

const Container = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  row-gap: 10px;
  height: 100vh;
`

const Site = () => {
  const [movies, setMovies] = useState([]);

  const fetchtPopularMovies = async () => {
    const movies = await API.get('/movie/popular').then(
      ({ data }) => data.results
    ).catch(error => console.log(error));
    setMovies(movies);
  }

  useEffect(() => {
    fetchtPopularMovies();
  }, []);

  return (
    <Container>
      <MainHeader setMovies={setMovies} />
      <Movies movies={movies} />
      <MainFooter />
    </Container>
  )
}

export default Site;
