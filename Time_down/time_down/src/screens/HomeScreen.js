import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign, FontAwesome } from '@expo/vector-icons';

// const { width, height } = Dimensions.get('window');
export default function HomeScreen() {
  const [number, setNumber] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (isRunning && number > 0) {
      interval = setInterval(() => {
        setNumber(number - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [number, isRunning]);

  const handlePlay = () => {
    setIsRunning(true);
  }
  const handlePause = () => {
    setIsRunning(false);
  }
  const handleRefresh = () => {
    setIsRunning(false);
    setNumber(60);
  }

  return (
    <View style={styles.container}>
      <Image style={styles.imageBackground} src={'https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=758&q=80'} />
      <View style={styles.viewBody}>
        <Text style={styles.text}>{number}</Text>
        <View style={styles.viewButton}>
          <TouchableOpacity style={styles.button} onPress={handlePlay}>
            <AntDesign name="playcircleo" size={44} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlePause}>
            <AntDesign name="pausecircleo" size={44} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleRefresh}>
            <FontAwesome name="refresh" size={44} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  viewBody: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.7,
  },
  text: {
    fontSize: 150,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  viewButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    borderRadius: 100,
  }
})