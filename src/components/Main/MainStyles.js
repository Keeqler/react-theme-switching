import styled from 'styled-components';

export default styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 18px;

  header {
    height: 46px;
    padding: 0 40px;
    display: flex;
    align-items: center;
    color: #fff;
    background: linear-gradient(to right, var(--primary), var(--secondary));
    box-shadow: ${({ theme }) =>
      theme.name === 'light' ? '0px 0px 10px 0px rgba(0, 0, 0, 0.75)' : 'none'};
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-grow: 1;

    .primary {
      color: var(--primary-text);
    }

    .secondary {
      color: var(--secondary-text);
    }

    .success {
      color: var(--success-text);
    }

    .error {
      color: var(--error-text);
    }

    button {
      width: 160px;
      height: 40px;
      margin-top: 20px;
      border-radius: 30px;
      font-size: 16px;
      font-weight: 700;
      color: #fff;
      background: var(--primary);
      transition: background 300ms;

      :hover {
        background: var(--secondary);
        cursor: pointer;
      }
    }
  }
`;
