import styled from 'styled-components'

export const CountryRow = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`

export const CountryColumn = styled.div`
  width: 50%;
  padding: 0 6rem;

  &:first-child {
    border-right:
      .1rem solid ${({ theme }) => theme.colour.ceriseRed};
  }
`
