import styled from 'styled-components'

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  line-height: ${({ theme }) => theme.lineHeight.default};
  margin-bottom: 2rem;
`

export default Paragraph