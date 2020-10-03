import React, { useEffect } from 'react'

import {
  IWorldTotal,
  ICountriesList,
  ISelectedCountryData,
} from '../../constants/interface'
import PageMargin from '../../components/elements/PageMargin'
import Header from '../../components/blocks/Header'
import Worldwide from '../../components/blocks/Worldwide'
import CountryComparison from '../../components/blocks/CountryComparison'
import Footer from '../../components/blocks/Footer'

interface ICurrentCasesProps {
  worldTotal?: IWorldTotal[];
  countriesList?: ICountriesList[];
  selectedCountry1Data?: ISelectedCountryData;
  selectedCountry2Data?: ISelectedCountryData;
  getData(): void;
  setSelectedCountry1(): void;
  setSelectedCountry2(): void;
}

const CurrentCases = ({
  worldTotal,
  countriesList,
  selectedCountry1Data,
  selectedCountry2Data,
  getData,
  setSelectedCountry1,
  setSelectedCountry2,
}: ICurrentCasesProps) => {
  // Get data from the `/data` endpoint on mount.
  useEffect(() => {
    getData()
  }, [getData])

  return (
    <PageMargin>
      <Header
        countriesList={countriesList}
        setSelectedCountry1={setSelectedCountry1}
        setSelectedCountry2={setSelectedCountry2}
      />
      {worldTotal && (
        <Worldwide
          worldTotal={worldTotal}
        />
      )}
      <CountryComparison
        selectedCountry1Data={selectedCountry1Data}
        selectedCountry2Data={selectedCountry2Data}
      />
      <Footer />
    </PageMargin>
  )
}

export default CurrentCases