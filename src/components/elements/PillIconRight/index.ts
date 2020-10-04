import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'

const PillIconRight = styled(Parallax)`
  position: absolute;
  width: 5rem;
  right: 2.5rem;

  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 9.4rem;
    right: 4rem;
  }

  img {
    width: 100%;
  }
`

export default PillIconRight