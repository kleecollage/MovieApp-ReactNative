import './gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './presentation/navigation/Navigation';

export const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  )
}
