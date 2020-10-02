import React from 'react'

import ProfilePhoto from '../../../images/profile.jpg'
import {
  HeaderWrapper,
  ImageCircleWrapper,
  Image,
} from './Header.style'

interface IHeaderProps {
  profile: {
    name: string;
  };
}

const Header = ({
  profile: { name },
}: IHeaderProps) => {
  return (
    <HeaderWrapper>
      <ImageCircleWrapper>
        <Image src={ProfilePhoto} alt={`${name}'s profile photo`} />
      </ImageCircleWrapper>
    </HeaderWrapper>
  )
}

export default Header