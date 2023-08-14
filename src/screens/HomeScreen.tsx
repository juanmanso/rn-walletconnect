import React, { PropsWithChildren } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Content, ThemedText } from '../components/';
import { useWalletContext } from '../context/walletContext';
import { RootStackScreenProps } from '../navigation';
import { RootNavigator } from '../navigation/utils';

export const HomeScreen = ({}: PropsWithChildren<
  RootStackScreenProps<'Main'>
>): JSX.Element => {
  const { wallet } = useWalletContext();
  const address = wallet?.address ?? '';
  const mnemonic = wallet?.mnemonic.phrase ?? '';

  const handleLogOut = async () => {
    await AsyncStorage.removeItem('mnemonic').then(() =>
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
