import { createGlobalStyle, css } from 'styled-components'

export const fontUrl = 'https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i&display=swap'

export const bodyStyles = css``

export const GlobalStyle = createGlobalStyle`
  html {
    ${bodyStyles}
  }
`