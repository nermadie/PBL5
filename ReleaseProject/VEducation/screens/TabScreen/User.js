import React, { useContext } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
//async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';
//credentials context
import { CredentialsContext } from '../../components/CredentialsContext';

const User = ({ navigation }) => {
  //context
  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };
  const handleLogoutProfile = () => {
    Alert.alert('Warning', 'Log out?', [
      {
        text: 'Yes', onPress: () => {
          AsyncStorage.removeItem('VECredentials')
            .then(() => {
              setStoredCredentials('');
            })
            .catch((error) => console.log(error));
        }
      },
      {
        text: 'Cancel',
        onPress: () => { },
      },
    ]);

  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: storedCredentials.avatar }} style={styles.avatar} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>Username:</Text>
          <Text style={styles.value}>{storedCredentials.username}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Full Name:</Text>
          <Text style={styles.value}>{storedCredentials.fullName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Age:</Text>
          <Text style={styles.value}>{storedCredentials.age}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Gender:</Text>
          <Text style={styles.value}>{(storedCredentials.gender ? "Male" : "Female")}</Text>
        </View>
      </View>
      <View style={styles.contactContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{storedCredentials.email}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>{storedCredentials.address}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{storedCredentials.phone}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
        <Feather name="edit" size={24} color="#fff" />
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogoutProfile}>
        <MaterialIcons name="logout" size={24} color="white" />
        <Text style={styles.editButtonText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  infoContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    width: 100,
  },
  value: {
    flex: 1,
    fontSize: 20
  },
  contactContainer: {
    marginBottom: 20,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#008000',
    borderRadius: 8,
    paddingVertical: 10,
    marginBottom: 5,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff9e78',
    borderRadius: 8,
    paddingVertical: 10,
  }
});

export default User;
