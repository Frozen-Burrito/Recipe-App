import React from 'react';
import './index.css';

import { GlobalProvider } from './context/globalContext';
import Pages from './pages';

function App() {
  return (
    <GlobalProvider>
      <Pages />
    </GlobalProvider>
  );
}

export default App;
