import React from 'react'

import { LINKS } from '../../../constants/variables'
import Paragraph from '../../elements/Paragraph'
import Link from '../../elements/Link'

const Disclaimer = () => (
  <Paragraph>
    Data is sourced from {' '}
    <Link href={LINKS.johnsHopkins} target="_blank">Johns Hopkins CSSE</Link> | {' '}
    API is provided by {' '}
    <Link href={LINKS.covid19API} target="_blank">www.covid19api.com</Link>
    <br />
    Icons made by {' '}
    <Link href={LINKS.freepik} target="_blank">Freepik</Link> {' '}
    from {' '}
    <Link href={LINKS.flaticon} target="_blank">www.flaticon.com</Link>
  </Paragraph>
)

export default Disclaimer