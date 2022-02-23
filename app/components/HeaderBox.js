import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { styles } from '../design/styles'
import IconButton from './IconButton'

export default function HeaderBox({name,themeIcon,onThemePress,onPowerPress,onFilterPress}) {
  return (
    <View style={[styles.row,styles.btw,styles.pad]}>
      <View>
        <Text style={styles.lg}>dot.</Text>
        <Text style={styles.md}>Welcome {name}!</Text>
      </View>
      <View style={styles.row}>
        <IconButton name={themeIcon} onPress={onThemePress} />
        <IconButton name="power" onPress={onPowerPress} />
      </View>
    </View>
  )
}
