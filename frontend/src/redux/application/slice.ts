import { createSlice } from '@reduxjs/toolkit';
import { Application, IAction } from '../types';

const initialState: Application = {
  isLoading: false,
};

export const ApplicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setLoading: (state, action: IAction<boolean>) => {
      return {
        ...state,
        isLoading: action.payload,
      };
    },
  },
});

export const { setLoading } = ApplicationSlice.actions;

export default ApplicationSlice;
