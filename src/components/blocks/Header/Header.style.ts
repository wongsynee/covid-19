import styled from 'styled-components'

import { theme } from '../../../theme/Theme'

const imageSize = '12rem'

export const HeaderWrapper = styled.header`
  background: ${theme.colours.white};
  padding: 3rem 3vw;
`

export const ImageCircleWrapper = styled.div`
  border-radius: ${theme.borderRadius.circle};
  overflow: hidden;
  width: ${imageSize};
  height: ${imageSize};
  margin: 0 auto;
`

export const Image = styled.img`
  max-width: ${imageSize};
`
