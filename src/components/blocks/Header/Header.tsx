import React from 'react'

import { ICountriesList } from '../../../constants/interface'
import virusSrc from '../../../images/icon-virus.svg'
import VirusIconBig from '../../elements/VirusIconBig'
import Logo from './Logo'
import Heading from './Heading'
import Form from './Form'
import {
  HeaderWrapper,
} from './Header.style'

interface IHeaderProps {
  countriesList?: ICountriesList[];
  setSelectedCountry1(): void;
  setSelectedCountry2(): void;
}

const Header = ({
  countriesList,
  setSelectedCountry1,
  setSelectedCountry2,
}: IHeaderProps) => (
  <HeaderWrapper role="banner">
    <Logo />
    <Heading />
    <VirusIconBig
      y={[200, -100]}
      x={[50, 50]}
    >
      <img src={virusSrc} alt="Virus icon" />
    </VirusIconBig>
    <Form
      countriesList={countriesList}
      setSelectedCountry1={setSelectedCountry1}
      setSelectedCountry2={setSelectedCountry2}
    />
  </HeaderWrapper>
)

export default Header