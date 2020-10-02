import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

import { theme } from './Theme'

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  html,
  body {
    height: auto;
    width: 100%;
    overflow-x: hidden;
  }

  html {
    font-size: 62.5%; // [1]
  }

  body {
    background-color: ${theme.colour.white};
    color: ${theme.colour.fiord};
    font: normal normal ${theme.fontWeight.regular} ${theme.fontSize.default}/1.2 ${theme.font.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
  }

  p {
    margin: 0 0 1rem;
  }

  ::selection {
    background-color: ${theme.colour.ceriseRed};
    color: ${theme.colour.white};
  }

  ::-moz-selection {
    background-color: ${theme.colour.ceriseRed};
    color: ${theme.colour.white};
  }
`