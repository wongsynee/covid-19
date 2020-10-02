import styled from 'styled-components'

export const Link = styled.a`
  color: ${({ theme }) => theme.colour.pippin};
  text-decoration: none;
  position: relative;

  &::after {
    content: '';
    display: block;
    background-color: ${({ theme }) => theme.colour.pippin};
    width: 0;
    height: .1rem;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: width ${({ theme }) => theme.transition.speed.default} ease;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`

export default Link