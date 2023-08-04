import React from 'react';

import { WalletProvider } from './context/walletContext';
import { HomeScreen } from './screens/HomeScreen';

import '../polyfills';

export const App = (): JSX.Element => {
  return (
    <WalletProvider>
      <HomeScreen />
    </WalletProvider>
  );
};
