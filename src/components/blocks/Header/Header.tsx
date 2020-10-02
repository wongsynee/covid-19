import React from 'react'

import Logo from '../../../images/logo-covid-19-meter.svg'
import {
  HeaderWrapper,
  Image,
} from './Header.style'

const Header = () => (
  <HeaderWrapper>
    <Image
      src={Logo}
      alt="COVID-19 meter"
    />
  </HeaderWrapper>
)

export default Header