export interface IAction<P> {
  type: string,
  payload: P,
}

export type ActionCreator = <T>(payload?: T) => IAction<T>

export interface ISignalAction {
  REQUEST: string,
  SUCCESS: string,
  FAILURE: string,
  request: ActionCreator,
  success: ActionCreator,
  failure: ActionCreator,
}

export const createSignalAction = (reducerName: string, base: string): ISignalAction => ({
  REQUEST: `SIGNAL/${reducerName}/${base}/REQUEST`,
  SUCCESS: `SIGNAL/${reducerName}/${base}/SUCCESS`,
  FAILURE: `SIGNAL/${reducerName}/${base}/FAILURE`,
  request: createActionCreator(`SIGNAL/${reducerName}/${base}/REQUEST`),
  success: createActionCreator(`SIGNAL/${reducerName}/${base}/SUCCESS`),
  failure: createActionCreator(`SIGNAL/${reducerName}/${base}/FAILURE`),
})

export const createDeltaAction = (reducerName: string, base: string): string => {
  return `DELTA/${reducerName}/${base}`
}

export const createActionCreator = (action: string): ActionCreator => {
  return (arg: any): IAction<any> => {
    return {
      type: action,
      payload: arg,
    }
  }
}
