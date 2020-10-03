import React, { useEffect } from 'react'

import { IWorldTotal } from '../../constants/interface'
import { CaseTypes } from '../../constants/enums'
import PageMargin from '../../components/elements/PageMargin'
import Header from '../../components/blocks/Header'
import Worldwide from '../../components/blocks/Worldwide'
import Footer from '../../components/blocks/Footer'

interface ICurrentCasesProps {
  worldTotal?: IWorldTotal[];
  getData(): void;
}

const CurrentCases = ({
  worldTotal,
  getData,
}: ICurrentCasesProps) => {
  // Get data from the `/data` endpoint on mount.
  useEffect(() => {
    getData()
  }, [getData])

  console.log('worldTottas', worldTotal)

  return (
    <PageMargin>
      <Header />
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