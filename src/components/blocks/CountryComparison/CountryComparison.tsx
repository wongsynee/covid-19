import React from 'react'
import Media from 'react-media'

import { theme } from '../../../theme/Theme'
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
  <Media queries={theme.breakpoints}>
    {matches => (
      <Main>
        <CountryRow>
          <CountryColumn>
            {selectedCountry1Data && (
              <>
                <Heading>
                  {selectedCountry1Data.name}
                </Heading>
                <InfoList
                  isReversed={!matches.lg}
                  list={selectedCountry1Data.list}
                />
              </>
            )}
          </CountryColumn>
          <CountryColumn>
            {selectedCountry2Data && (
              <>
                <Heading>
                  {selectedCountry2Data.name}
                </Heading>
                <InfoList
                  isReversed
                  list={selectedCountry2Data.list}
                />
              </>
            )}
          </CountryColumn>
        </CountryRow>
      </Main>
    )}
  </Media>
)

export default CountryComparison