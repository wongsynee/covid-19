import styled, { css } from 'styled-components'

import { CaseTypes } from '../../../constants/enums'

interface HTMLSpanElement {
  type?: CaseTypes;
  isReversed?: boolean;
}

interface HTMLLIElement {
  isReversed?: boolean;
}

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const ListItem = styled.li<HTMLLIElement>`
  display: block;
  display: flex;
  flex-direction: ${({ isReversed }) => isReversed ? 'row-reverse' : 'row'};
  justify-content: flex-end;
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`

const blue = css`
  color: ${({ theme }) => theme.colour.havelockBlue};
`

const red = css`
  color: ${({ theme }) => theme.colour.ceriseRed};
`

const green = css`
  color: ${({ theme }) => theme.colour.mantis};
`

export const Amount = styled.span<HTMLSpanElement>`
  font-size: ${({ theme }) => theme.fontSize.default};
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  text-align: ${({ isReversed }) => isReversed ? 'left' : 'right'};
  ${({ type }) => {
    switch (type) {
      case CaseTypes.Confirmed:
        return blue
      case CaseTypes.Deaths:
        return red
      case CaseTypes.Recovered:
      default:
        return green
    }
  }}
`

export const Label = styled.span<HTMLSpanElement>`
  display: inline-block;
  min-width: 16rem;
  text-align: ${({ isReversed }) => isReversed ? 'left' : 'right'};
`
