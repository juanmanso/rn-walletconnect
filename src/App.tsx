import React from 'react';

import { WalletProvider } from './context/walletContext';
import { Navigation } from './navigation';

import '../polyfills';

export const App = (): JSX.Element => {
  return (
    <WalletProvider>
      <Navigation />
    </WalletProvider>
  );
};
