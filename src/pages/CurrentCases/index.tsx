import React, { useEffect } from 'react'

// import { IWorldTotal } from '../../constants/interface'
import { TotalCaseTypes } from '../../constants/enums'
import PageMargin from '../../components/elements/PageMargin'
import Header from '../../components/blocks/Header'
import Worldwide from '../../components/blocks/Worldwide'
import Footer from '../../components/blocks/Footer'

interface ICurrentCasesProps {
  // worldTotal?: IWorldTotal[];
  getData(): void;
}

const CurrentCases = ({
  // # TODO: Do something with worldTotal.
  // worldTotal,
  getData,
}: ICurrentCasesProps) => {
  // Get data from the `/data` endpoint on mount.
  useEffect(() => {
    getData()
  }, [getData])

  // # TODO: Instead of hardcoding cases,
  // pass it down from the reducer.
  const worldTotal = [
    {
      type: TotalCaseTypes.Confirmed,
      amount: 33635750,
    },
    {
      type: TotalCaseTypes.Deaths,
      amount: 1007689,
    },
    {
      type: TotalCaseTypes.Recovered,
      amount: 23383120,
    },
  ]

  return (
    <PageMargin>
      <Header />
      <Worldwide
        worldTotal={worldTotal}
      />
      <Footer />
    </PageMargin>
  )
}

export default CurrentCases