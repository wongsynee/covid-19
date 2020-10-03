import { TotalCaseTypes } from './enums'

export interface IAction<P> {
  type: string;
  payload: P;
}

export interface IWorldTotal {
  type: TotalCaseTypes;
  amount: number;
}

export interface IData {
  worldTotal?: IWorldTotal[];
}
