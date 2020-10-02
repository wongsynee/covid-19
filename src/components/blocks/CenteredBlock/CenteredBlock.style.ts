import styled from 'styled-components'

import { theme } from '../../../theme/Theme'

const CenteredBlockWrapper = styled.div`
  background: ${theme.colours.white};
  max-width: ${theme.spacer.maxWidth};
  min-height: 100vh;
  margin: 0 auto;
`

export default CenteredBlockWrapper
