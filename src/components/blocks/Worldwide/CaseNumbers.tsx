import React from 'react'

import { IWorldTotal } from '../../../constants/interface'
import { formatNumber } from '../../../utils/formatters'
import PillText from '../../elements/PillText'
import {
  WorldwideList,
  WorldwideListItem,
  WorldwideListText,
} from './Worldwide.style'

interface ICaseNumbersProps {
  worldTotal: IWorldTotal[];
}

const CaseNumbers = ({
  worldTotal,
} : ICaseNumbersProps) => (
  <WorldwideList>
    {
      worldTotal.map((total, index) => {
        const { type, amount } = total
        return (
          <WorldwideListItem key={`${type}-${index}`}>
            <PillText type={type}>
              {type}
            </PillText>
            <WorldwideListText>
              {formatNumber(amount)}
            </WorldwideListText>
          </WorldwideListItem>
        )
      })
    }
  </WorldwideList>
)

export default CaseNumbers
