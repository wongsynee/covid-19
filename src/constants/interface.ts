import { CaseTypes } from './enums'

export interface IAction<P> {
  type: string;
  payload: P;
}

export interface IWorldTotal {
  type: CaseTypes;
  amount: number;
}

interface IAPIGlobal {
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

interface IAPICountry extends IAPIGlobal {
  Country: string;
  CountryCode: string;
  Slug: string;
  Date: string;
}

export interface IData {
  Global?: IAPIGlobal;
  Countries?: IAPICountry[];
}
