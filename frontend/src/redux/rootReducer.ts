import { persistReducer } from 'redux-persist';
import AuthenticationSlice from "./authentication/slice";
import storage from "./storage";

const authPersistConfig = {
  key: AuthenticationSlice.name,
  storage: storage,
  whitelist: ['token', 'address'],
}

const rootReducer = {
  [AuthenticationSlice.name]: persistReducer(authPersistConfig, AuthenticationSlice.reducer),
}

export default rootReducer;