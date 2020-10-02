import React from 'react'

import logoSrc from '../../../images/logo-covid-19-meter.svg'
import H1 from '../../elements/H1'
import {
  HeaderWrapper,
  LogoWrapper,
  Logo,
  TextWrapper,
} from './Header.style'

const Header = () => (
  <HeaderWrapper role="banner">
    <LogoWrapper>
      <Logo
        src={logoSrc}
        alt="COVID-19 meter"
      />
    </LogoWrapper>
    <TextWrapper>
      <H1>View currentCoronavirus case numbers</H1>
    </TextWrapper>
  </HeaderWrapper>
)

export default Header