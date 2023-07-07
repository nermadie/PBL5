import axios from 'axios';

const EXPO_SERVER_URL = 'https://api.expo.dev/v2/push/send';

export const sendPushNotification = async (token, title, body) => {
  const message = {
    to: token,
    sound: 'default',
    title: title,
    body: body,
  }
  axios.post(EXPO_SERVER_URL, message);
  alert("Triệu hồi gấu thành công")
}