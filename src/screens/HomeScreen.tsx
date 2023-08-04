import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const HomeScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
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
