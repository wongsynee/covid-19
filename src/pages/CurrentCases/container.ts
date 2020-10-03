import { connect } from 'react-redux'

import {
  IState,
  selectors,
} from '../../reducers'
import { GET_DATA } from '../../actions'
import CurrentCases from '.'

const mapStateToProps = (state: IState) => {
  return ({
    worldTotal: selectors.worldTotal(state),
    countriesList: selectors.countriesList(state),
  })
}

const actionCreators = {
  getData: GET_DATA.request,
}

export default connect(mapStateToProps,actionCreators)(CurrentCases)