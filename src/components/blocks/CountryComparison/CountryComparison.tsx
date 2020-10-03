import React from 'react'

import InfoList from '../../elements/InfoList'
import Main from '../../elements/Main'
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
  <Main>
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
  </Main>
)

export default CountryComparison