import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function Courses({ navigation }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://pbl5-production-dc9d.up.railway.app/course/all');
      setCourses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCoursePress = (courseId) => {
    // Gọi API để lấy thông tin chi tiết theo courseId
    axios
      .get(`https://pbl5-production-dc9d.up.railway.app/course/${courseId}`)
      .then((response) => {
        const courseDetail = response.data;
        // Chuyển đến trang CourseDetail và truyền thông tin chi tiết
        navigation.navigate('CourseDetail', { courseDetail });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const renderCourseItem = ({ item }) => (
    <TouchableOpacity
      style={styles.courseItemContainer}
      onPress={() => handleCoursePress(item.id)}
    >
      <Image source={{ uri: item.image }} style={styles.courseImage} />
      <View style={styles.courseDetails}>
        <Text style={styles.courseName}>{item.name}</Text>
        <Text style={styles.courseDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.courseListWrapper}>
        <Text style={styles.title}>Course List</Text>
        <FlatList
          data={courses}
          renderItem={renderCourseItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  courseListWrapper: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  listContainer: {
    paddingBottom: 20,
  },
  courseItemContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  courseImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  courseDetails: {
    flex: 1,
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  courseDescription: {
    fontSize: 16,
    color: '#666',
  },
});
