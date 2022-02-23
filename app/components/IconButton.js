import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity,StyleSheet } from 'react-native';
import { colorCode } from '../design/colorCode';

export default function IconButton({onPress,name}) {
  return (
    <TouchableOpacity onPress={onPress} style={customStyles.width} activeOpacity={1}>
      <Icon name={name} size={16} color={colorCode.secondary} />
    </TouchableOpacity>
  )
}

const customStyles = StyleSheet.create({
  width: {
    width: 40,
    elevation: 2,
    alignItems: 'flex-end',
  }
})
