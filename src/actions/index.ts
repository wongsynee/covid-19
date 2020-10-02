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

// For API Calls
export const API__GET_DATA: ISignalAction = createSignalAction(`${NAME}/API`, 'API__GET_DATA')