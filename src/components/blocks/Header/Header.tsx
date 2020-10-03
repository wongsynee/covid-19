import React from 'react'

import Logo from './Logo'
import Heading from './Heading'
import Form from './Form'
import {
  HeaderWrapper,
} from './Header.style'

const Header = () => (
  <HeaderWrapper role="banner">
    <Logo />
    <Heading />
    <Form />
  </HeaderWrapper>
)

export default Header