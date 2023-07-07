import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Text style={styles.textTop}>Top Left</Text>
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.containerBottomLeft}>
          <Text style={styles.textBottomLeft}>Bottom Left</Text>
        </View>
        <View style={styles.containerBottomRight}>
          <View style={styles.containerBottomRightTop}>
            <Text style={[styles.textBottomRight, styles.textBottomRightTop]}>Right Top</Text>
          </View>
          <View style={styles.containerBottomRightBottom}>
            <Text style={[styles.textBottomRight, styles.textBottomRightBottom]}>Right Bottom</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerTop: {
    flex: 1,
    backgroundColor: '#f2ff81',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBottom: {
    flex: 1,
    flexDirection: 'row',
  },
  containerBottomLeft: {
    flex: 1,
    backgroundColor: '#43f979',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBottomRight: {
    flex: 1,
  },
  containerBottomRightTop: {
    flex: 2,
    backgroundColor: '#dd17de',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBottomRightBottom: {
    flex: 1,
    backgroundColor: '#2e7dac',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTop: {
    fontSize: 25,
    fontWeight: "bold",
    color: '#57ae94'
  },
  textBottomLeft: {
    fontSize: 25,
    fontWeight: "bold",
    color: '#57ae94'
  },
  textBottomRight: {
    fontSize: 25,
    fontWeight: "bold",
    color: '#fff'
  },
})