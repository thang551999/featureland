import { AppState } from '../configStore';

const selectorApplication = {
  getApplication: (state: AppState) => state.application,
};

export default selectorApplication;
