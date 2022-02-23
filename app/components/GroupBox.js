import React from 'react'
import { View,Text,StyleSheet, TouchableOpacity } from 'react-native'
import { colorCode } from '../design/colorCode'
import { styles } from '../design/styles'

export default function GroupBox({show,onPressA,onPressB,todoCount,archiveCount}) {
  return (
    <View style={customStyles.row}>
      <TouchableOpacity onPress={onPressA} style={[customStyles.box,styles.row,{borderBottomColor: show===1? colorCode.secondary : 'transparent'}]}>
        <Text style={[styles.md,{color: show===1? colorCode.secondary : colorCode.primary}]}>todo </Text>
        {todoCount!== 0 ? <Text style={[styles.sm,{color: show===1? colorCode.secondary : colorCode.primary}]}>{todoCount}</Text> : null}
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressB} style={[customStyles.box,styles.row,{borderBottomColor: show===2? colorCode.secondary : 'transparent'}]}>
        <Text style={[styles.md,{color: show===2? colorCode.secondary : colorCode.primary}]}>archive </Text>
        {archiveCount!== 0 ? <Text style={[styles.sm,{color: show===2? colorCode.secondary : colorCode.primary}]}>{archiveCount}</Text> : null}
      </TouchableOpacity>
    </View>
  )
}

const customStyles =StyleSheet.create({
  row:{
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-around',
  },
  box:{
    borderBottomWidth: 1,
    paddingVertical: 10,
    width: '40%',
  }
})
