import styled from 'styled-components'

const H2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight:  ${({ theme }) => theme.fontWeight.semiBold};
`

export default H2