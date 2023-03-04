import { createSlice } from "@reduxjs/toolkit";
import { Authentication, IAction } from "../types";

const initialState: Authentication = {
  token: '',
  address: '',
}

export const AuthenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setToken: (state, action: IAction<string>) => {
      return {
        ...state,
        token: action.payload,
      }
    },
    setAddress: (state, action: IAction<string>) => {
      return {
        ...state,
        address: action.payload,
      }
    },
  },
});

export const { setToken, setAddress } = AuthenticationSlice.actions;

export default AuthenticationSlice;