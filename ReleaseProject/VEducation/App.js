import React, { useState, useEffect } from 'react';
// Stack navigator
import LoginStack from './navigators/LoginStack';
//SplashScreen
import * as SplashScreen from 'expo-splash-screen';
//async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';
//credentials context
import { CredentialsContext } from './components/CredentialsContext';

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState('');
  const checkLoginCredentials = async () => {
    try {
      const res = await AsyncStorage.getItem('VECredentials');
      if (res !== null) {
        setStoredCredentials(JSON.parse(res));
      } else {
        setStoredCredentials(null);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    SplashScreen.preventAutoHideAsync()
      .then(() => checkLoginCredentials())
      .then(() => {
        SplashScreen.hideAsync();
        setAppReady(true);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);
  if (!appReady) {
    return null;
  }
  return (<CredentialsContext.Provider value={{ storedCredentials, setStoredCredentials }}>
    <LoginStack />
  </CredentialsContext.Provider>);
}