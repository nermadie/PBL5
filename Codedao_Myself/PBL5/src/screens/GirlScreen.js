import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import styled from 'styled-components';
import { Header, Input } from 'react-native-elements';
import { Heading, Page } from '../../components';
import { sendPushNotification } from '../../services/api';

const SummonButtonContainer = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const SummonButton = styled(TouchableOpacity)`
  background-color: ${props => props.color || '#397af8'};
  width: 45%;
  height: 150px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border-radius: 5px;
`;

const token = 'ExponentPushToken[h9Uqy0BDjbJO6N-TdDFOLP]';

export default function GirlScreen() {
  return (
    <View>
      <Header
        centerComponent={{ text: 'GirlScreen', style: { color: 'white', fontSize: 22, fontWeight: 'bold' } }}
      />
      <Page>
        <View>
          <Input label='Mã số gấu' placeholder='Nhập mã số của gấu đực vào đây' ></Input>
          <Button title='Tìm gấu' onPress={() => { }}></Button>
        </View>
        <Heading>Triệu hồi gấu đực</Heading>
        <SummonButtonContainer>
          <SummonButton color="#e74c3c" onPress={() => sendPushNotification(token, "Em đói quá", "Mua đồ ăn cho em!")}>
            <Text>🤯Em đói quá</Text>
          </SummonButton>
          <SummonButton color="#2980b9">
            <Text>😀Thèm trà sữa</Text>
          </SummonButton>
          <SummonButton color="#2ecc71">
            <Text>😘Nhớ anh quá</Text>
          </SummonButton>
          <SummonButton color="#f1c40f">
            <Text>😋Gọi e nha</Text>
          </SummonButton>
        </SummonButtonContainer>
      </Page>
    </View>
  )
}