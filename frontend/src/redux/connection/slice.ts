import { createSlice } from '@reduxjs/toolkit';
import { Connection, IAction } from '../types';

const initialState: Connection = {
  isShowConnectModal: false,
  isWrongNetwork: false,
};

export const ConnectionSlice = createSlice({
  name: 'connection',
  initialState,
  reducers: {
    setConnectModal: (state, action: IAction<boolean>) => {
      return {
        ...state,
        isShowConnectModal: action.payload,
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

export const { setConnectModal, setWrongNetwork } = ConnectionSlice.actions;

export default ConnectionSlice;
