import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity,StyleSheet, Platform } from 'react-native';
import { colorCode } from '../design/colorCode';

export default function FloatingButton({onPress,name}) {
  return (
    <TouchableOpacity onPress={onPress} style={customStyles.pos}>
      <Icon name={name} size={30} color={colorCode.white} />
    </TouchableOpacity>
  )
}

const customStyles = StyleSheet.create({
  pos:{
    position: 'absolute',
    bottom: Platform.OS === 'android' ?  -10 : 30,
    right: -30,
    backgroundColor: colorCode.primary,
    width: 120,
    height: 120,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
