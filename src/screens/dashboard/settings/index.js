import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './style'
import * as AppActions from "../../../actions";
import { useSelector, useDispatch } from "react-redux";
import CommonTextInput from "../../../components/common/commonTextInput";
import CommonButton from "../../../components/common/commonButton";

const ChangePassword = ({ navigation }) => {

  const dispatch = useDispatch();
  const userData = useSelector(state => state.authReducer.loginData);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  useEffect(() => {
    navigation.addListener('focus', () => {
      console.log("first")
      setCurrentPassword(""),
      setNewPassword(""),
      setConfirmNewPassword("")
    });
  },[]);
  
  useEffect(() => {
  }, [userData]);


  const submit = () => {

    if (currentPassword.length == 0) {
      Alert.alert("Please Enter Current Password");
    }
    else if (newPassword.length == 0) {
      Alert.alert("Please Enter New Password");
    } else if (newPassword.length < 8 || newPassword.length > 20) {
      Alert.alert("Password should be min 8 char and max 20 char");
    }
    else if (confirmNewPassword.length == 0) {
      Alert.alert("Please Enter the Password again");
    } else if (newPassword !== confirmNewPassword) {
      Alert.alert("Password Mismatch");
    }
    else {
      let params = {
        _id: userData && userData.result ? userData.result._id : '',
        current_password: currentPassword, new_password: newPassword
      };
      dispatch(AppActions.changePassword(params, navigation));

    }

  };
  return (

    <KeyboardAwareScrollView>

      <View style={styles.container}>

        <View style={{ justifyContent: 'center' }}>
          <Text style={styles.changePassword}>Change Password</Text>

          <CommonTextInput
            style={styles.textInput}
            placeholder="Enter your current password"
            label="Current Password"
            autoCapitalize="none"
            secureTextEntry={true}
            value={currentPassword}
            onChangeText={actualData =>
              setCurrentPassword(actualData)
            } />

          <CommonTextInput style={styles.textInput}
            placeholder="Enter new password"
            label="New Password"
            autoCapitalize="none"
            secureTextEntry={true}
            value={newPassword}
            onChangeText={actualData =>
              setNewPassword(actualData)
            } />

          <CommonTextInput
            style={styles.textInput}
            placeholder="Enter new password again"
            autoCapitalize="none"
            label="Confirm New Password"
            secureTextEntry={true}
            value={confirmNewPassword}
            onChangeText={actualData =>
              setConfirmNewPassword(actualData)
            } />

          <CommonButton title='Update' onPress={() => submit()} />

        </View>

      </View>
    </KeyboardAwareScrollView>

  );
}

export default ChangePassword;