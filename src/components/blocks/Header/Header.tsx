import React from 'react'

import Logo from '../../../images/logo-covid-19-meter.svg'
import {
  HeaderWrapper,
  ImageCircleWrapper,
  Image,
} from './Header.style'

interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
  return (
    <HeaderWrapper>
      <ImageCircleWrapper>
        <Image
          src={Logo}
          alt="COVID-19 meter"
        />
      </ImageCircleWrapper>
    </HeaderWrapper>
  )
}

export default Header