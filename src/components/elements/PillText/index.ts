import styled, { css } from 'styled-components'

import { CaseTypes } from '../../../constants/enums'

interface HTMLSpanElement {
  type?: CaseTypes;
}

const bluePill = css`
  background-color: ${({ theme }) => theme.colour.havelockBlue};
`

const redPill = css`
  background-color: ${({ theme }) => theme.colour.ceriseRed};
`

const greenPill = css`
  background-color: ${({ theme }) => theme.colour.mantis};
`

export const PillText = styled.span<HTMLSpanElement>`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: 1rem;
  color: ${({ theme }) => theme.colour.white};
  ${({ type }) => {
    switch (type) {
      case CaseTypes.Confirmed:
        return bluePill
      case CaseTypes.Deaths:
        return redPill
      case CaseTypes.Recovered:
      default:
        return greenPill
    }
  }}
`

export default PillText