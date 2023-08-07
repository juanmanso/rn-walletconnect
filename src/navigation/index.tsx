import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack';

import { RootNavigator } from './utils';
import { HomeScreen } from '../screens/HomeScreen';

export type RootStackParamList = {
  Main: undefined;
};

export type RootStackNavigationProps<Route extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, Route>;

export type RootStackScreenProps<Route extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, Route>;

const Stack = createStackNavigator<RootStackParamList>();

export const Navigation = () => {
  const isDarkMode = useColorScheme();
  return (
    <NavigationContainer ref={RootNavigator.ref}>
      <SafeAreaView>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          translucent
        />
        <AppNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Main'}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Main"
        component={HomeScreen}
        options={{
          gestureEnabled: false,
          title: 'Main',
        }}
      />
    </Stack.Navigator>
  );
};
