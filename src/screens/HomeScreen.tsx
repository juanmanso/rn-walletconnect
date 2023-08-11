import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

import { Content, ThemedText } from '../components/';
import { RootStackScreenProps } from '../navigation';
import { useWalletContext } from '../context/walletContext';

export const HomeScreen = ({}: PropsWithChildren<
  RootStackScreenProps<'Main'>
>): JSX.Element => {
  const { wallet } = useWalletContext();
  const address = wallet?.address ?? '';
  const mnemonic = wallet?.mnemonic.phrase ?? '';

  return (
    <Content containerStyle={styles.container}>
      <View style={styles.group}>
        <ThemedText style={styles.heading}>Hello World!</ThemedText>
        <ThemedText>Wallet initiated 🚀</ThemedText>
      </View>
      <View style={styles.group}>
        <ThemedText style={styles.heading}>Wallet info</ThemedText>
        <ThemedText>Address: {address}</ThemedText>
        <ThemedText>Mnemonic phrase: {mnemonic}</ThemedText>
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
  heading: {
    fontSize: 20,
    fontWeight: '700',
  },
});
