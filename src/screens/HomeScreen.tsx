import React, { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Content, Input, ThemedText } from '../components/';
import { useWalletContext } from '../context/walletContext';
import { RootStackScreenProps } from '../navigation';
import { RootNavigator } from '../navigation/utils';

export const HomeScreen = ({}: PropsWithChildren<
  RootStackScreenProps<'Main'>
>): JSX.Element => {
  const [wcUri, setWCUri] = useState<string>();
  const { cleanContextAndStorage, wallet } = useWalletContext();
  const address = wallet?.address ?? '';
  const mnemonic = wallet?.mnemonic?.phrase ?? '';

  // @TODO: implement pairing
  const handlePairing = () => {
    console.log(wcUri);
  };
  const handleLogOut = async () => {
    await cleanContextAndStorage().then(() =>
      RootNavigator.navigate('Onboarding'),
    );
  };

  return (
    <Content containerStyle={styles.container}>
      <View style={styles.group}>
        <ThemedText type="H1">Hello World!</ThemedText>
        <ThemedText>Wallet initiated 🚀</ThemedText>
      </View>
      <View style={styles.group}>
        <ThemedText type="H1">Wallet info</ThemedText>
        <ThemedText>Address: {address}</ThemedText>
        <ThemedText>Mnemonic phrase: {mnemonic}</ThemedText>
      </View>
      <View style={styles.group}>
        <ThemedText type="H1">Pair Wallet via WalletConnect</ThemedText>
        <Input
          placeholder="Type or paste your WalletConnectURI"
          onChangeText={setWCUri}
        />
        <TouchableOpacity onPress={handlePairing} style={styles.button}>
          <ThemedText>Continue</ThemedText>
        </TouchableOpacity>
      </View>
      <View style={styles.group}>
        <ThemedText type="H1">Log Out</ThemedText>
        <TouchableOpacity onPress={handleLogOut} style={styles.button}>
          <ThemedText>Press to log out</ThemedText>
        </TouchableOpacity>
      </View>
    </Content>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 100,
  },
  group: {
    gap: 16,
  },
  button: {
    borderRadius: 8,
    padding: 16,
    alignSelf: 'flex-start',
    backgroundColor: '#AFAFAF',
  },
});
