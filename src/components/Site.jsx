import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { fetchPopularMovies } from '../service/axiosCalls';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import Movies from './Movies';

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
  const [searchedMovie, setSearchedMovie] = useState('');

  const handleGetPopularMoviesCall = async () => {
    return await fetchPopularMovies();
  }


  useEffect(() => {
    handleGetPopularMoviesCall()
      .then(movies => setMovies(movies))
      .catch(error => console.log(error));
  }, []);

  return (
    <Container>
      <MainHeader searchedMovie={searchedMovie} setSearchedMovie={setSearchedMovie} setMovies={setMovies} />
      <Movies movies={movies} setMovies={setMovies} searchedMovie={searchedMovie} />
      <MainFooter />
    </Container>
  );
}

export default Site;
