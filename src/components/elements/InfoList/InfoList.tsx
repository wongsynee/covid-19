import React from 'react'

import { CaseTypes } from '../../../constants/enums'
import { formatNumber } from '../../../utils/formatters'
import {
  List,
  ListItem,
  Amount,
  Label,
} from './InfoList.style'

interface IInfoListProps {
  isReversed?: boolean;
  list: {
    type: CaseTypes;
    amount: number;
    label: string;
  }[]
}

const InfoList = ({
  isReversed,
  list,
}:IInfoListProps) => (
  <List>
    {
      list.map((item, index) => {
        const { type, amount, label } = item
        return (
          <ListItem isReversed={isReversed}>
            <Amount
              isReversed={isReversed}
              type={type}
            >
              {formatNumber(amount)}
            </Amount>
            <Label isReversed={isReversed}>
              {label}
            </Label>
          </ListItem>
        )
      })
    }
  </List>
)

export default InfoList