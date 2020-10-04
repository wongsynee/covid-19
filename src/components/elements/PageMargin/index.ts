import styled from 'styled-components'

const PageMargin = styled.div`
  /* Position and overflow hidden are set
  to crop off images that sit on the edge */
  position: relative;
  overflow: hidden;
  margin: 1.5rem;
  min-height: 100vh;

  @media ${({ theme }) => theme.breakpoints.lg} {
    margin: 2rem;
  }
`

export default PageMargin