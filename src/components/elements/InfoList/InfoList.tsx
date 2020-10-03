import React from 'react'

import { ISelectedCountryList } from '../../../constants/interface'
import { formatNumber } from '../../../utils/formatters'
import {
  List,
  ListItem,
  Amount,
  Label,
} from './InfoList.style'

interface IInfoListProps {
  isReversed?: boolean;
  list: ISelectedCountryList[];
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
          <ListItem
            key={`${type}-${index}`}
            isReversed={isReversed}
          >
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