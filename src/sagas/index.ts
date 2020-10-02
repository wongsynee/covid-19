import { all, fork } from 'redux-saga/effects'

import { root as uiSagas } from './ui'
import { root as apiSagas } from './api'

// Consolidate all sagas.
export default function * root() {
  yield all([
    fork(uiSagas),
    fork(apiSagas),
  ])
}