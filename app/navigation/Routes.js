import React from 'react'
import {useSelector} from 'react-redux';
import Dashboard from '../screens/Dashboard'
import Landing from '../screens/Landing';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from "react-native-bootsplash";

export default function Routes() {
  const Stack = createNativeStackNavigator();
  const token = useSelector(state => state.appData.name);
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <Stack.Navigator mode="modal"
        screenOptions={{
          animation: "slide_from_right",
        }}>
        {!token ?
        <Stack.Screen options={{headerShown: false}} name="Landing" component={Landing} /> :
        <Stack.Screen options={{headerShown: false}} name="Dashboard" component={Dashboard} /> }
      </Stack.Navigator>
    </NavigationContainer>

  )
}
