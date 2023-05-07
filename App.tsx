/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import Login from './Screens/Login';
import English from './Screens/English';
import Tamil from './Screens/Tamil';
import Hindi from './Screens/Hindi';
import Malayalam from './Screens/Malayalam';
import Telugu from './Screens/Telugu';
import Kannada from './Screens/Kannada';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



const App = () => {

  const Stack = createNativeStackNavigator();
  const isDarkMode = useColorScheme() === 'dark';


  return (
   
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="English" component={English}/>
        <Stack.Screen name="Tamil" component={Tamil}/>
        <Stack.Screen name="Hindi" component={Hindi}/>
        <Stack.Screen name="Malayalam" component={Malayalam}/>
        <Stack.Screen name="Telugu" component={Telugu}/>
        <Stack.Screen name="Kannada" component={Kannada}/>


      </Stack.Navigator>
  );
}


export default ()=>{
  const scheme = useColorScheme();
  return(
    <NativeBaseProvider>
      <NavigationContainer>
        <App/>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}