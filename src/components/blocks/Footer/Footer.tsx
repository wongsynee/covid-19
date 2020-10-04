import React from 'react'

import PillIconRight from '../../elements/PillIconRight'
import pillSrc from '../../../images/icon-pill-reverse.svg'
import WiseWords from './WiseWords'
import Disclaimer from './Disclaimer'
import Copyright from './Copyright'
import { FooterWrapper } from './Footer.style'

const Footer = () => (
  <FooterWrapper>
    <PillIconRight
      y={[300, -100]}
      x={[0, 0]}
    >
      <img src={pillSrc} alt="Pill icon" />
    </PillIconRight>
    <WiseWords />
    <Disclaimer />
    <Copyright />
  </FooterWrapper>
)

export default Footer