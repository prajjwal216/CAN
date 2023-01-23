import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useDispatch, useSelector } from 'react-redux';
import * as AppActions from '../../../actions/';
import Style from './style';
import CommonTextInput from '../../../components/common/commonTextInput';
import CommonButton from '../../../components/common/commonButton';
import moment from 'moment';
import {
  SafeAreaView,
  View,
  Text,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import { Styles } from 'react-native-dots-pagination/styles';
import { nameValidation, emailValidation,phoneValidation } from '../../../utils/common'

const Referral = ({navigation}) => {
  const dispatch = useDispatch();
  const getReferralList = useSelector(
    state => state.homeReducer.allReferralList,
  );
  const loginid = useSelector(state => state.authReducer.loginData.result._id);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [all_referrals, setAllReferrals] = useState([]);

  useEffect(() => {
    navigation.addListener('focus',() => {
      setName(''),
      setEmail(''),
      setPhone('')
    });
  },[]);

  const addReferral = () => {
    if(!name){
      Alert.alert('Please enter name');
    }
   else if (nameValidation(name)) {
      Alert.alert('Please enter valid name');
    }  else if (!email) {
      Alert.alert('Please enter email');
    }
    else if (!emailValidation(email)) {
      Alert.alert('Please enter valid email');
    }  else if (!phone) {
      Alert.alert('Please enter phone number');
    }else if (!phoneValidation(phone)) {
      Alert.alert('Please enter valid phone number');
    } else {
      let params = {
        user_mandate: loginid,
        name: name,
        email: email,
        phone: phone,
      };
      dispatch(AppActions.addReferral(params, loginid));
      setName('')
      setEmail('')
      setPhone('')
    }
  };

  useEffect(() => {
    dispatch(AppActions.getReferralList(loginid));
  }, []);

  useEffect(() => {
    setAllReferrals(getReferralList);
  }, [getReferralList]);

  return (
    <SafeAreaView style={Style.container}>
      <View>
        <ScrollView>
          <View style={Style.login}>
            <Text style={Style.loginText}>
              Refer someone whom you think can be part of CAN
            </Text>
          </View>

          <CommonTextInput
            placeholder={'Enter Name'}
            autoCorrect={false}
            value={name}
            onChangeText={text => setName(text)}
            label="Name"
          />

          <CommonTextInput
            placeholder={'Enter Email'}
            autoCaps={"none"}
            autoCorrect={false}
            value={email}
            label="Email"
            onChangeText={data => setEmail(data)}
          />

          <CommonTextInput
            placeholder={'Enter Phone'}
            keyboardType='numeric'
            maxLength={10}
            value={phone}
            onChangeText={number => setPhone(number)}
            label="Phone"
          />
          <CommonButton title={'Submit'} onPress={addReferral} />

          {all_referrals.length > 0 && (
            <View style={Style.login}>
              <Text style={Style.loginText}> My Referrals</Text>
            </View>
          )}

          <FlatList
            showsVerticalScrollIndicator={false}
            data={all_referrals}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
            renderItem={({ item }) => {
              return (
                <View style={Style.listItem}>
                  <View style={Style.nameView}>
                    <Text style={Style.nameText}>
                      {item.name}
                    </Text>
                    <Text style={Style.mailText}>
                      <AntDesign name="mail" size={14} color={'#0A4975'} />
                      {' '}
                      {item.email}
                    </Text>
                  </View>
                  <View style={{ flex: 0.5 }}>
                    <Text style={Style.dateText}>
                      <MaterialCommunityIcons
                        name="calendar-month-outline"
                        size={14}
                        color={'#0A4975'}
                      />{' '}
                      {moment(item.createdAt).format('D/M/YY')}
                    </Text>
                    <Text style={Style.phoneText}>
                      <SimpleLineIcons
                        name="phone"
                        size={14}
                        color={'#0A4975'}
                      />{' '}
                      {item.phone}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Referral;
