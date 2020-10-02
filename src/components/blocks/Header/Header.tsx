import React from 'react'

import Logo from './Logo'
import Text from './Text'
import Form from './Form'
import {
  HeaderWrapper,
} from './Header.style'

const Header = () => (
  <HeaderWrapper role="banner">
    <Logo />
    <Text />
    <Form />
  </HeaderWrapper>
)

export default Header