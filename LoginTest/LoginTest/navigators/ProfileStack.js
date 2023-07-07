import React from 'react';
//React navigation
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Screens
import EditProfile from '../screens/EditProfile';
import User from '../screens/TabScreen/User';
//Colors
import { Colors } from '../components/styles';
const { primary, tertiary, background } = Colors;

//Stack
const Stack = createNativeStackNavigator();
// Fix grey bar on bottom of screen
const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  },
};

export default CourseStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTintColor: tertiary,
        headerTransparent: true,
        headerTitle: '',
        headerLeftContainerStyle: {
          paddingLeft: 20,
        },
      }}
    >
      <Stack.Screen name="UserProfile" component={User} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}