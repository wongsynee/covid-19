import styled from 'styled-components'

export const HeadingWrapper = styled.div`
  margin-bottom: 5rem;
`

export const WorldwideList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const WorldwideListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2rem;
  transition:
    margin
    ${({ theme }) => theme.transition.speed.default}
    ease;

  @media ${({ theme }) => theme.breakpoints.lg} {
    margin-bottom: 5rem;

    &:nth-child(2) {
      margin-left: 25%;
    }

    &:last-child {
      margin-left: 50%;
      margin-bottom: 0;
    }
  }
`

export const WorldwideListText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  margin-left: 2rem;

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`
