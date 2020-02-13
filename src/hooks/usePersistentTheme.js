import { useState, useEffect } from 'react';

export default () => {
  const [theme, setTheme] = useState();

  useEffect(() => setTheme(localStorage.getItem('theme')), []);
  useEffect(() => localStorage.setItem('theme', theme), [theme]);

  return [
    theme,
    () =>
      setTheme(localStorage.getItem('theme') === 'light' ? 'dark' : 'light'),
  ];
};
