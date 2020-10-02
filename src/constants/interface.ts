export interface IAction<P> {
  type: string;
  payload: P;
}

export interface IWorldTotal {
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export interface IData {
  worldTotal?: IWorldTotal;
}
