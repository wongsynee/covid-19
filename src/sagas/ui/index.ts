import { all, takeLatest, put, take, race } from 'redux-saga/effects'

import {
  IAction,
  IData,
} from '../../constants/interface'
import {
  GET_DATA,
  API__GET_DATA,
  setData,
} from '../../actions'

// Initiated on Profile page.
export function * getData() {
  try {
    yield put(API__GET_DATA.request())

    // Wait for a success or failure.
    const { success, failure } = yield race({
      success: take(API__GET_DATA.SUCCESS),
      failure: take(API__GET_DATA.FAILURE),
    })

    if (success) {
      const { payload } = success
      yield put(GET_DATA.success(payload))
    } else {
      const { payload } = failure
      yield put(GET_DATA.failure(payload))
    }
  } catch (error) {
    // Do something with error.
  }
}

// Set data from API.
export function * handleGetDataSuccess(action: IAction<IData>) {
  const { payload } = action
  yield put(setData(payload))
}

// Consolidate UI sagas.
export function * root() {
  yield all([
    takeLatest(GET_DATA.REQUEST, getData),
    takeLatest(GET_DATA.SUCCESS, handleGetDataSuccess),
    // takeLatest(GET_DATA.FAILURE, handleGetDataFailure),
  ])
}