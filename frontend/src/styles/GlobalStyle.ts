import Reset from './reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${Reset}
  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'BMkkubulimTTF-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2410-1@1.0/BMkkubulimTTF-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'LeeSeoyun';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/LeeSeoyun.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}


  :root {
    --min-width: 375px;
    --max-width: 375px;
  }

  html,
  body {
    font-size: 62.5%;
    scrollbar-width: none;
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-behavior: smooth;
    background-color: ${({ theme }) => theme.colors.lightyellow};
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

  #root {
    width: 100%;
    min-width: var(--min-width);
    max-width: var(--max-width);
    min-height: 100dvh;
    background-color: ${({ theme }) => theme.colors.lightyellow};
    margin: 0 auto;
  }

  @media (min-width: 430px) {
    #root {
        max-width: var(--max-width);
        box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);

    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyle;
