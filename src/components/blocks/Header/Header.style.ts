import styled from 'styled-components'

const imageSize = '16rem'

export const HeaderWrapper = styled.header`
  padding: 4rem;
  background:
    linear-gradient(
      -2.3deg,
      ${({ theme }) => theme.colour.softPeach} 15%,
      ${({ theme }) => theme.colour.pippin} 15.1%
    );
`

export const LogoWrapper = styled.div`
  margin-bottom: 10rem;
`

export const Logo = styled.img`
  max-width: ${imageSize};
`

export const TextWrapper = styled.div`
  max-width: 55rem;
`
