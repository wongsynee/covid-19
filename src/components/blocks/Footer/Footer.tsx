import React from 'react'

import WiseWords from './WiseWords'
import Disclaimer from './Disclaimer'
import Copyright from './Copyright'
import { FooterWrapper } from './Footer.style'

const Footer = () => (
  <FooterWrapper>
    <WiseWords />
    <Disclaimer />
    <Copyright />
  </FooterWrapper>
)

export default Footer