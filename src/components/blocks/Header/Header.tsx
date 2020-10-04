import React from 'react'
import Media from 'react-media'

import { theme } from '../../../theme/Theme'
import { ICountriesList } from '../../../constants/interface'
import VirusIconBig from '../../elements/VirusIconBig'
import virusSrc from '../../../images/icon-virus.svg'
import PillIcon from '../../elements/PillIcon'
import pillSrc from '../../../images/icon-pill.svg'
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
  <Media queries={theme.breakpoints}>
    {matches => (
      <HeaderWrapper role="banner">
        <Logo />
        <Heading />
        <VirusIconBig
          y={[200, -100]}
          x={[50, 50]}
        >
          <img src={virusSrc} alt="Virus icon" />
        </VirusIconBig>
        <PillIcon
          y={matches.lg ? [340, -100] : [450, -50]}
          x={[0, 0]}
        >
          <img src={pillSrc} alt="Pill icon" />
        </PillIcon>
        <Form
          countriesList={countriesList}
          setSelectedCountry1={setSelectedCountry1}
          setSelectedCountry2={setSelectedCountry2}
        />
      </HeaderWrapper>
    )}
  </Media>
)

export default Header