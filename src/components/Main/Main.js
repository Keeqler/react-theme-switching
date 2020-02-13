import React from 'react';

import Container from './MainStyles';

const Main = ({ toggleTheme }) => (
  <Container>
    <header>
      <strong>React Theme Switching</strong>
    </header>
    <main>
      <p className="primary">This is a primary text</p>
      <p className="secondary">
        This is a secondary text, it may be a not so important one
      </p>
      <p className="success">
        This is a success text, which indicates that everything went well
      </p>
      <p className="error">
        This is an error text, which indicates that something went wrong
      </p>
      <button onClick={toggleTheme} type="button">
        Toggle theme
      </button>
    </main>
  </Container>
);

export default Main;
