import styled from 'styled-components'

const RowFlex = styled.div`
  display: column;

  @media ${({ theme }) => theme.breakpoints.lg} {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

export default RowFlex