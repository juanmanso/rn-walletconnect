import React, { PropsWithChildren } from 'react';
import {
  StatusBar,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  useColorScheme,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IContentProps {
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
}

export const Content = ({
  children,
  containerStyle,
  style,
}: PropsWithChildren<IContentProps>) => {
  const insets = useSafeAreaInsets();
  const isDarkMode = useColorScheme();

  const backgroundColor = isDarkMode ? 'black' : 'white';

  return (
    <View
      style={[
        styles.mainContainer,
        { backgroundColor },
        { paddingTop: insets.top, paddingBottom: insets.bottom },
        style,
      ]}
    >
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        translucent
      />
      <View style={[styles.contentContainer, containerStyle]}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
});
