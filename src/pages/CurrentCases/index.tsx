import React, { useEffect } from 'react'

import { IWorldTotal } from '../../constants/interface'
import Header from '../../components/blocks/Header'

interface ICurrentCasesProps {
  worldTotal?: IWorldTotal;
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

  return (
    <Header />
  )
}

export default CurrentCases