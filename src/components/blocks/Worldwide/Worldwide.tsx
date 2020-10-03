import React from 'react'

import { IWorldTotal } from '../../../constants/interface'
import Main from '../../elements/Main'
import Heading from './Heading'
import CaseNumbers from './CaseNumbers'

interface IWorldwideProps {
  worldTotal: IWorldTotal[];
}

const Worldwide = ({
  worldTotal,
}: IWorldwideProps) => (
  <Main>
    <Heading />
    <CaseNumbers
      worldTotal={worldTotal}
    />
  </Main>
)

export default Worldwide