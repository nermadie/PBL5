import React, { useState, useContext, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator } from 'react-native';
// Formik
import { Formik } from 'formik';
// Icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
// Keyboard avoiding view
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
//async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';
//credentials context
import { CredentialsContext } from './../components/CredentialsContext';
//API
import axios from 'axios';
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  StyledButton,
  ButtonText,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
  Colors,
} from '../components/styles';
//Colors
const { brand, darkLight, primary, tertiary } = Colors;

export default Login = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: 'transparent',
      },
      headerTintColor: { tertiary },
      headerTransparent: true,
      headerTitle: '',
      headerLeftContainerStyle: {
        paddingLeft: 20,
      },
    })
  }, [navigation])
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  //context
  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);

  const handleLogin = (credentials, setSubmitting) => {
    handleMessage(null);
    const url = 'https://pbl5-production-dc9d.up.railway.app/login';

    axios
      .post(url, credentials)
      .then((response) => {
        const result = response.data;
        const { access_token, token_type, data } = result;
        if (access_token && token_type) {
          persistLogin({ access_token, ...data });
        } else {
          handleMessage("Wrong credentials! Please try again");
        }
        setSubmitting(false);
      })
      .catch(error => {
        if (error.response.status === 403) {
          // Xử lý khi gặp lỗi 403 Forbidden
          handleMessage('Username/Password is incorrect! Please try again');
        } else {
          // Xử lý các lỗi khác
          handleMessage("An error occured. Check your network and try again");
        }
        setSubmitting(false);
      })
  }
  const handleMessage = (message, type = 'FAILED') => {
    setMessage(message);
    setMessageType(type);
  }


  const persistLogin = (credentials) => {
    AsyncStorage.setItem('VECredentials', JSON.stringify(credentials))
      .then(() => {
        handleMessage('Login credentials are persisted successfully');
        setStoredCredentials(credentials);
      })
      .catch((error) => {
        console.log(error);
        handleMessage('Persisting login failed');
      })
  }
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageLogo resizeMode="cover" source={{ uri: "https://moment-learning.vercel.app/static/media/logo.c91ff9dc94173d493508.png" }} />
          <PageTitle>V Education</PageTitle>
          <SubTitle>Account Login</SubTitle>

          <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
              if (values.username == '' || values.password == '') {
                handleMessage("Please fill all the fields");
                setSubmitting(false);
              } else {
                handleLogin(values, setSubmitting);
              }
            }}
          >{({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => <StyledFormArea>
            <MyTextInput
              label="Username/Email Address"
              icon="mail"
              placeholder="abc@gmail.com"
              placeholderTextColor={darkLight}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              keyboardType="email-address"
            />
            <MyTextInput
              label="Password"
              icon="lock"
              placeholder="**********"
              placeholderTextColor={darkLight}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry={hidePassword}
              isPassword={true}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
            />
            <MsgBox type={messageType}>{message}</MsgBox>
            {!isSubmitting && <StyledButton onPress={handleSubmit}>
              <ButtonText>
                Login
              </ButtonText>
            </StyledButton>}
            {isSubmitting && <StyledButton disabled={true}>
              <ActivityIndicator size="large" color={primary} />
            </StyledButton>}
            <Line />
            <StyledButton google={true} onPress={handleSubmit}>
              <Fontisto name="google" color={primary} size={25} />
              <ButtonText google={true}>
                Sign in with Google
              </ButtonText>
            </StyledButton>
            <ExtraView>
              <ExtraText>Don't have an account already? </ExtraText>
              <TextLink onPress={() => navigation.navigate("Signup")}>
                <TextLinkContent>Signup</TextLinkContent>
              </TextLink>
            </ExtraView>
          </StyledFormArea>}
          </Formik>
        </InnerContainer>
      </StyledContainer >
    </KeyboardAvoidingWrapper>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
}