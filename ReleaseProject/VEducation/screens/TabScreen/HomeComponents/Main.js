import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const images = [
  "https://moment-learning.vercel.app/static/media/slider-bg1.ad9854ae6107201e4f3b.jpg",
  "https://moment-learning.vercel.app/static/media/slider-bg2.5f9ea80f39853743f7d8.jpg",
  "https://moment-learning.vercel.app/static/media/slider-bg3.747a7ee63853f37f87f1.jpg"
];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default Main = () => {
  const [imgActive, setImgActive] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const scrollViewRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!scrolling) {
        scrollToNextImage();
      }
    }, 5000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [imgActive, scrolling]);

  const onChange = (nativeEvent) => {
    if (nativeEvent) {
      const slideIndex = Math.round(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (!scrolling && slideIndex !== imgActive) {
        setImgActive(slideIndex);
      }
    }
  };

  const handleScrollBegin = () => {
    setScrolling(true);
  };

  const handleScrollEnd = () => {
    setScrolling(false);
  };

  const scrollToPreviousImage = () => {
    if (scrollViewRef.current && imgActive > 0) {
      const offsetX = (imgActive - 1) * WIDTH;
      scrollViewRef.current.scrollTo({ x: offsetX, animated: true });
      setImgActive(imgActive - 1);
    } else if (scrollViewRef.current && imgActive === 0) {
      const offsetX = (images.length - 1) * WIDTH;
      scrollViewRef.current.scrollTo({ x: offsetX, animated: true });
      setImgActive(images.length - 1);
    }
  };

  const scrollToNextImage = () => {
    if (scrollViewRef.current && imgActive < images.length - 1) {
      const offsetX = (imgActive + 1) * WIDTH;
      scrollViewRef.current.scrollTo({ x: offsetX, animated: true });
      setImgActive(imgActive + 1);
    } else if (scrollViewRef.current && imgActive === images.length - 1) {
      const offsetX = 0;
      scrollViewRef.current.scrollTo({ x: offsetX, animated: true });
      setImgActive(0);
    }
  };

  return (
    <>
      <View style={styles.wrap}>
        <ScrollView
          ref={scrollViewRef}
          onScrollBeginDrag={handleScrollBegin}
          onScrollEndDrag={handleScrollEnd}
          onMomentumScrollEnd={({ nativeEvent }) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}
          scrollEventThrottle={16}
        >
          {images.map((e, index) => (
            <Image
              key={e}
              resizeMode='cover'
              style={styles.wrap}
              source={{ uri: e }}
            />
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {images.map((e, index) => (
            <View
              key={e}
              style={imgActive === index ? styles.dotActive : styles.dot}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.leftArrow} onPress={scrollToPreviousImage}>
          <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.rightArrow} onPress={scrollToNextImage}>
          <AntDesign name="right" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.aboutContainer}>
        <View style={styles.aboutHeader}>
          <Text style={styles.aboutTitle}>About Us</Text>
        </View>
        <View style={styles.aboutContentContainer}>
          <Text style={styles.aboutContent}>
            Discover Learn Anywhere - your one-stop online learning platform! With a diverse course catalog, expert instructors, flexible learning options, interactive lessons, community collaboration, and progress tracking, you can unleash your potential and learn anytime, anywhere.
          </Text>
          <Text style={styles.aboutContent}>
            Join us at our website and start your educational journey today!
          </Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://demo.graygrids.com/themes/edugrids/assets/images/about/about-img2.png' }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
  wrapDot: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotActive: {
    marginHorizontal: 4,
    width: 10,
    height: 3,
    backgroundColor: 'white',
    borderRadius: 2,
  },
  dot: {
    marginHorizontal: 4,
    width: 6,
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 1,
  },
  leftArrow: {
    position: 'absolute',
    top: '50%',
    left: 10,
    transform: [{ translateY: -12 }],
  },
  rightArrow: {
    position: 'absolute',
    top: '50%',
    right: 10,
    transform: [{ translateY: -12 }],
  },
  aboutContainer: {
    marginBottom: 20,
    backgroundColor: 'green',
    padding: 30,
  },
  aboutHeader: {
    marginBottom: 10,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  aboutContentContainer: {
    padding: 5,
  },
  aboutContent: {
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  image: {
    width: WIDTH * 0.9,
    height: WIDTH * 0.9,
  },
});
