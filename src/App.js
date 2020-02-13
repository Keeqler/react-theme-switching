import React from 'react';
import { ThemeProvider } from 'styled-components';

import dark from './themes/dark';
import light from './themes/light';

import GlobalStyles from './components/GlobalStyles';
import Main from './components/Main/Main';

import usePersistentTheme from './hooks/usePersistentTheme';

const App = () => {
  const [theme, toggleTheme] = usePersistentTheme();

  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <GlobalStyles />
      <Main toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

export default App;
