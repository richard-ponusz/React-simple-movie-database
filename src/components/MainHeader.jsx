import { useState } from 'react';
import styled from '@emotion/styled';

import Input from '../shared/reusable_components/Input';

import { getSearchedMovies } from '../service/service';

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

const MainHeader = ({ setMovies }) => {
  const [searchedMovie, setSearchedMovie] = useState('');

  /**a
   * Calls the function the handles the async call for search movies
   * 
   * @param {*} searchedMovie 
   */
  const handleServiceCall = async (searchedMovie) => {
    handleResetSearch();
    const foundMovies = await getSearchedMovies(searchedMovie);
    setMovies(foundMovies);
  }

  const handleKeyPress = (keyEvent) => {

    if (keyEvent.key === "Enter") {
      handleServiceCall(searchedMovie)
    }
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
          onKeyPress={handleKeyPress}
        />
      </Form>
    </Container>
  )
}

export default MainHeader;
