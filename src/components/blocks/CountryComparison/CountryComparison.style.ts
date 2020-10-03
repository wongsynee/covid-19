import styled from 'styled-components'

import H2 from '../../elements/H2'

export const CountryRow = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`

export const CountryColumn = styled.div`
  width: 50%;
  padding: 0 6rem;
  text-align: left;
  min-height: 35rem;

  &:first-child {
    text-align: right;
    border-right:
      .1rem solid ${({ theme }) => theme.colour.ceriseRed};
  }
`

export const Heading = styled(H2)`
  margin-bottom: 5rem;
`