import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style';
export default function Task(props) {
  const number = props.number;
  const numText = number < 10 ? `0${number}` : number;
  const numColor = number % 2 === 0 ? styles.taskNumEven : styles.taskNumOdd;
  return (
    <TouchableOpacity
      onPress={props.onDeleteTask}
    >
      <View style={styles.taskWrapper}>
        <View style={[styles.taskNumWrapper, numColor]}>
          <Text style={styles.taskNum}>{numText}</Text>
        </View>
        <Text style={styles.taskContent}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}