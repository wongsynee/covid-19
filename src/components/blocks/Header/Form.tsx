import React from 'react'

import { COUNTRIES } from '../../../constants/variables'
import RowFlex from '../../elements/RowFlex'
import {
  FormWrapper,
  Select,
} from './Header.style'

const Form = () => (
  <FormWrapper>
    <RowFlex>
      <Select options={COUNTRIES} />
      <Select options={COUNTRIES} />
    </RowFlex>
  </FormWrapper>
)

export default Form