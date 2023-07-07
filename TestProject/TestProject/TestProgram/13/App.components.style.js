import { StyleSheet } from 'react-native'
import color from './utils/color'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5edee',
  },
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  headerContainer: {
    marginBottom: 20,
  },
  header: {
    fontSize: 30,
    color: color.primary,
    fontWeight: 'bold',
  },
  taskContainer: {
    flex: 1,
  },
})
export default styles;