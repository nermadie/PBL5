import { StyleSheet } from 'react-native'
import color from '../../utils/color'

const styles = StyleSheet.create({
  taskWrapper: {
    flexDirection: 'row',
    backgroundColor: color.white,
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 15,
    marginVertical: 5,
  },
  taskNumWrapper: {
    height: 45,
    width: '18%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  taskNumEven: {
    backgroundColor: color.second,
  },
  taskNumOdd: {
    backgroundColor: color.green,
  },
  taskNum: {
    color: color.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskContent: {
    flex: 1,
    fontSize: 16,
    color: color.text,
  },
})

export default styles;