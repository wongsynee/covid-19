import styled from 'styled-components'

import H2 from '../../elements/H2'

export const CountryRow = styled.section`
  @media ${({ theme }) => theme.breakpoints.lg} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`

export const CountryColumn = styled.div`
  text-align: left;
  padding-bottom: 5rem;

  &:first-child {
    margin-bottom: 5rem;
    border-bottom:
      .1rem solid ${({ theme }) => theme.colour.ceriseRed};
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 50%;
    padding: 0 6rem;
    min-height: 35rem;

    &:first-child {
      margin-bottom: 0;
      border-bottom: 0;
      text-align: right;
      border-right:
        .1rem solid ${({ theme }) => theme.colour.ceriseRed};
    }
  }
`

export const Heading = styled(H2)`
  margin-bottom: 5rem;
`