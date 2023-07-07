import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [buttonScale] = useState(new Animated.Value(1));

  const handleSubscribe = () => {
    // Xử lý logic khi người dùng subscribe
    console.log('Email:', email);
  };

  const animateButton = () => {
    Animated.spring(buttonScale, {
      toValue: 0.9,
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  const resetButton = () => {
    Animated.spring(buttonScale, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.smallTitle}>Sign Up for</Text>
      <Text style={styles.title}>The Newsletter</Text>
      <Text style={styles.description}>
        Subscribe to us to always stay in touch with us and get the latest news about our company and all of our activities!
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
        <TouchableOpacity
          style={styles.subscribeButton}
          onPress={handleSubscribe}
          activeOpacity={0.9}
          onPressIn={animateButton}
          onPressOut={resetButton}
        >
          <Text style={styles.buttonText}>Subscribe Now</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  smallTitle: {
    fontSize: 16,
    textAlign: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: '900',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    padding: 20,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  inputContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  subscribeButton: {
    backgroundColor: '#008000',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NewsletterSignup;