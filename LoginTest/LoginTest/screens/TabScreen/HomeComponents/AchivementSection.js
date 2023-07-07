import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Animated, Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;

export default function AchievementSection() {
  const backgroundImage = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(backgroundImage, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const backgroundOpacity = backgroundImage.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.5],
  });

  const boxWidth = WIDTH * 0.4;
  const boxHeight = boxWidth;

  return (
    <View style={styles.achievementContainer}>
      <Animated.View
        style={[
          styles.backgroundImage,
          { opacity: backgroundOpacity },
        ]}
      >
        <Image
          source={{ uri: 'https://moment-learning.vercel.app/static/media/achievement-bg.23bc650b50d370044c3a.jpg' }}
          style={styles.backgroundImage}
        />
      </Animated.View>
      <View style={styles.achievementContent}>
        <View style={styles.row}>
          <View style={[styles.column, { width: boxWidth, height: boxHeight }]}>
            <Text style={[styles.achievementText, { fontWeight: 'bold', textAlign: 'center' }]}>500+</Text>
            <Text style={[styles.achievementLabel, { textAlign: 'center' }]}>Happy Clients</Text>
          </View>
          <View style={[styles.column, { width: boxWidth, height: boxHeight }]}>
            <Text style={[styles.achievementText, { fontWeight: 'bold', textAlign: 'center' }]}>70+</Text>
            <Text style={[styles.achievementLabel, { textAlign: 'center' }]}>Online Courses</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.column, { width: boxWidth, height: boxHeight }]}>
            <Text style={[styles.achievementText, { fontWeight: 'bold', textAlign: 'center' }]}>100%</Text>
            <Text style={[styles.achievementLabel, { textAlign: 'center' }]}>Satisfaction</Text>
          </View>
          <View style={[styles.column, { width: boxWidth, height: boxHeight }]}>
            <Text style={[styles.achievementText, { fontWeight: 'bold', textAlign: 'center' }]}>100%</Text>
            <Text style={[styles.achievementLabel, { textAlign: 'center' }]}>Support</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  achievementContainer: {
    position: 'relative',
    backgroundColor: '#008000',
    overflow: 'hidden',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  achievementContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  column: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  achievementText: {
    fontSize: 28,
    color: 'white',
  },
  achievementLabel: {
    fontSize: 16,
    color: 'white',
  },
});
