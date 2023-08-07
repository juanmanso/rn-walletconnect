import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackScreenProps } from '../navigation';

export const HomeScreen = ({}: PropsWithChildren<
  RootStackScreenProps<'Main'>
>): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Text>Wallet initiated 🚀</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
});
