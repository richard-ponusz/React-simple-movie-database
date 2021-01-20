import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';

import Site from './SimpleMovieSite/Site';


function App() {
  return (
    <div>
      <Global
        styles={css`
        html, body {
          height: 100%;
          width: 100%;
          margin: 0;
          padding: 0;
          background: #fff;
        }

        body {
          max-width: 1280px;
          margin: 0 auto;
        }
      `}
      />
      <Site />
    </div>
  );
}

export default App;
