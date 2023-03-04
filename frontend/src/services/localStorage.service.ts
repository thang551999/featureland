import { LOCAL_STORAGE } from '@/constants';

const LocalStorageService = {
  setItem: (key: string, value: string) => {
    localStorage.setItem(key, value);
  },
  getItem: (key: string) => {
    return localStorage.getItem(key);
  },
  getJsonItem: <T>(key: string) => {
    try {
      return JSON.parse(localStorage.getItem(key) || '{}') as T;
    } catch (err) {
      console.error('[getJsonItem] error', err);
      return {};
    }
  },
  addSigner: (account: string, signer: string) => {
    const signatureLocal = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE.SIGNATURES) || '{}'
    );
    localStorage.setItem(
      LOCAL_STORAGE.SIGNATURES,
      JSON.stringify({ ...signatureLocal, [account]: signer })
    );
  },
};

export default LocalStorageService;
