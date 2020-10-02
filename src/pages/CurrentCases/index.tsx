import React, { useEffect } from 'react'

import { IWorldTotal } from '../../constants/interface'
import PageMargin from '../../components/elements/PageMargin'
import Header from '../../components/blocks/Header'
import Worldwide from '../../components/blocks/Worldwide'

interface ICurrentCasesProps {
  worldTotal?: IWorldTotal;
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

  return (
    <PageMargin>
      <Header />
      <Worldwide />
    </PageMargin>
  )
}

export default CurrentCases