import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <View style={styles.top}>
          <Text style={styles.textTop}>Top Left</Text>
        </View>
      </View>
      <View style={styles.containerCenter}>
        <View style={styles.center}>
          <Text style={styles.textCenter}>Center</Text>
        </View>
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.bottom}>
          <Text style={styles.textBottom}>Bottom Right</Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3fdff',
  },
  containerTop: {
    flex: 1,
    backgroundColor: 'red',
  },
  top: {
    backgroundColor: 'pink',
    marginTop: 80,
    marginHorizontal: 40,
    padding: 20,
    borderWidth: 4,
    borderColor: 'black',
    borderStyle: 'solid',
  },
  containerCenter: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    // transform: [{ translateX: -textCenter.width / 2 }, { translateY: -textCenter.height / 2 }],
  },
  center: {
    width: 150,
    height: 150,
    backgroundColor: 'pink',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCenter: {
  },
  containerBottom: {
    flex: 1,
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  bottom: {
    backgroundColor: 'lightblue',
    marginBottom: 80,
    marginHorizontal: 40,
    padding: 20,
    borderRadius: 10,
  },
  textTop: {
    color: '#000',
    fontSize: 24,
  },
  textBottom: {
    color: '#000',
    fontSize: 24,
    textAlign: 'right',
  },
})