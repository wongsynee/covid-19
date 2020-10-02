import styled from 'styled-components'

const imageSize = '12rem'

export const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.colour.white};
  padding: 3rem 3vw;
  color: ${({ theme }) => theme.colour.havelockBlue};
`

export const ImageCircleWrapper = styled.div`
  overflow: hidden;
  width: ${imageSize};
  height: ${imageSize};
  margin: 0 auto;
`

export const Image = styled.img`
  max-width: ${imageSize};
`
