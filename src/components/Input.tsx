import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

export const Input = ({ onChangeText, placeholder, style }: TextInputProps) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      style={[styles.box, style]}
    />
  );
};

const styles = StyleSheet.create({
  box: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
  },
});
