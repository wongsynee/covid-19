import React, { useEffect } from 'react'

import {
  IWorldTotal,
  ICountriesList,
} from '../../constants/interface'
import PageMargin from '../../components/elements/PageMargin'
import Header from '../../components/blocks/Header'
import Worldwide from '../../components/blocks/Worldwide'
import Footer from '../../components/blocks/Footer'

interface ICurrentCasesProps {
  worldTotal?: IWorldTotal[];
  countriesList?: ICountriesList[];
  getData(): void;
}

const CurrentCases = ({
  worldTotal,
  countriesList,
  getData,
}: ICurrentCasesProps) => {
  // Get data from the `/data` endpoint on mount.
  useEffect(() => {
    getData()
  }, [getData])

  return (
    <PageMargin>
      <Header
        countriesList={countriesList}
      />
      {worldTotal && (
        <Worldwide
          worldTotal={worldTotal}
        />
      )}
      <Footer />
    </PageMargin>
  )
}

export default CurrentCases