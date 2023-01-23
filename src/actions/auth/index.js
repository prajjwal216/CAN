import {Alert} from 'react-native';
import RestClient from '../../helpers/RestClient';
import GLOBALS from '../../constants';
const {FONTS, COLORS, URL, ACTION_TYPE} = GLOBALS;
import CommonPopup from '../../components/common/commonPopup';

export function login(param, navigation) {
  return async (dispatch, getState) => {
    dispatch({type: ACTION_TYPE.TOGGLE_LOADER, payload: true});
    try {
      let json = await RestClient.postCall(
        `${URL.BASE_URL}${URL.LOGIN}`,
        param,
      );
      console.log(json, 'response from API');
      dispatch({type: ACTION_TYPE.TOGGLE_LOADER, payload: false});
      /**Handle success data */
      if (json.status) {
        dispatch({
          type: ACTION_TYPE.SET_LOGIN,
          payload: json,
        });
        navigation.reset({index: 1, routes: [{name: 'Drawer'}]});
      } else {
        /**Handle error data */
        Alert.alert(json.message);
      }
    } catch (error) {
      dispatch({type: ACTION_TYPE.TOGGLE_LOADER, payload: false});
    }
  };
}

export function forgotPassword(param, navigation) {
  return async (dispatch, getState) => {
    try {
      dispatch({type: ACTION_TYPE.TOGGLE_LOADER, payload: true});
      let json = await RestClient.postCall(
        `${URL.BASE_URL}${URL.RESET_PASSWORD}`,
        param,
      );
      console.log(json, 'response from API');
      /**Handle success data */
      dispatch({type: ACTION_TYPE.TOGGLE_LOADER, payload: false});
      if (json.status) {
        Alert.alert(
          json.message,
          '',
          [
            {
              text: 'Ok',
              onPress: () => {
                navigation.navigate('Login');
              },
            },
          ],
          {cancelable: false},
        );
      } else {
        /**Handle error data */
        Alert.alert(json.message);
      }
    } catch (error) {
      dispatch({type: ACTION_TYPE.TOGGLE_LOADER, payload: false});
    }
  };
}

export function register(param, navigation) {
  return async (dispatch, getState) => {
    dispatch({type: ACTION_TYPE.TOGGLE_LOADER, payload: true});
    try {
      let json = await RestClient.postCall(
        `${URL.BASE_URL}${URL.REGISTER}`,
        param,
      );
      console.log(json, 'response from API');
      dispatch({type: ACTION_TYPE.TOGGLE_LOADER, payload: false});
      /**Handle success data */
      if (json.status) {
        Alert.alert(
          json.message,
          '',
          [
            {
              text: 'Ok',
              onPress: () => {
                navigation.navigate('Login');
              },
            },
          ],
          {cancelable: false},
        );
      } else {
        /**Handle error data */
        Alert.alert(json.message);
      }
    } catch (error) {
      dispatch({type: ACTION_TYPE.TOGGLE_LOADER, payload: false});
    }
  };
}

export function getlistState() {
  return async (dispatch, getState) => {
    dispatch({type: ACTION_TYPE.TOGGLE_LOADER, payload: true});
    try {
      let json = await RestClient.getCall(`${URL.BASE_URL}${URL.STATE_LIST}`);
      dispatch({type: ACTION_TYPE.TOGGLE_LOADER, payload: false});
      /**Handle success data */
      if (json.status) {
        dispatch({
          type: ACTION_TYPE.STATE_LIST,
          payload: json.result,
        });
      } else {
        /**Handle error data */
        Alert.alert('State is Selected');
      }
    } catch (error) {
        Alert.alert("it's not a valid state");
    }
  };
}

export function logOut(navigation) {
  return async (dispatch, getState) => {
    //dispatch({type: ACTION_TYPE.TOGGLE_LOADER, payload: true});
    navigation.reset({
      index: 0, routes: [{
        name: 'AuthStack',
        state: {
          routes: [
            {
              name: 'Login',
              params: {}
            }
          ]
        }
      }]
    })
    

    dispatch({type: ACTION_TYPE.AUTH_RESET});
    dispatch({type: ACTION_TYPE.FORUM_RESET});
    dispatch({type: ACTION_TYPE.HOME_RESET});
    //dispatch({type: ACTION_TYPE.TOGGLE_LOADER, payload: false});
  };
}
