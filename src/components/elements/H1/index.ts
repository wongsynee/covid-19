import styled from 'styled-components'

export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.lg};

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`

export default H1