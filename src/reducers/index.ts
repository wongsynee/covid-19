import produce from 'immer'
import { createSelector } from 'reselect'

import { IAction } from '../utils/redux'
import { IData } from '../constants/interface'
import { SET_DATA } from '../actions'

// ## NOTE: Update types here.
export interface IProfileState {
  data?: IData;
  profile?: any;
}

const initialState: IProfileState = {
  data: undefined,
  profile: undefined,
}

const reducer = (state = initialState, action: IAction<any>) => {
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

const dataSelector = (state: IProfileState) => state.data

const dataState = createSelector(
  [dataSelector],
  data => data,
)

const profileState  = createSelector(
  [dataSelector],
  data => data && data.profile,
)

const selectors = {
  data: dataState,
  profile: profileState,
}

export { reducer, selectors }