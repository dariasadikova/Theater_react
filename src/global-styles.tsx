import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
		html[data-theme='light'] {
            --theme-background-color: #fff;
            --theme-text-color: #15171a;
  }

  html[data-theme='dark'] {
            --theme-background-color: #15171a;
            --theme-text-color: #fff;
  }

  body {
    background-color: var(--theme-background-color);
    color: var(--theme-text-color);
    /* Другие глобальные стили */
  }
`;



export default GlobalStyles;