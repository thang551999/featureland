import { AppState } from "../configStore";

const selectorConnection= {
  getConnection: (state: AppState) => state.connection,
};

export default selectorConnection;
