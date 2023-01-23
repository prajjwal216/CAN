import RestClient from '../../helpers/RestClient';
import GLOBALS from '../../constants';
import { Alert } from 'react-native';
const { FONTS, COLORS, URL, ACTION_TYPE } = GLOBALS;

export function Mandate() {
  return async (dispatch, getState) => {
    dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: true });
    try {
      let json = await RestClient.getCall(
        `${URL.BASE_URL}${URL.ACTIVE_MANDATE}`,
      );
      dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: false });
      /**Handle success data */
      if (json.status) {
        dispatch({
          type: ACTION_TYPE.ACTIVE_MANDATE,
          payload: json,
        });
      } else {
      }
    } catch (error) { }
  };
}

export function addReferral(param, user_id) {
  return async (dispatch, getState) => {
    dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: true });
    try {
      let json = await RestClient.postCall(
        `${URL.BASE_URL}${URL.REFERRAL}`,
        param,
      );
      dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: false });
      if (json.status) {
        dispatch({
          type: ACTION_TYPE.SET_USER,
          payload: json,
        });
        dispatch(getReferralList(user_id));
        Alert.alert(json.message);
      } else {
        Alert.alert('Failed to add your details');
      }
    } catch (error) {
      dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: false });
      Alert.alert(error.error);
    }
  };
}

/****API to fetch list of all referral data */
export function getReferralList(user_id) {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: true });
      let json = await RestClient.getCall(
        `${URL.BASE_URL}${URL.SAVE_REFERRAL}${user_id}`,
      );
      dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: false });
      if (json.status) {
        dispatch({
          type: ACTION_TYPE.SAVE_REFERRAL_LIST,
          payload: json.result,
        });
      } else {
        dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: false });
        Alert.alert('Failed to get data');
      }
    } catch (error) {
      dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: false });
    }
  };
}

export function getActiveMandateList(token) {
  return async (dispatch, getState) => {
    dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: true });
    try {
      let json = await RestClient.getCall(
        `${URL.BASE_URL}${URL.ACTIVE_MANDATE}`,
        token,
      );
      /**Handle success data */
      if (json.status) {
        dispatch({
          type: ACTION_TYPE.ACTIVE_MANDATE,
          payload: json.result,
        });
      } else { }
    } catch (error) {
      dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: false });
    }
  };
}

export function getCalendarEvents(token, datapacket) {
  return async (dispatch, getState) => {
    dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: true });
    try {
      let json = await RestClient.postCall(
        `${URL.BASE_URL}${URL.CALENDAR}`,
        token,
        datapacket,
      );
      /**Handle success data */
      dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: false });
      if (json.status) {
        dispatch({
          type: ACTION_TYPE.CALENDAR,
          payload: json.result,
        });
      } else { }
    } catch (error) {
      dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: false });
    }
  };
}

export function getCalendar(token) {
  return async (dispatch, getState) => {
    dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: true });
    try {
      let json = await RestClient.postCall(
        `${URL.BASE_URL}${URL.CALENDAR}`,
        token,
      );
      /**Handle success data */
      dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: false });
      if (json.status) {
        dispatch({
          type: ACTION_TYPE.CALENDAREVE,
          payload: json.result,
        });
      } else { }
    } catch (error) {
      dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: false });
    }
  };
}

// CHANGE PASSWORD API-----------------------------------
export function changePassword(param, navigation) {
  return async (dispatch, getState) => {
    dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: true });
    try {
      let json = await RestClient.putCall(
        `${URL.BASE_URL}${URL.CHANGE_PASSWORD}`,
        param,
      );
      dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: false });
      /**Handle success data */
      if (json.status == true) {
        Alert.alert(
          json.message,
          '',
          [
            {
              text: 'OK',
              onPress: () =>
                navigation.reset({
                  index: 0,
                  routes: [
                    {
                      name: 'AuthStack',
                      state: {
                        routes: [
                          {
                            name: 'Login',
                            params: {},
                          },
                        ],
                      },
                    },
                  ],
                }),
            },
          ],
          { cancelable: false },
        );
      } else {
        /**Handle error data */
        Alert.alert(json.message);
      }
    } catch (error) {
      dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: false });
    }
  };
}

export function getPortfolioList() {
  return async (dispatch, getState) => {
    try {
      let json = await RestClient.getCall(`${URL.BASE_URL}${URL.PORTFOLIO}`);
      /**Handle success data */
      if (json.status) {
        dispatch({
          type: ACTION_TYPE.PORTFOLIO,
          payload: json.result,
        });
      } else {
      }
    } catch (error) { }
  };
}

export function getMyprofile(user_id) {
  return async (dispatch, getState) => {
    dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: true });

    try {
      let json = await RestClient.getCall(
        `${URL.BASE_URL}${URL.MYPROFILE}${user_id}`,
      );

      dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: false });

      /**Handle success data */
      if (json.status) {
        dispatch({
          type: ACTION_TYPE.MY_PROFILE,
          payload: json.result,
        });
      } else { }
    } catch (error) {
      dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: false });
    }
  };
}

// update MyProfile---------------------------------------
export function updateMyProfile(param, token) {
  return async (dispatch, getState) => {
    dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: true });
    try {
      let json = await RestClient.putCallFormdata(
        `${URL.BASE_URL}${URL.UPDATE_PROFILE}`,
        param,
        token,
      );
      dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: false });
      /**Handle success data */
      if (json.status == true) {
        Alert.alert(json.message);
      } else {
        /**Handle error data */
        Alert.alert(json.message);
      }
    } catch (error) {
      dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: false });
    }
  };
}
