import React, { useState, useEffect } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import * as AppActions from '../../../actions'
import { useSelector, useDispatch } from "react-redux";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Dropdown } from 'react-native-element-dropdown';
import { letterValidation, phoneValidation } from '../../../utils/common';
import Images from '../../../assets/images';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Platform,
  Image
} from 'react-native';
import style from './style'
import CommonTextInput from "../../../components/common/commonTextInput";
import CommonButton from "../../../components/common/commonButton";
import COLORS from '../../../constants/colors';
import ImageLoad from 'react-native-image-placeholder'
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import { IgnorePattern } from 'react-native/Libraries/LogBox/LogBox';
import {checkGalleryPermission,checkCameraPermission}  from '../../../utils/permission';
import { panGestureHandlerCustomNativeProps } from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';


export default function MyProfile({ navigation }) {

  const dispatch = useDispatch();
  const userData = useSelector(state => state.authReducer.loginData.result);
  const profileReducerData = useSelector(state => state.homeReducer.profileList);
  const token = useSelector(
    state => state.authReducer.loginData.Token,
  );

  const listState = useSelector(state => state.authReducer.listState);

  const [phone, setPhone] = useState();
  const [Org, setOrg] = useState();
  const [email, setEmail] = useState();
  const [userName, setuserName] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [dob, setDob] = useState();
  const [picture, setPicture] = useState({ uri: '' });
  const [file, setFilePath] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [listStates, setlistState] = useState([]);

  useEffect(() => {
    dispatch(AppActions.getMyprofile(userData._id))
    dispatch(AppActions.getlistState());
  }, []);

  useEffect(() => {
    navigation.addListener('focus', () => {
    dispatch(AppActions.getMyprofile(userData._id))
  });
  }, []);

  useEffect(() => {
    setlistState(listState);
  }, [listState]);

  useEffect(() => {
    if (profileReducerData?.data?.length > 0) {
      setPicture({ uri: profileReducerData.logoImage })
      setuserName(profileReducerData.data[0].name)
      setEmail(profileReducerData.data[0].email)
      setDob(profileReducerData.data[0].dob)
      setPhone(JSON.stringify(profileReducerData.data[0].phone))
      setOrg(profileReducerData.data[0].organization)
      setCity(profileReducerData.data[0].city)
      setState(profileReducerData.data[0].state)
    }
  }, [profileReducerData]);

  useEffect(() => {
    navigation.addListener('focus', () => {
    if (profileReducerData?.data?.length > 0) {
      setPicture({ uri: profileReducerData.logoImage })
      setuserName(profileReducerData.data[0].name)
      setEmail(profileReducerData.data[0].email)
      setDob(profileReducerData.data[0].dob)
      setPhone(JSON.stringify(profileReducerData.data[0].phone))
      setOrg(profileReducerData.data[0].organization)
      setCity(profileReducerData.data[0].city)
      setState(profileReducerData.data[0].state)
    }
  });
  }, [profileReducerData]);

  const [date, setDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {

    setDate(date);
    hideDatePicker();
  };
  useEffect(() => {
    setDob(getDate());
  }, [date])

  const getDate = () => {
    let tempDate = date.toString().split(' ');
    return date !== '' ? `${tempDate[2]} ${tempDate[1]} ${tempDate[3]}` : '';
  };

  const handlecamerapermission = () => {

      if (checkCameraPermission)
      {
        openCamera()
      }
  }

  const handleGalleryPermission = () => {

    if (checkGalleryPermission)
    {
      openGallery()
    }
}


  const createThreeButtonAlert = () => {
    Alert.alert(
      "Upload profile",
      "using",
      [
        {
          text: "Open Camera",
          onPress: () => handlecamerapermission()
        },
        {
          text: "Open Gallery",
          onPress: () => handleGalleryPermission()
        },
        {
          text: "Cancel",
          style: "cancel"
        }
      ]
    );
  }


  const openCamera = () => {
    const options = {
      storageoptions: {
        path: 'images',
        mediaType: 'photo'
      },
      includeBase64: true,
    }

    launchCamera(options, (res) => {
      if (res.didCancel) {
      } else if (res.errorCode) {
      } else if (res.assets[0].fileSize < 10000000) {
        setFilePath(res.assets[0]);
        setPicture({ uri: res.assets[0].uri }
        )
      } else {
        Alert.alert('Image size should be less than 10 MB')
      }
    })
  }

  const openGallery = () => {

    const options = {
      storageoptions: {
        path: 'images',
        mediaType: 'photo'
      },
      includeBase64: true,
    }
    launchImageLibrary(options, (res) => {
      if (res.didCancel) {
      } else if (res.errorCode) {
      } else if (res.assets[0].fileSize < 10000000) {
        setFilePath(res.assets[0]);
        setPicture({ uri: res.assets[0].uri }
        )
      } else {
        Alert.alert('Image size should be less than 10 MB')
      }
    })
  }

  const pictureData = (str) => {
    return str.slice((str.lastIndexOf('/') + 1))
  }
  const d = new Date();
  const submit = () => {
    if (!userName) {
      Alert.alert('Please enter name');
    } else if (userName.length < 3) {
      Alert.alert('Please enter valid name');
    } else if (letterValidation(userName)) {
      Alert.alert('Invalid name')
    } else if (!email) {
      Alert.alert('Please enter valid email');
    } else if (!dob) {
      Alert.alert('Please enter  DOB');
    } else if (!phone) {
      Alert.alert('Please enter phone number');
    } else if (phone.length < 10) {
      Alert.alert('Please enter valid number');
    } else if (!phoneValidation(phone)) {
      Alert.alert('Invalid number')
    } else if (!Org) {
      Alert.alert('Please enter organization');
    } else if (!state) {
      Alert.alert('Please enter state');
    } else if (!city) {
      Alert.alert('Please enter city');
    } else if (city.length < 3) {
      Alert.alert('Please enter valid city');
    } else {
      setuserName(userName)
      setCity(city)
      setOrg(Org)
      setState(state)
      setPhone(phone)

      let formdata = new FormData();
      formdata.append('name', userName);
      formdata.append('dob', dob);
      formdata.append('phone', phone);
      formdata.append('organization', Org);
      formdata.append('state', state);
      formdata.append('city', city);
      formdata.append('_id', userData._id);
      if (file != '') {
        formdata.append('profile_photo', {
          uri: Platform.OS == 'ios' ? file.uri.replace('file://', '/') : file.uri,
          name: file.uri.substring(file.uri.lastIndexOf('/') + 1),
          type: 'image/jpg',
        });
      }
      dispatch(AppActions.updateMyProfile(formdata, token));
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView>
        <View style={style.container}>
          <Text style={style.myProfile}>My Profile</Text>
        </View>
        <View style={[style.imageContainer]}>
          {pictureData(picture.uri) ? (
            <View>
              <TouchableOpacity onPress={createThreeButtonAlert}>
                <ImageLoad style={style.imageloadStyle} source={picture} />
                <Image source={Images.myProfileIcon} style={style.profileiconimage} />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={style.profileiconStyle}>
              <TouchableOpacity onPress={createThreeButtonAlert}>
                <Icon name="person-add-outline" size={40} color={'grey'} style={{ alignSelf: 'center' }} />
              </TouchableOpacity>
            </View>
          )
          }
        </View>
        <View>
          <CommonTextInput
            label="Name"
            placeholder="Name"
            value={userName}
            autoFocus={false}
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={25}
            onChangeText={text => setuserName(text)}
          />
          <CommonTextInput
            label="Email"
            placeholder='Enter Email'
            editablestyle={{ color: COLORS.LIGHTBLACK }}
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            editable={false}
            onChangeText={text => setEmail(text)}
          />
          <View style={style.dateView}>
            <Text style={style.labelstyle}> Date of birth </Text>
            <TouchableOpacity style={style.calendarView} onPress={showDatePicker}>
              <View style={style.calendarInput}>
                <Text style={style.textStyle}>{dob}</Text>
                <Fontisto
                  name='date'
                  size={16}
                  color={"grey"}
                />
              </View>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                display={"inline"}
                maximumDate={d}
              />
            </TouchableOpacity>
          </View>
          <CommonTextInput
            label="Phone"
            placeholder="Enter Phone"
            value={phone}
            keyboardType="numeric"
            maxLength={10}
            onChangeText={(text) => setPhone(text)}
          />
          <CommonTextInput
            label="Organization"
            placeholder="Enter Organization"
            autoCapitalize="none"
            autoCorrect={false}
            value={Org}
            onChangeText={text => setOrg(text)}
          />
          <Text style={style.stateLabel}>State</Text>
          <Dropdown
            style={style.dropdown}
            placeholderStyle={style.placeholderStyle}
            selectedTextStyle={style.selectedTextStyle}
            inputSearchStyle={style.inputSearchStyle}
            iconStyle={style.iconStyle}
            data={listStates}
            search
            maxHeight={300}
            labelField="state"
            placeholder={state}
            searchPlaceholder="Search..."
            value={state}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setState(item.state);
              setIsFocus(false);
            }}
          />
          <CommonTextInput
            label="City"
            placeholder="Enter City"
            autoCapitalize="none"
            autoCorrect={false}
            value={city}
            maxLength={25}
            onChangeText={text => setCity(text)}
          />
          <View>
            <CommonButton title="Update" onPress={() => submit()} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}