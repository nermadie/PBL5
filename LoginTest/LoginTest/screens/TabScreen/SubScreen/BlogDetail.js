import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const BlogDetail = ({ route }) => {
  const { item: blog } = route.params;

  // Remove <p> tag from the content
  const formattedContent = blog.content.replace(/<\/?p>/g, '');

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={{ uri: blog.image }} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{blog.title}</Text>
          <Text style={styles.metadata}>
            Created by {blog.user.fullName} on {blog.created_at}
          </Text>
          <Text style={styles.content}>{formattedContent}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 200,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  metadata: {
    fontSize: 14,
    marginBottom: 10,
    color: '#888',
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
});

export default BlogDetail;
