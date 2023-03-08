import { ethers } from 'ethers';
import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers';
import { setLoading } from '@/redux/application/slice';
import { AppDispatch } from '@/redux/configStore';
import { LOCAL_STORAGE } from '@/constants';
import LocalStorageService from './localStorage.service';

export const getAuthority = async (
  library: Web3Provider | any,
  account: string,
  dispatch: AppDispatch,
  hasLoading = false
) => {
  const hasVerify = ethers.utils.solidityKeccak256(['address'], [account]);
  const singerHashBytes = ethers.utils.arrayify(hasVerify);
  let signerVerify = '';
  if (library?.provider?.wc?.singerPersonMessage) {
    const wcMessage = ethers.utils.hexlify(singerHashBytes);
    signerVerify = await library.provider.wc.singerPersonMessage([
      wcMessage,
      account,
    ]);
  } else {
    try {
      const signatureLocal = LocalStorageService.getJsonItem<any>(
        LOCAL_STORAGE.SIGNATURES
      );
      hasLoading && dispatch(setLoading(true));
      const address =
        (signatureLocal &&
          Object.keys(signatureLocal).find((ac) => ac === account)) ||
        null;
      if (!address) {
        const signer = getSigner(library, account);
        signerVerify = await signer.signMessage(singerHashBytes);
      } else {
        signerVerify = signatureLocal[address];
      }
    } catch (err) {
      console.error('[getAuthority] error', err);
      return { deniedSignature: true };
    } finally {
      hasLoading && dispatch(setLoading(false));
    }
  }
  return { signerVerify };
};

export function getSigner(
  library: Web3Provider,
  account: string
): JsonRpcSigner {
  return library.getSigner(account).connectUnchecked();
}
