export interface IAction<T> {
  type: string;
  payload: T;
}

export interface Authentication {
  token?: string;
  address?: string;
}

export interface Connection {
  isConnectingMetamask: boolean;
  showInstallMetamask: boolean;
  isWrongNetwork: boolean;
}

export interface Application {
  isLoading: boolean;
}
