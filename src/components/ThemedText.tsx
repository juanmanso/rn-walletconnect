import React from 'react';
import { StyleSheet, Text, TextProps, useColorScheme } from 'react-native';

type Typography = 'default' | 'H1';

interface IThemedTextProps extends TextProps {
  type?: Typography;
}

export const ThemedText = ({
  children,
  style,
  type = 'default',
}: IThemedTextProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  const textColor = isDarkMode ? 'white' : 'black';

  return (
    <Text
      allowFontScaling
      style={[{ color: textColor }, type === 'H1' && styles.heading, style]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: '700',
  },
});
