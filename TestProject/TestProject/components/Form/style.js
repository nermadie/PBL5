import { StyleSheet } from 'react-native'
import color from '../../utils/color'
const styles = StyleSheet.create({
  addTask: {
    bottom: 0,
    height: 50,
    flexDirection: 'row',
  },
  input: {
    paddingHorizontal: 20,
    height: 50,
    flex: 1,
    backgroundColor: color.white,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#40a4c3',
    color: color.text,
  },
  iconWrapper: {
    marginLeft: 10,
    width: 50,
    height: 50,
    borderRadius: 60,
    backgroundColor: color.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: color.background,
  },
  icon: {
    color: color.white,
    fontSize: 30,
  }
})

export default styles;