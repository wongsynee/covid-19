import produce from 'immer'
import { createSelector } from 'reselect'

import { IAction } from '../utils/redux'
import { CaseTypes } from '../constants/enums'
import {
  IData,
  IWorldTotal,
  ICountriesList,
  IAPICountry,
} from '../constants/interface'
import { SET_DATA } from '../actions'

export interface IState {
  data?: IData;
  worldTotal?: IWorldTotal[];
  countriesList?: ICountriesList[];
}

const initialState: IState = {
  data: undefined,
  worldTotal: undefined,
  countriesList: undefined,
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
  data => {
    if (data?.Global) {
      const {
        TotalConfirmed,
        TotalDeaths,
        TotalRecovered,
      } = data.Global
      return [
        {
          type: CaseTypes.Confirmed,
          amount: TotalConfirmed,
        },
        {
          type: CaseTypes.Deaths,
          amount: TotalDeaths,
        },
        {
          type: CaseTypes.Recovered,
          amount: TotalRecovered,
        },
      ]
    }
  },
)

const countriesListState = createSelector(
  [dataSelector],
  data => {
    if (data?.Countries) {
      return data.Countries.map((country: IAPICountry) => {
        const {
          Country,
          Slug,
        } = country
        return (
          {
            value: Slug,
            label: Country,
          }
        )
      })
    }
  },
)

const selectors = {
  data: dataState,
  worldTotal: worldTotalState,
  countriesList: countriesListState,
}

export { reducer, selectors }