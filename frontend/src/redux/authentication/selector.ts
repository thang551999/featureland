import { AppState } from '../configStore';

const selectorAuthentication = {
  getAuthentication: (state: AppState) => state.authentication,
};

export default selectorAuthentication;
