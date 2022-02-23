import React from 'react'
import { View,Text,StyleSheet,TextInput } from 'react-native'
import { colorCode } from '../design/colorCode'
import { styles } from '../design/styles'

export default function SearchBox({onChangeText,value,hasLength}) {
  return (
    <View>
      <TextInput
        style={customStyles.input}
        max={48}
        onChangeText={onChangeText}
        placeholder="Search items here..."
        value={value}
      />
      {hasLength &&
      <Text style={[styles.md,styles.ctr]}>No results found</Text> }
    </View>
  )
}
const customStyles = StyleSheet.create({
  input: {
    width: Platform.OS === 'android'? '95%' : '90%',
    alignSelf: 'center',
    backgroundColor: colorCode.light,
    padding: Platform.OS === 'android'? 8 : 12,
    borderRadius: 4,
    marginBottom: 10
  }
})