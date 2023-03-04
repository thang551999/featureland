import { persistReducer } from 'redux-persist';
import ApplicationSlice from './application/slice';
import AuthenticationSlice from './authentication/slice';
import ConnectionSlice from './connection/slice';
import storage from './storage';

const authPersistConfig = {
  key: AuthenticationSlice.name,
  storage: storage,
  whitelist: ['token', 'address'],
};

const rootReducer = {
  [AuthenticationSlice.name]: persistReducer(
    authPersistConfig,
    AuthenticationSlice.reducer
  ),
  [ConnectionSlice.name]: ConnectionSlice.reducer,
  [ApplicationSlice.name]: ApplicationSlice.reducer,
};

export default rootReducer;
