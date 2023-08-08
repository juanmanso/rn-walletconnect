import { createNavigationContainerRef } from '@react-navigation/native';

import { RootStackParamList } from '.';

const ref = createNavigationContainerRef<RootStackParamList>();

export const RootNavigator = {
  navigate: ref?.navigate,
  ref,
};
