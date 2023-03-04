export interface IAction<T> {
  type: string;
  payload?: T;
}

export interface Authentication {
  token?: string;
  address?: string;
}
