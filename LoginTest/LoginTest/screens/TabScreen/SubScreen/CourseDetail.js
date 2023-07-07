import React, { useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Video } from 'expo-av';

const CourseDetail = ({ route }) => {
  const { courseDetail } = route.params;
  const [selectedLesson, setSelectedLesson] = useState(null);

  const handleLessonPress = (lesson) => {
    setSelectedLesson(lesson);
  };

  return (
    <ScrollView style={{ flex: 1 }} scrollEventThrottle={16}>
      {selectedLesson ? (
        <>
          <View style={styles.videoContainer}>
            <Video source={{ uri: selectedLesson.video }} resizeMode="contain" style={styles.video} useNativeControls={true} />
          </View>
        </>
      ) : (
        <>
          <View style={styles.videoContainer}>
            <Video source={{ uri: courseDetail.lessons[0].video }} resizeMode="contain" style={styles.video} useNativeControls={true} />
          </View>
        </>
      )}
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Lessons</Text>
        <View style={styles.lessonsContainer}>
          {courseDetail.lessons.map((lesson) => (
            <TouchableOpacity
              key={lesson.id}
              style={styles.lessonItem}
              onPress={() => handleLessonPress(lesson)}
            >
              <Text style={styles.lessonName}>{lesson.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.courseDescWrapper}>
          <Image source={{ uri: courseDetail.image }} style={styles.courseImage} />
          <View style={{ justifyContent: 'center', flex: 1 }}>
            <Text style={styles.courseName}>{courseDetail.name}</Text>
            <Text style={styles.courseDescription}>{courseDetail.description}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>What will you learn?</Text>
        <View style={styles.plansContainer}>
          {courseDetail.plans.map((plan) => (
            <View
              key={plan.id}
              style={styles.willLearnItem}
            >
              <MaterialCommunityIcons name="sticker-check" size={24} color="#008000" />
              <Text style={styles.planTitle}>{plan.title}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Teacher</Text>
        <View style={styles.teacherContainer}>
          <Image source={{ uri: courseDetail.teacher.users.avatar }} style={styles.teacherAvatar} />
          <View style={styles.teacherDetails}>
            <Text style={styles.teacherName}>{courseDetail.teacher.users.fullName}</Text>
            <Text style={styles.teacherWorkplace}>{courseDetail.teacher.workplace}</Text>
          </View>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    paddingTop: 10,
    paddingBottom: 100,
    backgroundColor: 'white',
  },
  courseImage: {
    width: 80,
    height: 80,
    marginBottom: 20,
    borderRadius: 50,
    marginRight: 20,
  },
  courseName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  courseDescWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
  },
  courseDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  lessonsContainer: {
    marginBottom: 20,
  },
  lessonItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 10,
    elevation: 3,
  },
  lessonName: {
    fontSize: 16,
  },
  plansContainer: {
    marginBottom: 20,
  },
  willLearnItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5
  },
  planTitle: {
    fontSize: 16,
    marginLeft: 10,
  },
  teacherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teacherAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  teacherDetails: {
    flex: 1,
  },
  teacherName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  teacherWorkplace: {
    fontSize: 16,
  },
  videoContainer: {
    marginBottom: 20,
  },
  video: {
    width: '100%',
    height: 250,
  },
});

export default CourseDetail;
