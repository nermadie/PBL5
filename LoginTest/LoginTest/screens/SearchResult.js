import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const SearchResult = ({ navigation, route }) => {
  const { users, courses, blogs } = route.params;

  const renderUsers = ({ item }) => {
    const handleUserPress = () => {
      navigation.navigate('UserDetails', { userId: item.user_id });
    };

    return (
      <TouchableOpacity onPress={handleUserPress} style={styles.itemContainer}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <Text style={styles.itemText}>{item.fullname}</Text>
      </TouchableOpacity>
    );
  };

  const renderCourses = ({ item }) => {
    const handleCoursePress = () => {
      navigation.navigate('CourseDetails', { courseId: item.course_id });
    };

    return (
      <TouchableOpacity onPress={handleCoursePress} style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.thumbnail} />
        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderBlogs = ({ item }) => {
    const handleBlogPress = () => {
      navigation.navigate('BlogDetails', { blogId: item.blog_id });
    };

    return (
      <TouchableOpacity onPress={handleBlogPress} style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.thumbnail} />
        <Text style={styles.itemText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {users.length > 0 && (
        <>
          <Text style={styles.sectionHeader}>Users:</Text>
          <FlatList
            data={users}
            keyExtractor={(item) => item.user_id.toString()}
            renderItem={renderUsers}
            contentContainerStyle={styles.listContainer}
          />
        </>
      )}

      {courses.length > 0 && (
        <>
          <Text style={styles.sectionHeader}>Courses:</Text>
          <FlatList
            data={courses}
            keyExtractor={(item) => item.course_id.toString()}
            renderItem={renderCourses}
            contentContainerStyle={styles.listContainer}
          />
        </>
      )}

      {blogs.length > 0 && (
        <>
          <Text style={styles.sectionHeader}>Blogs:</Text>
          <FlatList
            data={blogs}
            keyExtractor={(item) => item.blog_id.toString()}
            renderItem={renderBlogs}
            contentContainerStyle={styles.listContainer}
          />
        </>
      )}
      {users.length === 0 && courses.length === 0 && blogs.length === 0 && (
        <Text style={styles.notFound}>No results found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  notFound: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
  },
});

export default SearchResult;
