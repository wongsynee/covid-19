import styled from 'styled-components'

import H3 from '../../elements/H3'

export const FooterWrapper = styled.footer`
  padding: 0rem 2.5rem 4rem;
  background-color: ${({ theme }) => theme.colour.havelockBlue};
  color: ${({ theme }) => theme.colour.white};
  text-align: center;

  @media ${({ theme }) => theme.breakpoints.lg} {
    padding: 15rem 4rem 4rem;
  }
`

export const Heading = styled(H3)`
  margin-bottom: 6rem;
`
