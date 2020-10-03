import React from 'react'

import { ICountriesList } from '../../../constants/interface'
import RowFlex from '../../elements/RowFlex'
import {
  FormWrapper,
  Select,
} from './Header.style'

interface IFormProps {
  countriesList?: ICountriesList[];
  setSelectedCountry1(value: string): void;
  setSelectedCountry2(value: string): void;
}

const Form = ({
  countriesList,
  setSelectedCountry1,
  setSelectedCountry2,
}: IFormProps) => (
  <FormWrapper>
    <RowFlex>
      <Select
        isClearable
        options={countriesList}
        onChange={(country: ICountriesList) => (
          setSelectedCountry1(country?.value)
        )}
      />
      <Select
        isClearable
        options={countriesList}
        onChange={(country: ICountriesList) => (
          setSelectedCountry2(country?.value)
        )}
      />
    </RowFlex>
  </FormWrapper>
)

export default Form