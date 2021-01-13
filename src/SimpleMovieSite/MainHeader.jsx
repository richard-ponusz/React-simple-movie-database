import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import handleMovieSearch from './service/service';
import Button from './shared/reusable_components/Button';

const Container = styled.div`
  backgroundColor: yellow;
`

const Header = ({ setMovies }) => {
  const [searchedMovie, setSearchedMovie] = useState('');

  useEffect(async () => {
    const foundMovies = await handleServiceCall(searchedMovie);
    setMovies(foundMovies);
  }, []);

  const handleServiceCall = (searchedMovie) => {
    return handleMovieSearch(searchedMovie);
  }

  return (
    <Container>
      <input
        type="text"
        name="search-movies__input"
        value={searchedMovie}
        onChange={e => setSearchedMovie(e.target.value)}
      />
      <Button
        label="Search Movie"
        variant="primary"
        handleClick={() => handleSubmitSearch(searchedMovie)}
      />
    </Container>
  )
}

export default Header;
