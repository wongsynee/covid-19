import React from 'react'

import logoSrc from '../../../images/logo-covid-19-meter.svg'
import {
  LogoWrapper,
  Image,
} from './Header.style'

const Logo = () => (
  <LogoWrapper>
    <Image
      src={logoSrc}
      alt="COVID-19 meter"
    />
  </LogoWrapper>
)

export default Logo
