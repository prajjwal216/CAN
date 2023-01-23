import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Platform, SafeAreaView, StatusBar, View} from 'react-native';

import {store} from '../../store/configureStore';

import Drawernavigator from '../drawers/drawer';

import AuthStackNavigator from '../authstack';

import DashboardStackNavigator from '../dashboardStack';
import {PersistGate} from 'redux-persist/integration/react';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const Root =()=> { 
  const [intialRoute , setIntialRoute ] = useState(null);
  const isLogin = useSelector (
    state=> state.authReducer.isLoggedIn
  );
  useEffect (() =>{
    if (isLogin==true){
      setIntialRoute('Drawer');
    }
    else {
      setIntialRoute('AuthStack');
    }
  }, []);
  return intialRoute !=null ? (
      <Stack.Navigator
        initialRouteName={intialRoute}
        options={{headerShown: false}}>
        <Stack.Screen
          name="AuthStack"
          component={AuthStackNavigator}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Drawer"
          component={Drawernavigator}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="DashboardStack"
          component={DashboardStackNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
  ):(
    <></>
  )
}

export default Root;
