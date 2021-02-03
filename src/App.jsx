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
          background: url('https://i.pinimg.com/originals/ad/47/af/ad47af29ad50df1477b9413f9d521db0.jpg');
          font-family: 'Roboto', sans-serif;
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
