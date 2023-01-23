import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import styles from './style';
import Images from '../../../assets/images/index';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {CommonTextInput, CommonPopup} from '../../../components';
import * as AppActions from '../../../actions';
import {emailValidation} from '../../../utils/common';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ForgotPassword = ({navigation}) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');

  function reset() {
    let params = {email: email};
    if (email == '') {
      Alert.alert('Please enter an email');
    } else if (emailValidation(email)) {
      dispatch(AppActions.forgotPassword(params, navigation));
    } else {
      Alert.alert('Please enter a valid email');
    }
  }
  const popupText =
    'If that email address is in our\ndatabase, we will send you an\nemail to reset your password.';

  function handleEmail(text) {
    let mail = text.toLowerCase();
    mail = mail.trim();
    setEmail(mail);
  }

  return (
    <KeyboardAwareScrollView bounces={false}>
      <View style={styles.container}>
        <View style={styles.logoView}>
          <Image
            resizeMode="cover"
            style={styles.logoImg}
            source={Images.logo}
          />
        </View>
        <View style={styles.inputAreaView}>
          <View style={styles.inputArea}>
            <Text style={styles.inputAreaHeader}>Reset Password</Text>

            <View style={styles.inputText}>
              <CommonTextInput
                placeholder="Enter email"
                label="Email"
                type="emailAddress"
                onChangeText={text => handleEmail(text)}
                autoCaps={'none'}
              />
              <View style={styles.buttonsView}>
                <TouchableOpacity
                  style={styles.resetButton}
                  onPress={() => reset()}>
                  <Text style={styles.btnText}>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => navigation.goBack()}>
                  <Text style={styles.btnText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* <CommonPopup
        visible={show}
        heading="Head"
        bodytext={popupText}
        buttonpress={() => navigation.navigate('Login')}
        buttonTitle="Continue"
      /> */}
    </KeyboardAwareScrollView>
  );
};

export default ForgotPassword;
