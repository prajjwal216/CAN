import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/auth/login';
import introSlider from '../../screens/auth/introSlider';
import ForgotPassword from '../../screens/auth/forgotPassword';
import Register from '../../screens/auth/register';
import { useEffect, useState } from 'react';
import { store } from '../../store/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { authReducer } from '../../reducers';

const AuthStack = createNativeStackNavigator();
const AuthStackNavigator = () => {
  const [intialRoute , setIntialRoute] = useState(null);
  const isFirstTime = useSelector(
    state=> state.authReducer.isFirsttime,
  );
  useEffect (() =>{
    if (isFirstTime==true){
      setIntialRoute('IntroSlider');
    }
    else {
      setIntialRoute('Login');
    }
  }, []);
  return intialRoute !=null ? (
    <AuthStack.Navigator screenOptions={{headerShown: false}}
    initialRouteName={intialRoute}>
      <AuthStack.Screen
        name="IntroSlider"
        component={introSlider}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  ):(
    <></>
  )
};

export default AuthStackNavigator;