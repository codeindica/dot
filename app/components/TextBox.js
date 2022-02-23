import React from 'react'
import {View,Text, StyleSheet,TextInput,TouchableOpacity, Platform,Keyboard } from 'react-native'
import { styles } from '../design/styles'

export default function TextBox({focus,label,max,onChangeText,value,onSubmitEditing,placeholder,onPress}) {
  return (
    <View style={styles.pad}>
      <Text style={styles.sm}>{label}</Text>
      <TextInput
        autoFocus={focus}
        label={label}
        value={value}
        onChangeText={onChangeText}
        allowFontScaling
        style={customStyles.input}
        onSubmitEditing={onSubmitEditing}
        value={value}
        maxLength={max}
        placeholder={placeholder}
        autoCorrect={false}
      />
      <TouchableOpacity onPress={onPress} style={{marginTop: 20,alignSelf: 'flex-end'}}>
        <Text style={styles.md}>Submit</Text>
      </TouchableOpacity>
    </View>

  )
}

const customStyles =StyleSheet.create({
  input:{
    width: '100%',
    borderRadius: 4,
    fontSize: 18,
    backgroundColor: '#e3e3e3',
    paddingVertical: Platform.OS === 'android'? 8 : 12,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
})
