import React, { useEffect, useContext, useState } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { Image, View, Text, TouchableOpacity, StyleSheet, TextInput, Modal } from 'react-native';
//credentials context
import { CredentialsContext } from './../components/CredentialsContext';
//Tab Screen
import Home from '../screens/TabScreen/Home';
import CourseStack from './CourseStack';
import BlogStack from './BlogStack';
import ProfileStack from './ProfileStack';
//Colors
import { Colors } from '../components/styles';
const { primary, secondary, background, tertiary, darkLight, brand, green, red } = Colors;
//Tab Navigator
const Tab = createMaterialBottomTabNavigator();
//API
import axios from 'axios';

const Tabs = ({ navigation }) => {
  //Search
  const [searchText, setSearchText] = useState('');
  //context
  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);
  const { fullName, avatar } = storedCredentials;

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://pbl5-production-dc9d.up.railway.app/search/${searchText}`);
      const searchData = response.data;
      navigation.navigate('SearchResult', { users: searchData.users, courses: searchData.courses, blogs: searchData.blogs });
    } catch (error) {
      navigation.navigate('SearchResult', { users: [], courses: [], blogs: [] });
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#d8e2dd',
        opacity: 0.2,
      },
      headerLeft: () => (
        <View style={styles.leftContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('User')}>
            <Image
              source={{ uri: avatar }}
              style={{
                width: 30,
                height: 30,
                borderRadius: 50,
                marginRight: 10,
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View>
            <Text>Welcome 👋</Text>
            <Text style={{ fontWeight: 'bold' }}>{fullName}</Text>
          </View>
        </View>
      ),
      headerTitle: '',
      headerRight: () => (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            style={styles.searchBox}
            placeholder="Search..."
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity onPress={handleSearch}>
            <AntDesign name="search1" size={24} color={Colors.tertiary} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation, searchText]);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" options={{ tabBarIcon: () => <AntDesign name="home" size={24} color={Colors.tertiary} /> }} component={Home} />
      <Tab.Screen name="Courses" options={{ tabBarIcon: () => <AntDesign name="book" size={24} color={Colors.tertiary} /> }} component={CourseStack} />
      <Tab.Screen name="Blogs" options={{ tabBarIcon: () => <Entypo name="news" size={24} color={Colors.tertiary} /> }} component={BlogStack} />
      <Tab.Screen name="User" options={{ tabBarIcon: () => <AntDesign name="user" size={24} color={Colors.tertiary} /> }} component={ProfileStack} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBox: {
    width: 150,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 10,
    paddingHorizontal: 20,
  },
});

export default Tabs;