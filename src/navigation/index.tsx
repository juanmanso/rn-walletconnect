import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
  StackScreenProps,
  TransitionPresets,
} from '@react-navigation/stack';

import { RootNavigator } from './utils';
import { HomeScreen } from '../screens/HomeScreen';
import { LoadingScreen } from '../screens/LoadingScreen';
import { OnboardingScreen } from '../screens/OnboardingScreen';

export type RootStackParamList = {
  Main: undefined;
  Onboarding: undefined;
  Loading: undefined;
};

export type RootStackNavigationProps<Route extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, Route>;

export type RootStackScreenProps<Route extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, Route>;

const Stack = createStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer ref={RootNavigator.ref}>
      <AppNavigator />
    </NavigationContainer>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator
      // TODO: check if wallet was previously initiated
      initialRouteName={'Loading'}
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
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{
          ...TransitionPresets.ModalPresentationIOS,
          title: 'Onboarding',
        }}
      />
      <Stack.Screen
        name="Loading"
        component={LoadingScreen}
        options={{
          ...TransitionPresets.ModalPresentationIOS,
          title: 'Loading',
        }}
      />
    </Stack.Navigator>
  );
};
