import React, { useState } from 'react';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import Movies from './movies/Movies';

const Site = () => {
  const [movies, setMovies] = useState([]);

  return (
    <div>
      <MainHeader setMovies={setMovies} />
      <Movies movies={movies} />
      <MainFooter />
    </div>
  )
}

export default Site;
