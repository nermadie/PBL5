import React, { useContext } from 'react';
import { View, StyleSheet, TextInput, Alert, Text } from 'react-native';
import { useFormik } from 'formik';
import axios from 'axios';

import { CredentialsContext } from '../components/CredentialsContext';
import { ButtonText, StyledButton } from '../components/styles';

const EditProfileScreen = ({ navigation }) => {
  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);

  // Khởi tạo giá trị ban đầu cho form
  const initialValues = {
    fullName: storedCredentials.fullName,
    gender: storedCredentials.gender ? "1" : "0",
    address: storedCredentials.address,
    phone: storedCredentials.phone,
    avatar: storedCredentials.avatar
  };

  const handleSubmit = async (values) => {
    try {
      // Show confirmation dialog
      Alert.alert(
        'Save Changes',
        'Are you sure you want to save the changes?',
        [
          {
            text: 'Cancel',
            style: 'cancel'
          },
          {
            text: 'Save',
            onPress: async () => {
              try {
                const response = await axios.post('https://pbl5-production-dc9d.up.railway.app/user/update', values, {
                  headers: {
                    'Authorization': `Bearer ${storedCredentials.access_token}` // Sử dụng access token lưu trong storedCredentials
                  }
                });

                if (response.status === 200) {
                  // Cập nhật lại storedCredentials với thông tin mới
                  setStoredCredentials({
                    ...storedCredentials,
                    fullName: values.fullName,
                    gender: values.gender === "1" ? true : false,
                    address: values.address,
                    phone: values.phone,
                    avatar: values.avatar
                  });

                  // Xử lý thành công, chẳng hạn hiển thị thông báo thành công
                  console.log('Profile updated successfully!');
                  navigation.navigate("UserProfile");
                } else {
                  // Xử lý lỗi, chẳng hạn hiển thị thông báo lỗi
                  console.log('Failed to update profile.');
                }
              } catch (error) {
                console.error(error);
              }
            }
          }
        ]
      );
    } catch (error) {
      console.error(error);
    }
  };



  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validate: (values) => {
      const errors = {};

      // Kiểm tra từng trường
      if (!values.fullName) {
        errors.fullName = 'Full Name is required';
      }
      if (!values.gender) {
        errors.gender = 'Gender is required';
      }
      if (!values.address) {
        errors.address = 'Address is required';
      }
      if (!values.phone) {
        errors.phone = 'Phone is required';
      }
      if (!values.avatar) {
        errors.avatar = 'Avatar is required';
      }

      return errors;
    }
  });

  return (
    <KeyboardAvoidingWrapper>
      <View style={styles.container} >
        <Text style={styles.title}>Update Information</Text>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            value={formik.values.fullName}
            onChangeText={formik.handleChange('fullName')}
            onBlur={formik.handleBlur('fullName')}
          />
          {formik.touched.fullName && formik.errors.fullName && <Text style={styles.error}>{formik.errors.fullName}</Text>}
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Gender</Text>
          <TextInput
            style={styles.input}
            value={formik.values.gender}
            onChangeText={formik.handleChange('gender')}
            onBlur={formik.handleBlur('gender')}
          />
          {formik.touched.gender && formik.errors.gender && <Text style={styles.error}>{formik.errors.gender}</Text>}
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            value={formik.values.address}
            onChangeText={formik.handleChange('address')}
            onBlur={formik.handleBlur('address')}
          />
          {formik.touched.address && formik.errors.address && <Text style={styles.error}>{formik.errors.address}</Text>}
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Phone</Text>
          <TextInput
            style={styles.input}
            value={formik.values.phone}
            onChangeText={formik.handleChange('phone')}
            onBlur={formik.handleBlur('phone')}
          />
          {formik.touched.phone && formik.errors.phone && <Text style={styles.error}>{formik.errors.phone}</Text>}
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Avatar</Text>
          <TextInput
            style={styles.input}
            value={formik.values.avatar}
            onChangeText={formik.handleChange('avatar')}
            onBlur={formik.handleBlur('avatar')}
          />
          {formik.touched.avatar && formik.errors.avatar && <Text style={styles.error}>{formik.errors.avatar}</Text>}
        </View>

        <StyledButton onPress={(event) => handleSubmit(formik.values, event)}>
          <ButtonText>
            Update
          </ButtonText>
        </StyledButton>
      </View>
    </KeyboardAvoidingWrapper >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  formGroup: {
    marginBottom: 16
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8
  },
  error: {
    color: 'red',
    marginBottom: 8
  }
});

export default EditProfileScreen;
