import { CaseTypes } from './enums'

export interface IAction<P> {
  type: string;
  payload: P;
}

export interface IWorldTotal {
  type: CaseTypes;
  amount: number;
}

export interface IData {
  worldTotal?: IWorldTotal[];
}
