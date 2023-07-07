import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import Task from '../../components/Task'
import Form from '../../components/Form'
import styles from './App.components.style'
export default function App() {
  const [taskList, setTaskList] = useState([]);
  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
  }
  const handleDeleteTask = (index) => {
    Alert.alert('Warning', 'Are you sure you want to delete this task?', [
      {
        text: 'OK', onPress: () => {
          const newTaskList = [...taskList];
          newTaskList.splice(index, 1);
          setTaskList(newTaskList);
          console.log("Task deleted");
        }
      },
      {
        text: 'Cancel',
        onPress: () => { },
      },
    ]);

  }
  return (
    <View style={styles.container}>
      <View style={styles.appContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Todo List</Text>
        </View>
        <ScrollView style={styles.taskContainer}>
          {
            taskList.map((task, index) => {
              return <Task key={index} title={task} number={index + 1} onDeleteTask={() => handleDeleteTask(index)} />
            })
          }
        </ScrollView>
        <Form onAddTask={handleAddTask} />
      </View>
    </View>
  )
}

