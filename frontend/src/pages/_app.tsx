import { NextPage } from 'next';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { persistStore } from 'redux-persist';
import { ReactElement, ReactNode } from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { wrapper } from '@/redux/configStore';
import { LIBRARY_CONSTANTS } from '@/constants/library';

import '../styles/_app.scss';
import AppConnectWalletWrapper from '@/components/AppConnectWalletWrapper';
import { ConfigProvider } from 'antd';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, ...rest }: AppPropsWithLayout) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        keepPreviousData: true,
        retry: false,
        refetchOnWindowFocus: true,
      },
    },
  });

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Web3ReactProvider getLibrary={LIBRARY_CONSTANTS.getLibrary}>
          <ConfigProvider
            theme={{
              token: {
                fontFamily: 'Orbitron',
              },
            }}
          >
            <PersistGate persistor={persistStore(store)} loading={false}>
              <AppConnectWalletWrapper>
                {getLayout(<Component {...props} />)}
              </AppConnectWalletWrapper>
            </PersistGate>
          </ConfigProvider>
        </Web3ReactProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default MyApp;
