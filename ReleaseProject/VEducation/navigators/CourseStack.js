import React from 'react';
//React navigation
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Screens
import CourseDetail from '../screens/TabScreen/SubScreen/CourseDetail';
import Courses from '../screens/TabScreen/Courses';
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
      <Stack.Screen name="CourseList" component={Courses} />
      <Stack.Screen name="CourseDetail" component={CourseDetail} />
    </Stack.Navigator>
  );
}