import { View, Text,StyleSheet } from 'react-native';
import React from 'react';
import { styles } from '../design/styles';
import IconButton from './IconButton';
import { colorCode } from '../design/colorCode';

export default function DataListings({index,title,date,handleDone,showDone,handleDelete,handleShare}) {
  return (
    <View style={styles.pv}>
      <View style={[styles.row,styles.btw]}>
        <View>
          <View style={styles.row}>
            <Text style={customStyles.ten}>{index}.</Text>
            <View>
              <Text style={styles.md}>{title}</Text>
              <Text style={[styles.sm,{paddingLeft: 1,paddingTop: 4}]}>{date}</Text>
            </View>
          </View>
        </View>
        <View style={styles.row}>
        {showDone ? <IconButton name="star" onPress={handleDone} />: null}
        <IconButton name="share-2" onPress={handleShare} />
        <IconButton name="trash" onPress={handleDelete} />
      </View>
      </View>
    </View>
  );
}

const customStyles =StyleSheet.create({
  ten:{
    width: '15%',
    fontSize: 14,
    marginTop: 1.5,
    marginRight:2,
    color: colorCode.primary
  }
})