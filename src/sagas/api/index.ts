import { all, takeLatest, put, call } from 'redux-saga/effects'

import { fetchData } from '../../utils/api'
import { API__GET_DATA } from '../../actions'

// API call to get data.
export function * getAPIData() {
  try {
    const response = yield call(fetchData)
    yield put(API__GET_DATA.success(response))
  } catch (error) {
    yield put(API__GET_DATA.failure(error))
  }
}

// Consolidate API sagas.
export function * root() {
  yield all([
    takeLatest(API__GET_DATA.REQUEST, getAPIData),
  ])
}