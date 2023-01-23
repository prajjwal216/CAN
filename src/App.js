import React, {useEffect,useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Platform, SafeAreaView, StatusBar, View} from 'react-native';
import {Provider,useSelector,useDispatch} from 'react-redux';
import {store, persistor} from './store/configureStore';
import Drawernavigator from './navigator/drawers/drawer';
import  Root from './navigator/root/index'
import AuthStackNavigator from './navigator/authstack';
import DashboardStackNavigator from './navigator/dashboardStack';
import {
  InitiateNotification,
  checkPushPermission,
} from '../src/utils/Notification';
import Loading from './components/common/loader';
import introSlider from './screens/auth/introSlider';
import Login from './screens/auth/login';
import COLORS from './constants';
import {PersistGate} from 'redux-persist/integration/react';
const Stack = createNativeStackNavigator();

function App() {
 
  useEffect(() => {
    SplashScreen.hide();
    Platform.OS === 'android'
      ? StatusBar.setBackgroundColor(COLORS.PRIMARY)
      : null;
    // InitiateNotification()
   
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={{flex: 1}}>
          <Loading />
          <SafeAreaView style={{backgroundColor: '#004169'}} />
          <NavigationContainer>
            <Root/>
          </NavigationContainer>
        </View>
      </PersistGate>
    </Provider>
  );
}

export default App;
