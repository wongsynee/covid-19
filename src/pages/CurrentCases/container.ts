import { connect } from 'react-redux'

import {
  IState,
  selectors,
} from '../../reducers'
import {
  GET_DATA,
  setSelectedCountry1,
  setSelectedCountry2,
} from '../../actions'
import CurrentCases from '.'

const mapStateToProps = (state: IState) => (
  {
    worldTotal: selectors.worldTotal(state),
    countriesList: selectors.countriesList(state),
    selectedCountry1Data: selectors.selectedCountry1Data(state),
    selectedCountry2Data: selectors.selectedCountry2Data(state),
  }
)

const actionCreators = {
  getData: GET_DATA.request,
  setSelectedCountry1,
  setSelectedCountry2,
}

export default connect(mapStateToProps,actionCreators)(CurrentCases)