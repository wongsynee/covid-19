import produce from 'immer'
import { createSelector } from 'reselect'

import { IAction } from '../utils/redux'
import { CaseTypes } from '../constants/enums'
import {
  IData,
  IWorldTotal,
  ICountriesList,
  IAPICountry,
  ISelectedCountryData,
} from '../constants/interface'
import {
  SET_DATA,
  SET_SELECTED_COUNTRY_1,
  SET_SELECTED_COUNTRY_2,
} from '../actions'

export interface IState {
  data?: IData;
  worldTotal?: IWorldTotal[];
  countriesList?: ICountriesList[];
  selectedCountry1?: string;
  selectedCountry2?: string;
  selectedCountry1Data?: ISelectedCountryData;
}

const initialState: IState = {
  data: undefined,
  worldTotal: undefined,
  countriesList: undefined,
  selectedCountry1: undefined,
  selectedCountry2: undefined,
  selectedCountry1Data: undefined,
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
        case SET_SELECTED_COUNTRY_1:
          draft.selectedCountry1 = action.payload
          break
        case SET_SELECTED_COUNTRY_2:
          draft.selectedCountry2 = action.payload
          break
      }
    })
  )
}

const dataSelector = (state: IState) => state.data
const selectedCountry1Selector = (state: IState) => state.selectedCountry1

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

const selectedCountry1DataState = createSelector(
  [dataSelector, selectedCountry1Selector],
  (data, selectedCountry1) => {
    if (data?.Countries && selectedCountry1) {
      const selectedCountry = data?.Countries.find((country: IAPICountry) => (
        country.Slug === selectedCountry1
      ))
      if (selectedCountry) {
        return {
          name: selectedCountry.Country,
          list: [
            {
              type: CaseTypes.Confirmed,
              amount: selectedCountry.NewConfirmed,
              label: 'New confirmed',
            },
            {
              type: CaseTypes.Confirmed,
              amount: selectedCountry.TotalConfirmed,
              label: 'Total confirmed',
            },
            {
              type: CaseTypes.Deaths,
              amount: selectedCountry.NewDeaths,
              label: 'New deaths',
            },
            {
              type: CaseTypes.Deaths,
              amount: selectedCountry.TotalDeaths,
              label: 'Total deaths',
            },
            {
              type: CaseTypes.Recovered,
              amount: selectedCountry.NewRecovered,
              label: 'New recovered',
            },
            {
              type: CaseTypes.Recovered,
              amount: selectedCountry.TotalRecovered,
              label: 'Total recovered',
            },
          ],
        }
      }
      return undefined
    }
  },
)

const selectors = {
  data: dataState,
  worldTotal: worldTotalState,
  countriesList: countriesListState,
  selectedCountry1Data: selectedCountry1DataState,
}

export { reducer, selectors }