import React from 'react';
import styled from '@emotion/styled';

import Site from './SimpleMovieSite/Site';
import './App.css';

const Container = styled.div`
  display: grid;
  background-color: yellow;
`

function App() {
  return (
    <Container>
      <Site />
    </Container>
  );
}

export default App;
