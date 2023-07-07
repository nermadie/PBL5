import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-elements';

import Login from './src/screens/Login';


export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Login />
        </NavigationContainer>
      </ThemeProvider>
      <StatusBar />
    </SafeAreaProvider>
  );
}