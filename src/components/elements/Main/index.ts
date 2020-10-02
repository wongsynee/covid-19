import styled from 'styled-components'

export const Main = styled.main`
  padding: 4rem 4rem 15rem;
  background:
    linear-gradient(
      2deg,
      ${({ theme }) => theme.colour.havelockBlue} 15%,
      ${({ theme }) => theme.colour.softPeach} 15.1%
    );
`

export default Main