import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary: ${({ theme }) => theme.primary};
    --secondary: ${({ theme }) => theme.secondary};
    --primary-text: ${({ theme }) => theme.primaryText};
    --secondary-text: ${({ theme }) => theme.secondaryText};
    --success-text: ${({ theme }) => theme.successText};
    --error-text: ${({ theme }) => theme.errorText};
    --background: ${({ theme }) => theme.background};
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    border: none;
    background: none;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    background: var(--background);
  }
`;
