import React from 'react'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { store } from './store'
import { GlobalStyle } from './theme/Global.style'
import { theme } from './theme/Theme'
import CurrentCases from './pages/CurrentCases/container'

const App = () => {
  return (
    <Provider store={store}>
      <Helmet>
        <title>
          COVID-19 meter
        </title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;800"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CurrentCases />
      </ThemeProvider>
    </Provider>
  )
}

export default App
