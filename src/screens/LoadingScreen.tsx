import React, { PropsWithChildren, useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isValidMnemonic } from 'ethers/lib/utils';

import { RootStackScreenProps } from '../navigation';
import { Content, ThemedText } from '../components';
import { useWalletContext } from '../context/walletContext';

type LoadingStates = 'fetchingLocalStorage' | 'logged' | 'yetToOnboard';

const statusTextByState: Record<LoadingStates, string> = {
  fetchingLocalStorage: 'Fetching some data...',
  logged: 'Logging in...',
  yetToOnboard: 'Redirecting to onboarding...',
};

export const LoadingScreen = ({
  navigation,
}: PropsWithChildren<RootStackScreenProps<'Loading'>>) => {
  const [loadingState, setLoadingState] = useState<LoadingStates>();
  const { initContext } = useWalletContext();
  const statusText = loadingState
    ? statusTextByState[loadingState]
    : "Preppin' the app...";

  useEffect(() => {
    const fetchData = async () => {
      const value = await AsyncStorage.getItem('mnemonic');
      if (value !== null) {
        const isUserReady = isValidMnemonic(value);
        if (isUserReady) {
          setLoadingState('logged');
          await initContext().then(() => {
            navigation.navigate('Main');
          });
          return;
        }
      }
      setLoadingState('yetToOnboard');
      navigation.navigate('Onboarding');
    };

    if (!loadingState) {
      setLoadingState('fetchingLocalStorage');
      fetchData();
    }
  }, [loadingState]);

  return (
    <Content containerStyle={styles.container}>
      <ActivityIndicator size={'large'} />
      <ThemedText type="H1">{statusText}</ThemedText>
    </Content>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
  },
});
