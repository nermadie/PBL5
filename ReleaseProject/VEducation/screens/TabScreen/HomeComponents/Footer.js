import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const Footer = ({ logo, latestNews, courseList, newsletter }) => {
  return (
    <View style={styles.container}>
      <View style={styles.columnContainer}>
        <View style={styles.column}>
          <Image source={{ uri: logo }} style={styles.logo} resizeMode="contain" />
          <Text style={styles.logoText}>
            Nemo enim enim voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequ magni dolores eos qui ratione.
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.heading}>Latest News</Text>
          {latestNews.map((news, index) => (
            <View key={index} style={styles.newsItem}>
              <Text style={styles.newsTitle}>{news.title}</Text>
              <Text style={styles.newsDate}>{news.date}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.columnContainer}>
        <View style={styles.column}>
          <Text style={styles.heading}>Course List</Text>
          {courseList.map((course, index) => (
            <Text key={index} style={styles.course}>{course}</Text>
          ))}
        </View>
        <View style={styles.column}>
          <Text style={styles.heading}>Newsletter</Text>
          <Text style={styles.newsletter}>{newsletter}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 30,
    backgroundColor: '#f0f0f0',
  },
  columnContainer: {
    flex: 1,
  },
  column: {
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 12,
    lineHeight: 18,
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 16,
  },
  newsItem: {
    marginBottom: 10,
  },
  newsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  newsDate: {
    fontSize: 12,
    color: '#999999',
  },
  course: {
    marginBottom: 10,
    fontSize: 14,
  },
  newsletter: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export default Footer;
