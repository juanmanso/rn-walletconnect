import React, { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { useWalletContext } from '../context/walletContext';
import { RootStackScreenProps } from '../navigation';
import { Content, ThemedText } from '../components';

export const OnboardingScreen = ({
  navigation,
}: PropsWithChildren<RootStackScreenProps<'Onboarding'>>) => {
  const { initWallet, web3Wallet } = useWalletContext();
  const [loadingWallet, setLoadingWallet] = useState(false);

  const isWalletInit = !!web3Wallet;
  const handleOnPress = async () => {
    if (isWalletInit) {
      return;
    }

    setLoadingWallet(true);
    await initWallet()
      .then(() => setLoadingWallet(false))
      .finally(() => navigation.navigate('Main'));
  };

  const buttonText = isWalletInit
    ? 'Wallet Ready 🚀'
    : loadingWallet
    ? 'Wallet initiating...'
    : 'Press to setup wallet';

  return (
    <Content containerStyle={styles.container}>
      <ThemedText>Hello World!</ThemedText>
      <TouchableOpacity onPress={handleOnPress} style={styles.button}>
        <ThemedText style={styles.whiteText}>{buttonText}</ThemedText>
      </TouchableOpacity>
    </Content>
  );
};

const styles = StyleSheet.create({
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
