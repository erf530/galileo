import React, { Fragment } from 'react';
import { Main } from './Main.tsx';
import { Navigation } from './component/Navigation';

function App() {
  return (
    <Fragment>
      <Navigation />
      <Main />
    </Fragment>
  );
}

export default App;
