import React, { PropsWithChildren } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

import { RootStackScreenProps } from '../navigation';
import { Content, ThemedText } from '../components';

export const LoadingScreen = ({}: PropsWithChildren<
  RootStackScreenProps<'Loading'>
>) => {
  const statusText = "Preppin' the app";

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
