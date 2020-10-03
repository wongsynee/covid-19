import React from 'react'

import { ICountriesList } from '../../../constants/interface'
import RowFlex from '../../elements/RowFlex'
import {
  FormWrapper,
  Select,
} from './Header.style'

interface IFormProps {
  countriesList?: ICountriesList[];
}

const Form = ({ countriesList }: IFormProps) => (
  <FormWrapper>
    <RowFlex>
      <Select options={countriesList} />
      <Select options={countriesList} />
    </RowFlex>
  </FormWrapper>
)

export default Form