import React, { PropsWithChildren, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useWalletContext } from '../context/walletContext';
import { RootStackScreenProps } from '../navigation';

export const OnboardingScreen = ({}: PropsWithChildren<
  RootStackScreenProps<'Onboarding'>
>) => {
  const { initWallet, wallet } = useWalletContext();
  const [loadingWallet, setLoadingWallet] = useState(false);

  const isWalletInit = !!wallet;
  const handleOnPress = async () => {
    if (isWalletInit) {
      return;
    }

    setLoadingWallet(true);
    await initWallet().finally(() => setLoadingWallet(false));
  };

  const buttonText = isWalletInit
    ? 'Wallet Ready 🚀'
    : loadingWallet
    ? 'Wallet initiating...'
    : 'Press to setup wallet';

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <TouchableOpacity onPress={handleOnPress} style={styles.button}>
        <Text style={styles.whiteText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#0066FF',
    padding: 16,
    alignSelf: 'flex-start',
  },
  whiteText: {
    color: 'white',
  },
});
