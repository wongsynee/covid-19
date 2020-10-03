import { NAME } from '../identity'
import {
  createSignalAction,
  createDeltaAction,
  createActionCreator,
  ActionCreator,
  ISignalAction,
} from '../utils/redux'

// Signals get data.
export const GET_DATA: ISignalAction = createSignalAction(NAME, 'GET_DATA')

// Sets data.
export const SET_DATA = createDeltaAction(NAME, 'SET_DATA')
export const setData: ActionCreator = createActionCreator(SET_DATA)

// Sets selected country 1.
export const SET_SELECTED_COUNTRY_1 =
  createDeltaAction(NAME, 'SET_SELECTED_COUNTRY_1')
export const setSelectedCountry1: ActionCreator =
  createActionCreator(SET_SELECTED_COUNTRY_1)

// Sets selected country 2.
export const SET_SELECTED_COUNTRY_2 =
  createDeltaAction(NAME, 'SET_SELECTED_COUNTRY_2')
export const setSelectedCountry2: ActionCreator =
  createActionCreator(SET_SELECTED_COUNTRY_2)

// For API Calls
export const API__GET_DATA: ISignalAction = createSignalAction(`${NAME}/API`, 'API__GET_DATA')