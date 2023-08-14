import React, { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { useWalletContext } from '../context/walletContext';
import { RootStackScreenProps } from '../navigation';
import { Content, ThemedText } from '../components';

export const OnboardingScreen = ({
  navigation,
}: PropsWithChildren<RootStackScreenProps<'Onboarding'>>) => {
  const { initContext, wallet, web3Wallet } = useWalletContext();
  const [loadingWallet, setLoadingWallet] = useState(false);
  const [shouldRememberUser, setShouldRememberUser] = useState(false);

  const isInit = !!web3Wallet && !!wallet;
  const handleOnPress = async () => {
    if (isInit) {
      return;
    }

    setLoadingWallet(true);
    await initContext({ saveInStorage: shouldRememberUser })
      .then(() => setLoadingWallet(false))
      .finally(() => navigation.navigate('Main'));
  };

  const handleRememberMe = () => {
    setShouldRememberUser(prevState => !prevState);
  };

  const buttonText = isInit
    ? 'Wallet Ready 🚀'
    : loadingWallet
    ? 'Wallet initiating...'
    : 'Press to setup wallet';

  return (
    <Content containerStyle={styles.container}>
      <ThemedText>Hello World!</ThemedText>
      <TouchableOpacity onPress={handleRememberMe} style={styles.row}>
        <View
          style={[styles.box, shouldRememberUser && styles.blueBackgroundColor]}
        />
        <ThemedText>Remember me</ThemedText>
      </TouchableOpacity>
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
  row: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  box: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'gray',
    width: 20,
    height: 20,
  },
  blueBackgroundColor: {
    backgroundColor: '#0066FF',
  },
});
