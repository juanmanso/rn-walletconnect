import React from 'react';
import { Text, TextProps, useColorScheme } from 'react-native';

interface IThemedTextProps extends TextProps {}

export const ThemedText = ({ children, style }: IThemedTextProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  const textColor = isDarkMode ? 'white' : 'black';

  return (
    <Text allowFontScaling style={[{ color: textColor }, style]}>
      {children}
    </Text>
  );
};
