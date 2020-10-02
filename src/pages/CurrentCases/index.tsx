import React, { useEffect } from 'react'

import { IWorldTotal } from '../../constants/interface'
import CenteredBlock from '../../components/blocks/CenteredBlock'

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
    <CenteredBlock>
      Hello World
    </CenteredBlock>
  )
}

export default CurrentCases
