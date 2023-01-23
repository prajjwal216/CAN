import styles from './style';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import Images from '../../../assets/images/index';
import { CommonButton } from '../../../components';
import { CommonTextInput } from '../../../components';
import { CommonPopup } from '../../../components';
import * as AppActions from '../../../actions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import GLOBALS from '../../../constants';
import { Dropdown } from 'react-native-element-dropdown';
import { letterValidation, nameValidation } from '../../../utils/common';

const { FONTS, COLORS } = GLOBALS;

import { emailValidation, passwordValidation } from '../../../utils/common';
const Register = ({ navigation }) => {
  const text =
    'Thanks for sharing your interest to become an investor with CAN. We’ll reach out to you within next 24-72 hours to assess whether you meet our criteria to become an investor.';
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const onRegister = () => {
    let params = {
      name: userName,
      email: email,
      password: password,
      organization: Org,
      state: state,
      city: city,
    };

    if (userName.trim() == '') {
      Alert.alert('Please enter name');
    }
    // else if (letterValidation(userName)) {
    //   Alert.alert('Invalid Name');
    // } 
    else if (userName.length < 3) {
      Alert.alert('Name too short');
    } else if (!emailValidation(email)) {
      Alert.alert('Please enter valid email');
    } else if (!password) {
      Alert.alert('Password must contain minimum 8 alphanumeric characters with atleast 1 uppercase letter, 1 number and 1 special character (#,?,!,@,$,%,^,&,*,-)');
    } else if (!passwordValidation(password)) {
      Alert.alert('Invalid password');
    } else if (!Org) {
      Alert.alert('Please enter organization');
    } else if (!state) {
      Alert.alert('Please enter state');
    } else if (!city) {
      Alert.alert('Please enter city');
    } else if (letterValidation(city)) {
      Alert.alert('Invalid city name');
    } else {
      dispatch(AppActions.register(params, navigation));
    }
  };

  const [password, setPassword] = useState('');
  const [Org, setOrg] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setuserName] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [listStates, setlistState] = useState([]);
  useEffect(() => {
    dispatch(AppActions.getlistState());
  }, []);

  const listState = useSelector(state => state.authReducer.listState);
  useEffect(() => {
    setlistState(listState);
  }, [listState]);

  function handleEmail(text) {
    let mail = text.toLowerCase();
    mail = mail.trim();
    setEmail(mail);
  }

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        bounces={false}>
        <View style={styles.logo}>
          <Icon
            onPress={() => navigation.navigate('Login')}
            style={styles.back}
            name="chevron-back-outline"
            size={50}
            color={COLORS.WHITE}
          />
          <Image
            resizeMode="contain"
            style={styles.logoimg}
            source={Images.logo}
          />
        </View>
        <View style={styles.inputarea}>
          <Text style={styles.heading}>Become an Investor</Text>
          <CommonTextInput
            placeholder="Enter name"
            label="Name"
            value={userName}
            onChangeText={data => setuserName(data)}
          />
          <CommonTextInput
            placeholder="Enter email"
            label="Email"
            onChangeText={data => handleEmail(data)}
            autoCaps={'none'}
          />
          <Text style={styles.passwordLabel}>Password</Text>
          <View style={styles.passwordView}>
            <TextInput
              style={styles.inputPassword}
              placeholder="Enter password"
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={seePassword}
              autoCaps={false}
            />
            <TouchableOpacity onPress={() => setSeePassword(!seePassword)}>
              <Icon
                name={seePassword ? 'eye-off' : 'eye'}
                size={25}
                color={COLORS.PLACEHOLDER}
                style={styles.passwordIcon}
              />
            </TouchableOpacity>
          </View>
          <CommonTextInput
            placeholder="Enter organization"
            label="Organization"
            value={Org}
            onChangeText={data => setOrg(data)}
          />
          <Text style={styles.stateLabel}>State</Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={listStates}
            search
            maxHeight={300}
            labelField="state"
            placeholder="Select state"
            searchPlaceholder="Search..."
            value=""
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setState(item.state);
              setIsFocus(false);
            }}
          />
          <CommonTextInput
            placeholder="Enter city"
            label="City"
            value={city}
            onChangeText={data => setCity(data)}
          />
          <CommonButton
            title="Register"
            style={styles.button}
            onPress={() => onRegister()}
          />

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Already have an account?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
    // <CommonPopup
    //   visible={show}
    //   bodytext={text}
    //   buttonpress={() => navigation.navigate('Login')}
    //   buttonTitle="Continue"
    // />
  );
};
export default Register;
