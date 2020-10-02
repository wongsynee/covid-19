import { connect } from 'react-redux'

import {
  IProfileState,
  selectors,
} from '../../reducers'
import { GET_DATA } from '../../actions'

import Profile from '.'

const mapStateToProps = (state: IProfileState) => {
  return ({
    profile: selectors.profile(state),
  })
}

const actionCreators = {
  getData: GET_DATA.request,
}

export default connect(mapStateToProps,actionCreators)(Profile)
