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
  selectedCountry2Data?: ISelectedCountryData;
}

const CountryComparison = ({
  selectedCountry1Data,
  selectedCountry2Data,
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
      <Heading>
        {selectedCountry2Data?.name}
      </Heading>
      {selectedCountry2Data && (
        <InfoList
          isReversed
          list={selectedCountry2Data.list}
        />
      )}
    </CountryColumn>
  </CountryRow>
)

export default CountryComparison