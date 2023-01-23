import React from 'react';
import MyProfile from '../../screens/dashboard/myprofile/';
import Referral from '../../screens/dashboard/referral/';
import ChangePassword from '../../screens/dashboard//settings/';
import TabNav from '../tab/';
import CustomDraw from './customDrawer';
import Icon from 'react-native-vector-icons/Ionicons';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Draw = createDrawerNavigator();

export default function Drawernavigator() {
  return (
    <Draw.Navigator
      drawerContent={props => <CustomDraw {...props} />}
      initialRouteName="Tab"
      screenOptions={({route, navigation}) => ({
        headerTintColor: 'white',
        headerLeft: () => {
          return (
            <Icon
              name="chevron-back"
              size={40}
              color="white"
              style={{marginLeft: 20}}
              onPress={() => navigation.goBack()}
            />
          );
        },
        drawerLabelStyle: {fontSize: 20},
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 25,
          fontFamily: 'Nunito-Regular',
        },
        headerStyle: {
          backgroundColor: '#004169',
          height: 60,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        },
      })}>
      <Draw.Screen
        name="Tab"
        component={TabNav}
        options={{headerShown: false}}
      />
      <Draw.Screen name="MyProfile" component={MyProfile} />
      <Draw.Screen name="My Profile" component={MyProfile} />
      <Draw.Screen name="Referral" component={Referral} />
      <Draw.Screen name="Settings" component={ChangePassword} />
    </Draw.Navigator>
  );
}
