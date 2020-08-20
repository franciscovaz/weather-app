import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: F9F9F9;
    color: #000;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  html,
  body,
  #root {
    height: 100vh;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body,
  input,
  button,
  textarea {
    font: 500 1.6rem Poppins;
    color: #6a6180;
  }


  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
