import React from 'react';
//React navigation
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Screens
import Blogs from '../screens/TabScreen/Blogs';
import BlogDetail from '../screens/TabScreen/SubScreen/BlogDetail';
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

export default BlogStack = () => {
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
      <Stack.Screen name="BlogList" component={Blogs} />
      <Stack.Screen name="BlogDetail" component={BlogDetail} />
    </Stack.Navigator>
  );
}