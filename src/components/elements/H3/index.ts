import styled from 'styled-components'

const H3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.default};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`

export default H3