import styled from 'styled-components'
import ReactSelect from 'react-select'

const imageSize = '16rem'

export const HeaderWrapper = styled.header`
  padding: 2.5rem 2.5rem 15rem;
  background:
    linear-gradient(
      -2.3deg,
      ${({ theme }) => theme.colour.softPeach} 15%,
      ${({ theme }) => theme.colour.pippin} 15.1%
    );

  @media ${({ theme }) => theme.breakpoints.lg} {
    padding: 4rem 4rem 15rem;
  }
`

export const LogoWrapper = styled.div`
  margin-bottom: 10rem;
`

export const Image = styled.img`
  max-width: ${imageSize};
`

export const HeadingWrapper = styled.div`
  max-width: 55rem;
  margin-bottom: 5rem;
`

export const FormWrapper = styled.form`
  max-width: 70rem;
`

export const Select = styled(ReactSelect)`
  width: 100%;

  &:first-child {
    margin-bottom: 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 47.5%;

    &:first-child {
      margin-bottom: 0;
      margin-right: 5%;
    }
  }
`