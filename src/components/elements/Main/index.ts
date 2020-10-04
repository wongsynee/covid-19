import styled from 'styled-components'

const Main = styled.main`
  padding: 0rem 2.5rem 15rem;
  background:
    linear-gradient(
      2deg,
      ${({ theme }) => theme.colour.havelockBlue} 15%,
      ${({ theme }) => theme.colour.softPeach} 15.1%
    );

  @media ${({ theme }) => theme.breakpoints.lg} {
    padding: 4rem 4rem 15rem;
  }
`

export default Main