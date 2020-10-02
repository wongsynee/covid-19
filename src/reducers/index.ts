import produce from 'immer'
import { createSelector } from 'reselect'

import { IAction } from '../utils/redux'
import {
  IData,
  IWorldTotal,
} from '../constants/interface'
import { SET_DATA } from '../actions'

export interface IState {
  data?: IData;
  worldTotal?: IWorldTotal;
}

const initialState: IState = {
  data: undefined,
  worldTotal: undefined,
}

const reducer = (
  state = initialState,
  action: IAction<any>,
) => {
  return (
    produce(state, draft => {
      switch (action.type) {
        case SET_DATA:
          draft.data = action.payload
          break
      }
    })
  )
}

const dataSelector = (state: IState) => state.data

const dataState = createSelector(
  [dataSelector],
  data => data,
)

const worldTotalState  = createSelector(
  [dataSelector],
  data => data && data.worldTotal,
)

const selectors = {
  data: dataState,
  worldTotal: worldTotalState,
}

export { reducer, selectors }