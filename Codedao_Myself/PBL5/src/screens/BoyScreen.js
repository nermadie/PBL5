import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Heading, Page } from '../../components';
import { Button, Header } from 'react-native-elements';
import * as Notifications from 'expo-notifications';

async function getNotificationToken() {
  const { status } = await Notifications.getPermissionsAsync();
  if (status !== 'granted') {
    await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
  }
  const tokenData = await Notifications.getExpoPushTokenAsync();
  const token = tokenData.data;
  console.log(token);
  return token;
}

export default function BoyScreen() {
  return (
    <View>
      <Header
        centerComponent={{ text: 'BoyScreen', style: { color: 'white', fontSize: 22, fontWeight: 'bold' } }}
      />
      <Page>
        <Heading>Bạn chưa có mã số, bấm vào để lấy mã</Heading>
        <Button title='Lấy mã số' onPress={getNotificationToken}></Button>
      </Page>
    </View>
  )
}