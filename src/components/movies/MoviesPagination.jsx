import { useState, useEffect } from 'react';
import styled from '@emotion/styled/macro';

import {getSearchedMovies} from '../../service/axiosCalls';

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const PaginationButton = styled.button`
  cursor: pointer;
  color: #fff;
  border: ${props =>
          props.active ? 'none' : '2px solid orange'
  };;
  border-radius: 4px;
  padding: 10px;
  margin: 0px 5px;
  background-color: ${props =>
          props.active ? 'orange' : 'grey'
  };
  
  &:hover {
    background-color: orange;
  }
`

const MoviesPagination = ({ movies, setMovies, searchedMovie }) => {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect( () => {
        async function fetchData() {
            const foundMovies = await getSearchedMovies(searchedMovie, currentPage);
            setMovies(foundMovies);
        }
        fetchData();
    }, []);

    const getPreviousPage = currentPage === 1 ? null : (
        <PaginationButton onClick={() => setCurrentPage(currentPage-1)}>
            {currentPage - 1}
        </PaginationButton>)

    const getFollowingPage = (
        <PaginationButton onClick={() => setCurrentPage(currentPage+1)}>
            {currentPage + 1}
        </PaginationButton>
    );

    return (
        <Container>
            {getPreviousPage}
            <PaginationButton active>{currentPage}</PaginationButton>
            {getFollowingPage}
        </Container>)
}

export default MoviesPagination;
