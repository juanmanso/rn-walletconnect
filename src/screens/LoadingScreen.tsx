import React, { PropsWithChildren, useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

import { RootStackScreenProps } from '../navigation';
import { Content, ThemedText } from '../components';

type LoadingStates = 'fetchingLocalStorage' | 'logged' | 'yetToOnboard';

const statusTextByState: Record<LoadingStates, string> = {
  fetchingLocalStorage: 'Fetching some data...',
  logged: 'Logging in...',
  yetToOnboard: 'Redirecting to onboarding...',
};

export const LoadingScreen = ({}: PropsWithChildren<
  RootStackScreenProps<'Loading'>
>) => {
  const [loadingState, _] = useState<LoadingStates>();
  const statusText = loadingState
    ? statusTextByState[loadingState]
    : "Preppin' the app...";

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
