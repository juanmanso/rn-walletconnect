import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';

import { useWalletContext } from '../context/walletContext';

export const HomeScreen = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const { initWallet, wallet } = useWalletContext();

  const isWalletInit = !!wallet;
  const handleOnPress = isWalletInit ? undefined : initWallet;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <TouchableOpacity onPress={handleOnPress} style={styles.button}>
          <Text style={styles.whiteText}>
            {isWalletInit ? 'Wallet Ready' : 'Wallet initiating...'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
