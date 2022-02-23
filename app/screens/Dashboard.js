import React,{useRef,useState} from 'react'
import { SafeAreaView,View,useWindowDimensions, FlatList, Share } from 'react-native'
import { styles } from '../design/styles';
import { colorCode } from '../design/colorCode';
import GroupBox from '../components/GroupBox';
import * as wpActions from '../store/actions';
import {useSelector, useDispatch} from 'react-redux';
import HeaderBox from '../components/HeaderBox';
import FloatingButton from '../components/FloatingButton';
import RBSheet from "react-native-raw-bottom-sheet";
import TextBox from '../components/TextBox';
import moment from 'moment';
import DataListings from '../components/DataListings';
import SearchBox from '../components/SearchBox';
import { showMessage } from 'react-native-flash-message';

export default function Dashboard() {
  const window = useWindowDimensions();
  const dispatch = useDispatch();
  const name = useSelector((state) => state.appData.name);
  const status = useSelector((state) => state.appData.status);
  const theme = useSelector((state) => state.appData.theme);
  const todoData = useSelector((state) => state.appData.todoData.sort((a,b)=> a.id < b.id ? 1 : -1));
  const archiveData = useSelector((state) => state.appData.archiveData.sort((a,b)=> a.id < b.id ? 1 : -1));
  const BottomRef = useRef(null);
  const [value,setValue]=useState('');
  const [searchText,setSearchText]=useState('');

  const handleLogOut=()=>{
    dispatch(wpActions.saveName(''));
    dispatch(wpActions.saveStatus(1));
  }

  const addContent=()=> {
    BottomRef.current.open();
    setSearchText('')
  }

  const saveData=()=>{
    if(value.length !== 0) {
      const obj = {
        id: moment().unix(),
        value: value.trim(),
      }
      BottomRef.current.close();
      dispatch(wpActions.saveTodo(obj));
    } else {
      BottomRef.current.close();
      showMessage({
        type: 'danger',
        message: 'Please try to add an item before submitting.'
      })
    }
  }

  const handleDelete=(id)=>{
    dispatch(wpActions.removeTodo(id));
  }

  const handleDone=(id)=>{
    todoData.map(item=> {
      if(item.id === id){
        dispatch(wpActions.saveArchive(item));
      }
    })
    dispatch(wpActions.removeTodo(id));
    showMessage({
      icon: 'success',
      type: 'success',
      message: 'Archived successfully.'
    })
  }

  const deleteArchive=(id)=>{
    dispatch(wpActions.removeArchive(id));
  }

  const tabAPress=()=>{
    dispatch(wpActions.saveStatus(1));
    setSearchText('')
  }

  const tabBPress=()=>{
    dispatch(wpActions.saveStatus(2));
    setSearchText('')
  }

  const handleShare=async (item) =>{
    try {
      const result = await Share.share({
        message:
          `${item.value}`,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const finalListingData = todoData.filter(item=>  {
    if(searchText === '') return item;
    if (item.value.toLowerCase().includes(searchText.toLowerCase())) return item;
  })

  const finalArchiveData = archiveData.filter(item=>  {
    if(searchText === '') return item;
    if (item.value.toLowerCase().includes(searchText.toLowerCase())) return item;
  })

  return (
    <SafeAreaView style={[styles.container,styles.pad,{backgroundColor: theme ? colorCode.black: colorCode.white}]}>
      <View>
        <HeaderBox
         name={name}
         themeIcon={!theme? 'moon': 'sun'}
         onThemePress={()=> dispatch(wpActions.saveTheme(!theme))}
         onPowerPress={()=> handleLogOut()}
         onFilterPress={()=>onFilterPress()}
        />
        <GroupBox
          bg={colorCode.light}
          show={status}
          onPressA={()=> tabAPress()}
          onPressB={()=> tabBPress()}
          todoCount={todoData.length}
          archiveCount={archiveData.length}
        />
         <SearchBox
          onChangeText={text=>setSearchText(text)}
          value={searchText}
          hasLength={searchText.length !== 0 && finalListingData.length === 0 && status === 1 || searchText.length !== 0 &&  finalArchiveData.length === 0 && status === 2}
         />
      </View>
      {status === 1 &&
      <FlatList
        showsVerticalScrollIndicator={false}
        data={finalListingData}
        keyExtractor={(item, index) => index}
        contentContainerStyle={{paddingBottom: 100}}
        renderItem={({index,item})=>
         <DataListings
          index={index+1}
          title={item.value}
          showDone
          handleShare={()=> handleShare(item)}
          handleDelete={()=>handleDelete(item.id)}
          handleDone={()=> handleDone(item.id)}
          date={moment.unix(item.id).format("hh:mm:ss a, MMM DD, YYYY")}
        />
       }
      />}
      {status === 2 &&
      <FlatList
        showsVerticalScrollIndicator={false}
        data={finalArchiveData}
        keyExtractor={(item, index) => index}
        contentContainerStyle={{paddingBottom: 100}}
        renderItem={({index,item})=>
         <DataListings
          index={index+1}
          title={item.value}
          showDone={false}
          handleShare={()=> handleShare(item)}
          handleDelete={()=>deleteArchive(item.id)}
          date={moment.unix(item.id).format("hh:mm:ss a, MMM DD, YYYY")}
        />
       }
      />}
      <RBSheet
        ref={BottomRef}
        height={window.height/4}
        openDuration={150}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.6)',
          },
          container: {
            padding: 20,
            backgroundColor: colorCode.black,
          }
        }}
      >
        <View style={styles.circle}/>
        <TextBox
          max={30}
          label={'Enter your todo item'}
          onChangeText={text=>setValue(text)}
          onPress={()=>saveData()}
          onSubmitEditing={()=>saveData()}
        />
      </RBSheet>
      {status === 1 &&
      <FloatingButton name="plus" onPress={()=> addContent()}/>}
    </SafeAreaView>
  )
}
