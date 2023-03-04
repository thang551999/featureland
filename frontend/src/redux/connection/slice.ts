import { createSlice } from '@reduxjs/toolkit';
import { Connection, IAction } from '../types';

const initialState: Connection = {
  isConnectingMetamask: false,
  showInstallMetamask: false,
  isWrongNetwork: false,
};

export const ConnectionSlice = createSlice({
  name: 'connection',
  initialState,
  reducers: {
    setConnectingMetamask: (state, action: IAction<boolean>) => {
      return {
        ...state,
        isConnectingMetamask: action.payload,
      };
    },
    setShowInstallMetamask: (state, action: IAction<boolean>) => {
      return {
        ...state,
        showInstallMetamask: action.payload,
      };
    },
    setWrongNetwork: (state, action: IAction<boolean>) => {
      return {
        ...state,
        isWrongNetwork: action.payload,
      };
    },
  },
});

export const {
  setConnectingMetamask,
  setShowInstallMetamask,
  setWrongNetwork,
} = ConnectionSlice.actions;

export default ConnectionSlice;
