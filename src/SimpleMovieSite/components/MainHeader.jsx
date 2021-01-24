import React, { useState } from 'react';
import styled from '@emotion/styled';

import Input from '../shared/reusable_components/Input';
import Button from '../shared/reusable_components/Button';

import requestSearchedMovies from '../service/service';

const Container = styled.div`
  height: 20rem;
  background: linear-gradient(
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.7)
   ), 
   url('https://bgr.com/wp-content/uploads/2016/03/movies-tiles.jpg');
`

const Form = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Header = ({ setMovies }) => {
  const [searchedMovie, setSearchedMovie] = useState('');

  /**a
   * Calls the function the handles the async call for search movies
   * 
   * @param {*} searchedMovie 
   */
  const handleServiceCall = async (searchedMovie) => {
    handleResetSearch();
    const foundMovies = await requestSearchedMovies(searchedMovie);
    setMovies(foundMovies);
  }

  /**
   * Resets the searched movie
   */
  const handleResetSearch = () => {
    setMovies('');
  }

  return (
    <Container>
      <Form>
        <Input
          type="text"
          name="search-movies__input"
          value={searchedMovie}
          onChange={(e) => setSearchedMovie(e.target.value)}
        />
        <Button
          label="Search Movie"
          variant="primary"
          onClick={() => handleServiceCall(searchedMovie)}
        />
        <Button
          label="Reset"
          onClick={handleResetSearch}
          variant="warning"
        />
      </Form>
    </Container>
  )
}

export default Header;
