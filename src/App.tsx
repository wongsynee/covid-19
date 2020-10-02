import React from 'react'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'

import { store } from './store'
import { GlobalStyle } from './theme/Global.style'
import Profile from './pages/Profile/container'

const App = () => {
  return (
    <Provider store={store}>
      <Helmet>
        <title>COVID-19 meter</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;800"
        />
      </Helmet>
      <GlobalStyle />
      <Profile />
    </Provider>
  )
}

export default App
