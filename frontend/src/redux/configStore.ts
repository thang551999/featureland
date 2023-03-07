import {
  AnyAction,
  combineReducers,
  configureStore,
  Dispatch,
} from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import rootReducer from './rootReducer';

const persistedReducer = combineReducers(rootReducer);

const makeStore = (preloadedState = {}) => {
  const store = configureStore({
    preloadedState,
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: false,
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  return store;
};

export const wrapper = createWrapper(makeStore, { debug: false });

export type AppState = ReturnType<AppStore['getState']>;

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = Dispatch<AnyAction>;
