import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import BoyScreen from './BoyScreen';
import GirlScreen from './GirlScreen';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="BoyScreen" options={{ tabBarIcon: () => <FontAwesome name="male" size={24} color="black" /> }} component={BoyScreen} />
      <Tab.Screen name="GirlScreen" options={{ tabBarIcon: () => <FontAwesome5 name="female" size={24} color="black" /> }} component={GirlScreen} /> */}
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})