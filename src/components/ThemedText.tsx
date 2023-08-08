import React from 'react';
import { Text, TextProps, useColorScheme } from 'react-native';

interface IThemedTextProps extends TextProps {}

export const ThemedText = ({ children, style }: IThemedTextProps) => {
  const isDarkMode = useColorScheme();

  const textColor = isDarkMode ? 'white' : 'dark';

  return (
    <Text allowFontScaling style={[{ color: textColor }, style]}>
      {children}
    </Text>
  );
};
