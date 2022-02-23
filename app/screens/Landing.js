import React,{useState} from 'react'
import { SafeAreaView,View, Text,TouchableOpacity} from 'react-native'
import * as wpActions from '../store/actions';
import {useDispatch} from 'react-redux';
import { styles } from '../design/styles';
import TextBox from '../components/TextBox';
import { colorCode } from '../design/colorCode';
import {showMessage,hideMessage} from "react-native-flash-message";

export default function Landing() {
  const dispatch = useDispatch();
  const [name,setName]=useState('');

  const handleNameInput=()=>{
    const username = name.replace(/^\s+|\s+$/gm,'');
    if(username){
      dispatch(wpActions.saveName(username));
    } else {
      showMessage({
        message: "Your username is mandatory.",
        type: "danger",
      });
    }
  }

  return (
    <SafeAreaView style={[styles.container,styles.pad,{backgroundColor: colorCode.black}]}>
      <Text style={styles.title}>dot.</Text>
      <View style={styles.circle}/>
      <View style={styles.pad}>
        <TextBox
          focus={false}
          label={'Enter your name'}
          max={12}
          onPress={()=>handleNameInput()}
          onChangeText={(text)=>setName(text)}
          onSubmitEditing={()=>handleNameInput()}
        />
      </View>
    </SafeAreaView>
  )
}
