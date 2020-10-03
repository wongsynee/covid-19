import styled from 'styled-components'

export const PageMargin = styled.div`
  margin: 1.5rem;
  min-height: 100vh;

  @media ${({ theme }) => theme.breakpoints.lg} {
    margin: 2rem;
  }
`

export default PageMargin