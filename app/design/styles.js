import { Platform, StyleSheet } from 'react-native'
import { colorCode } from './colorCode'

export const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  row:{
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  ctr:{
    alignSelf: 'center',
    textAlign: 'center',
  },
  around:{
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  btw:{
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title:{
    fontSize: 90,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 100,
    color: colorCode.primary,
  },
  lg:{
    fontSize: 30,
    fontWeight: 'bold',
    color: colorCode.primary,
  },
  md:{
    fontSize: 16,
    fontWeight: '700',
    color: colorCode.primary,
  },
  sm:{
    fontSize: 12,
    fontWeight: '500',
    color: colorCode.primary,
  },
  brandText:{
    color: colorCode.primary,
  },
  pad:{
    padding: 10,
    paddingHorizontal: Platform.OS === 'ios' ? 20: 5
  },
  pv:{
    padding: 10,
    paddingHorizontal: Platform.OS === 'ios' ? 20: 10
  },
  img:{
    width: '100%',
    alignSelf: 'center',
    height: 300,
    resizeMode: 'contain',
    marginVertical: 40
  },
  circle:{
    width: 250,
    height: 250,
    backgroundColor: colorCode.primary,
    borderRadius: 200,
    position: 'absolute',
    top: 0,
    right: -40,
    opacity: 0.4,
  }
})