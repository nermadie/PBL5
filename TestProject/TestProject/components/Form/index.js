import React, { useState } from 'react'
import { Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native'
import styles from './style'
export default function Form(props) {
  const [task, setTask] = useState('');
  const handleAddTask = () => {
    if (task === '') return alert('Please enter your task');
    props.onAddTask(task);
    setTask('');
    Keyboard.dismiss();
  }
  return (
    <KeyboardAvoidingView
      style={styles.addTask}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={60}
    >
      <TextInput
        value={task}
        onChangeText={text => setTask(text)}
        placeholder='Your Task...'
        style={styles.input} />
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}