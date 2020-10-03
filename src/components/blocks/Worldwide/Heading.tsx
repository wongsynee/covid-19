import React from 'react'

import H2 from '../../elements/H2'
import { HeadingWrapper } from './Worldwide.style'

const Heading = () => (
  <HeadingWrapper>
    <H2>
      <span role="img" aria-label="World emoji">🌏</span> {' '}
      Total Coronavirus cases worldwide
    </H2>
  </HeadingWrapper>
)

export default Heading
