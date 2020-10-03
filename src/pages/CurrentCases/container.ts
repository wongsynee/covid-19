import { connect } from 'react-redux'

import {
  IState,
  selectors,
} from '../../reducers'
import {
  GET_DATA,
  setSelectedCountry1,
} from '../../actions'
import CurrentCases from '.'

const mapStateToProps = (state: IState) => {
  return ({
    worldTotal: selectors.worldTotal(state),
    countriesList: selectors.countriesList(state),
    selectedCountry1Data: selectors.selectedCountry1Data(state),
  })
}

const actionCreators = {
  getData: GET_DATA.request,
  setSelectedCountry1,
}

export default connect(mapStateToProps,actionCreators)(CurrentCases)