import React from 'react'

import InfoList from '../../elements/InfoList'
import { CaseTypes } from '../../../constants/enums'
import { ISelectedCountryData } from '../../../constants/interface'
import {
  CountryRow,
  CountryColumn,
  Heading,
} from './CountryComparison.style'

interface ICountryComparisonProps {
  selectedCountry1Data?: ISelectedCountryData;
}

const CountryComparison = ({
  selectedCountry1Data,
}: ICountryComparisonProps) => (
  <CountryRow>
    <CountryColumn>
      <Heading>
        {selectedCountry1Data?.name}
      </Heading>
      {selectedCountry1Data && (
        <InfoList
          list={selectedCountry1Data.list}
        />
      )}
    </CountryColumn>
    <CountryColumn>
      {/* # TODO: Remove hardcoded lists. */}
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