import styled from 'styled-components'

const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.lg};
  hyphens: auto;

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`

export default H1