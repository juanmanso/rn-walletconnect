import React, { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import { Content, ThemedText } from '../components/';
import { RootStackScreenProps } from '../navigation';

export const HomeScreen = ({}: PropsWithChildren<
  RootStackScreenProps<'Main'>
>): JSX.Element => {
  return (
    <Content containerStyle={styles.container}>
      <ThemedText>Hello World!</ThemedText>
      <ThemedText>Wallet initiated 🚀</ThemedText>
    </Content>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
});
