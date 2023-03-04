export interface IAction<T> {
  type: string;
  payload: T;
}

export interface Authentication {
  token?: string;
  address?: string;
}

export interface Connection {
  isShowConnectModal: boolean;
  isWrongNetwork: boolean;
}

export interface Application {
  isLoading: boolean;
}
