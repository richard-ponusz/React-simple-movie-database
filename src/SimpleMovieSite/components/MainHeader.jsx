import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';


import requestSearchedMovies from '../service/service';
import Button from '../shared/reusable_components/Button';

const Container = styled.div`
  backgroundColor: red;
  margin: 2rem auto;
`

const Header = ({ setMovies }) => {
  const [searchedMovie, setSearchedMovie] = useState('');

  /**a
   * Calls the function the handles the async call for search movies
   * 
   * @param {*} searchedMovie 
   */
  const handleServiceCall = async (searchedMovie) => {
    const foundMovies = await requestSearchedMovies(searchedMovie);
    console.log('in Header: ', foundMovies);
    setMovies(foundMovies);
  }

  /**
   * Handles movie search input field changes
   * 
   * @param {string} searchedText The search input field's value
   */
  const handleSearchInputChanges = (searchedText) => {
    setSearchedMovie(searchedText)
  }

  /**
   * Resets the searched movie
   */
  const handleResetSearch = () => {
    setSearchedMovie('');
  }

  return (
    <Container>
      <input
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
      />
    </Container>
  )
}

export default Header;
