import { View, Text,StyleSheet } from 'react-native';
import React from 'react';
import { styles } from '../design/styles';
import IconButton from './IconButton';
import { colorCode } from '../design/colorCode';

export default function DataListings({index,title,date,handleDone,showDone,handleDelete,handleShare}) {
  return (
    <View style={styles.pv}>
      <View style={[styles.row,styles.btw]}>
          <View style={styles.row}>
            <Text style={customStyles.ten}>#{index}.</Text>
            <View style={[styles.row,styles.btw,customStyles.nine]}>
              <View>
                <Text style={styles.md}>{title}</Text>
                <Text style={[styles.sm,{paddingLeft: 1,paddingTop: 4}]}>{date}</Text>
              </View>
              <View style={styles.row}>
                {showDone ? <IconButton name="star" onPress={handleDone} />: null}
                <IconButton name="share-2" onPress={handleShare} />
                <IconButton name="trash" onPress={handleDelete} />
              </View>
            </View>
          </View>
      </View>
    </View>
  );
}

const customStyles =StyleSheet.create({
  ten:{
    width: '9%',
    fontSize: 14,
    marginTop: 2,
    marginRight:1,
    color: colorCode.primary
  },
  nine:{
    width: '91%',
  }
})