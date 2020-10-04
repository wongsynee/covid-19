import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'

const PillIcon = styled(Parallax)`
  position: absolute;
  width: 5rem;
  left: 4rem;

  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 9.4rem;
  }

  img {
    width: 100%;
  }
`

export default PillIcon