import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

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

  useEffect(() => {
    console.log('in Site: ', movies);
  }, [movies]);

  return (
    <Container>
      <MainHeader setMovies={setMovies} />
      <Movies movies={movies} />
      <MainFooter />
    </Container>
  )
}

export default Site;
