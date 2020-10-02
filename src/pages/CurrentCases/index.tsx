import React, { useEffect } from 'react'

import { IWorldTotal } from '../../constants/interface'

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
    <main>
      Hello World
    </main>
  )
}

export default CurrentCases