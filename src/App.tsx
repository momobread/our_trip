import { type ReactNode } from 'react';

import Router from './Router';
import GlobalStyles from './styles/GlobalStyles';

function App(): ReactNode {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
}

export default App;
