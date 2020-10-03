import React from 'react'

import { ICountriesList } from '../../../constants/interface'
import Logo from './Logo'
import Heading from './Heading'
import Form from './Form'
import {
  HeaderWrapper,
} from './Header.style'

interface IHeaderProps {
  countriesList?: ICountriesList[];
}

const Header = ({ countriesList }: IHeaderProps) => (
  <HeaderWrapper role="banner">
    <Logo />
    <Heading />
    <Form countriesList={countriesList} />
  </HeaderWrapper>
)

export default Header