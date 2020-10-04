import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'

const VirusIconBig = styled(Parallax)`
  position: absolute;
  width: 20rem;
  right: 0;

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 30rem;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 43.5rem;
  }

  img {
    width: 100%;
  }
`

export default VirusIconBig