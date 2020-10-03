import React from 'react'

import InfoList from '../../elements/InfoList'
import { CaseTypes } from '../../../constants/enums'
import {
  CountryRow,
  CountryColumn,
  Heading,
} from './CountryComparison.style'

const CountryComparison = () => (
  <CountryRow>
    <CountryColumn>
      <Heading>Malaysia</Heading>
      {/* # TODO: Remove hardcoded lists. */}
      <InfoList
        list={[
          {
            type: CaseTypes.Confirmed,
            amount: 89,
            label: 'New confirmed',
          },
          {
            type: CaseTypes.Confirmed,
            amount: 11224,
            label: 'Total confirmed',
          },
          {
            type: CaseTypes.Deaths,
            amount: 2,
            label: 'New deaths',
          },
          {
            type: CaseTypes.Deaths,
            amount: 136,
            label: 'Total deaths',
          },
          {
            type: CaseTypes.Recovered,
            amount: 28,
            label: 'New recovered',
          },
          {
            type: CaseTypes.Recovered,
            amount: 9967,
            label: 'Total recovered',
          },
        ]}
      />
    </CountryColumn>
    <CountryColumn>
      <Heading>Australia</Heading>
      <InfoList
        isReversed
        list={[
          {
            type: CaseTypes.Confirmed,
            amount: 89,
            label: 'New confirmed',
          },
          {
            type: CaseTypes.Confirmed,
            amount: 11224,
            label: 'Total confirmed',
          },
          {
            type: CaseTypes.Deaths,
            amount: 2,
            label: 'New deaths',
          },
          {
            type: CaseTypes.Deaths,
            amount: 136,
            label: 'Total deaths',
          },
          {
            type: CaseTypes.Recovered,
            amount: 28,
            label: 'New recovered',
          },
          {
            type: CaseTypes.Recovered,
            amount: 9967,
            label: 'Total recovered',
          },
        ]}
      />
    </CountryColumn>
  </CountryRow>
)

export default CountryComparison