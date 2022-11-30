import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';
import customReset from './customReset.css';

const GlobalStyle = createGlobalStyle`
  ${reset};
  ${customReset};

  * {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gr500};
  }

  li {
    list-style: none;
  }

  ${({ theme }) => {
    return css`
      body {
        font-family: ${theme.fonts.family.main};
        font-weight: ${theme.fonts.weight.normal};
        font-size: ${theme.fonts.size.normal};
      }
    `;
  }}

  h2 {
    font-size: ${({ theme }) => theme.fonts.size.h2};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    word-spacing: .05rem;
    text-align: center;
    margin: 1.5rem auto 3.2rem;
  }

  h3 {
    font-size: ${({ theme }) => theme.fonts.size.h3};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    word-spacing: .05rem;
    width: 90%;
    margin: 1.5rem auto 1.5rem;
  }

  h4 {
    font-size: ${({ theme }) => theme.fonts.size.h4};
    font-weight: ${({ theme }) => theme.fonts.weight.normal};
    word-spacing: .05rem;
    width: 90%;
    margin: 1.5rem auto 1.5rem;
  }

  p {
    font-size: ${({ theme }) => theme.fonts.size.normal};
  }

  label {
    font-size: ${({ theme }) => theme.fonts.size.normal};
  }
`;

export default GlobalStyle;
