import { CaseTypes } from './enums'

export interface IAction<P> {
  type: string;
  payload: P;
}

export interface IWorldTotal {
  type: CaseTypes;
  amount: number;
}

export interface ICountriesList {
  value: string;
  label: string;
}

export interface ISelectedCountryList {
  type: CaseTypes;
  amount: number;
  label: string;
}

export interface ISelectedCountryData {
  name: string;
  list: ISelectedCountryList[]
}

interface IAPIGlobal {
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export interface IAPICountry extends IAPIGlobal {
  Country: string;
  CountryCode: string;
  Slug: string;
  Date: string;
}

export interface IData {
  Global?: IAPIGlobal;
  Countries?: IAPICountry[];
}
