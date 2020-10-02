import React, { useEffect } from 'react'

import CenteredBlock from '../../components/blocks/CenteredBlock'
import Header from '../../components/blocks/Header'

// ## NOTE: Update types here.
interface IProfileProps {
  profile?: any;
  getData(): void;
}

const Profile = ({
  profile,
  getData,
}: IProfileProps) => {
  // Get data from the `/data` endpoint on mount.
  useEffect(() => {
    getData()
  }, [getData])

  return (
    <>
      <CenteredBlock>
        Hello World
      </CenteredBlock>
    </>
  )
}

export default Profile
