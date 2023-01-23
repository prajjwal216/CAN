import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './style';
import Images from '../../../assets/images/index';
import {useDispatch, useSelector} from 'react-redux';
import React, {useState, useEffect, useCallback} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as AppActions from '../../../actions';
import PasswordValidation from '../../../components/common/passwordValidation';
import {emailValidation, passwordValidation} from '../../../utils/common';
import Icon from 'react-native-vector-icons/Ionicons';
const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const onLogin = () => {
    if (email == '') {
      Alert.alert('Email field cannot be empty');
    } else if (password == '') {
      Alert.alert('Password field cannot be empty');
    }
    else if (!emailValidation(email)) {
      Alert.alert('Please enter a valid email');
    }
    else {
      let params = {email: email, password: password};
      dispatch(AppActions.login(params, navigation));
    }
  };

  // useEffect(() => {
  //   console.log(authReducer, 'authReducer....');
  // }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  const managePasswordvisbility = () => {
    isPasswordSecure ? setIsPasswordSecure(false) : setIsPasswordSecure(true);
  };
  return (
    <View style={{flex: 1}}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{x: 0, y: 0}}
        scrollEnabled={true}
        bounces={false}>
        <View style={styles.container}>
          <View style={styles.logo}>
            <Image style={styles.logoimg} source={Images.logo} />
          </View>
          <View style={styles.inputarea}>
            <Text style={styles.login}>Login</Text>
            <View style={styles.inputText}>
              <Text style={styles.text}>Email</Text>
              <TextInput
                style={styles.textInputEmail}
                placeholder="Enter Email"
                autoCapitalize="none"
                value={email}
                onChangeText={text => setEmail(text)}></TextInput>
              <Text style={styles.textPassword}>Password</Text>
              <View>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter Password"
                  autoCapitalize="none"
                  secureTextEntry={isPasswordSecure}
                  value={password}
                  onChangeText={text => setPassword(text)}></TextInput>
                <TouchableOpacity style={styles.eye}>
                  <Icon
                    name={isPasswordSecure ? 'eye-off' : 'eye'}
                    size={20}
                    color={'rgba(0, 0, 0, 0.27)'}
                    onPress={() => managePasswordvisbility()}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.bottom}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ForgotPassword')}>
                  <Text style={styles.bottomText}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Register')}>
                  <Text style={styles.bottomText}>Become an Investor</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.loginBtn}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => onLogin()}>
                  <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
export default Login;
