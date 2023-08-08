import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { WalletProvider } from './context/walletContext';
import { Navigation } from './navigation';

import '../polyfills';

export const App = (): JSX.Element => {
  return (
    <WalletProvider>
      <GestureHandlerRootView style={styles.flex}>
        <Navigation />
      </GestureHandlerRootView>
    </WalletProvider>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
