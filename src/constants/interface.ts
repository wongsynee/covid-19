export interface IAction<P> {
  type: string;
  payload: P;
}

export interface IProfile {
  name: string;
}

// ## NOTE: Update types here.
export interface IData {
  profile?: IProfile;
  links?: any;
}