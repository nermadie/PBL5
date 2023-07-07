import React, { useState, useContext, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
// DateTimePicker
// import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
// Formik
import { Formik } from 'formik';
// Icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
// Keyboard avoiding view
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
//API
import axios from 'axios';
//async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';
//credentials context
import { CredentialsContext } from './../components/CredentialsContext';
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

export default Signup = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: 'transparent',
      },
      headerTintColor: tertiary,
      headerTransparent: true,
      headerTitle: '',
      headerLeftContainerStyle: {
        paddingLeft: 20,
      },
    })
  }, [navigation]);
  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);
  // const [date, setDate] = useState(new Date(2000, 0, 1));
  const [date, setDate] = useState(new Date());

  // Actual date of birth to be sent
  const [dob, setDob] = useState();
  // API call to register user
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  //context
  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);

  const onChange = (selectedDate) => {
    const currentDate = selectedDate || date;
    setDob(currentDate);
    setShow(false);
  };
  const showDatePicker = () => {
    setShow(true);
  };

  const handleSignup = (credentials, setSubmitting) => {
    handleMessage(null);
    const url = 'https://pbl5-production-dc9d.up.railway.app/register';

    axios
      .post(url, credentials)
      .then((response) => {
        const result = response.data;
        const { access_token, token_type, data } = result;
        if (access_token && token_type) {
          persistLogin({ ...data });
        } else {
          handleMessage("Wrong credentials! Please try again");
        }
        setSubmitting(false);
      })
      .catch(error => {
        if (error.response.status === 403) {
          // Xử lý khi gặp lỗi 403 Forbidden
          handleMessage('Invalid Username/Password! Please try again');
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
          <PageTitle>V Education</PageTitle>
          <SubTitle>Account Signup</SubTitle>
          {show &&
            <DateTimePickerModal
              isVisible={true}
              mode="date"
              date={date}
              onConfirm={onChange}
              onCancel={() => setShow(false)}
            />
          }
          <Formik
            initialValues={{ name: '', email: '', dateOfBirth: '', password: '', confirmPassword: '' }}
            onSubmit={(values, { setSubmitting }) => {
              values = { ...values, dateOfBirth: dob };
              if (values.name == '' || values.email == '' || values.dateOfBirth == '' || values.password == '' || values.confirmPassword == '') {
                handleMessage("Please fill all the fields");
                setSubmitting(false);
              }
              else if (values.password != values.confirmPassword) {
                handleMessage("Password and Confirm Password must be the same");
                setSubmitting(false);
              }
              else {
                handleSignup(values, setSubmitting);
              }
            }}
          >{({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => <StyledFormArea>
            <MyTextInput
              label="Full Name"
              icon="person"
              placeholder="Richard Barnes"
              placeholderTextColor={darkLight}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            <MyTextInput
              label="Date of Birth"
              icon="calendar"
              placeholder="YYYY - MM - DD"
              placeholderTextColor={darkLight}
              onChangeText={handleChange('dateOfBirth')}
              onBlur={handleBlur('dateOfBirth')}
              value={dob ? dob.toDateString() : ''}
              isDate={true}
              editable={false}
              showDatePicker={showDatePicker}
            />
            <MyTextInput
              label="Email Address"
              icon="mail"
              placeholder="abc@gmail.com"
              placeholderTextColor={darkLight}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
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
            <MyTextInput
              label="Confirm Password"
              icon="lock"
              placeholder="**********"
              placeholderTextColor={darkLight}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              secureTextEntry={hidePassword}
              isPassword={true}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
            />
            <MsgBox type={messageType}>{message}</MsgBox>
            {!isSubmitting && <StyledButton onPress={handleSubmit}>
              <ButtonText>
                Sign Up
              </ButtonText>
            </StyledButton>}
            {isSubmitting && <StyledButton disabled={true}>
              <ActivityIndicator size="large" color={primary} />
            </StyledButton>}
            <Line />
            <ExtraView>
              <ExtraText>Already have an account? </ExtraText>
              <TextLink onPress={() => { navigation.navigate("Login") }}>
                <TextLinkContent>Login</TextLinkContent>
              </TextLink>
            </ExtraView>
          </StyledFormArea>}
          </Formik>
        </InnerContainer>
      </StyledContainer >
    </KeyboardAvoidingWrapper>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      {!isDate && <StyledTextInput {...props} />}
      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <View pointerEvents="none">
            <StyledTextInput {...props} />
          </View>
        </TouchableOpacity>
      )}
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
}