import React,{useState} from 'react'
import { View,StyleSheet,TouchableOpacity, Text,Image } from 'react-native'
import {  } from 'react-native-gesture-handler';
import { colorCode } from '../design/colorCode';

export default function ButtonBox({title}) {
  const[value,setValue]=useState(0);
  return (
    <View style={customStyles.container}>
      <TouchableOpacity style={customStyles.btn}>
        <Text style={customStyles.btnText}>{title}</Text>
      </TouchableOpacity>
      </View>
  )
}

const customStyles = StyleSheet.create({
  btn:{
    width: 350,
    height: 50,
    backgroundColor: colorCode.white,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 200,
    margin: 5,
  },
  btnText:{
    fontSize: 18,
    fontWeight: 'bold',
  }
})