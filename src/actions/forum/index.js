import RestClient from '../../helpers/RestClient';
import GLOBALS from '../../constants';
import { Alert } from 'react-native';
const { URL, ACTION_TYPE } = GLOBALS;

export function getForumCategories() {
  return async (dispatch, getState) => {
    dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: true });
    try {
      let json = await RestClient.getCall(
        `${URL.BASE_URL}${URL.FORUM_CATEGORY}`,
      );
      dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: false });
      /**Handle success data */
      if (json.status) {
        dispatch({
          type: ACTION_TYPE.SET_FORUM_CATEGORY,
          payload: json.result,
        });
      } else {
        /**Handle error data */
        console.log('failed');
        Alert.alert('WOWWOW!');
      }
    } catch (error) {
        Alert.alert('Wow!');
    }
  };
}
export function getQuestionsByCategory(id) {
  return async (dispatch, getState) => {
    dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: true });
    try {
      let json = await RestClient.getCall(
        `${URL.BASE_URL}${URL.FORUM_CATEGORY_QUESTION}${id}`,
      );
      dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: false });
      // console.log(json.result, "response from API");
      /**Handle success data */
      if (json.status) {
        dispatch({
          type: ACTION_TYPE.SET_SELECTED_FORUM_QUES,
          payload: json.result,
        });
      } else {
        /**Handle error data */
        // console.log('failed');
        // Alert.alert('WOWWOW!');
      }
    } catch (error) {
      dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: false });
      //   Alert.alert('Wow!');
    }
  };
}
export function askQuestion(params, token, navigation) {
  return async (dispatch, getState) => {
    dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: true });
    try {
      let json = await RestClient.postCall(
        `${URL.BASE_URL}${URL.FORUM_ADD_QUESTION}`,
        params,
        token,
      );
      dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: false });
      // console.log(json.result, "response from API");
      /**Handle success data */
      if (json.status) {

        Alert.alert(
          'Question asked successfully',
          '',
          [
            {
              text: 'Ok',
              onPress: () => {
                navigation.navigate('Drawer', {
                  screen: 'Tab',
                });
              },
            },
          ],
          { cancelable: false },
        );
      } else {
        /**Handle error data */
        // console.log('failed');
        // Alert.alert('WOWWOW!');
      }
    } catch (error) {
      dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: false });
      //   Alert.alert('Wow!');
    }
  };
}

export function getQuestionById(id, result) {
  return async (dispatch, getState) => {
    dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: true });
    try {
      let json = await RestClient.getCall(
        `${URL.BASE_URL}${URL.GET_QUESTION}${id}`,
      );
      dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: false });
      // console.log(json.result, "response from API");
      /**Handle success data */
      if (json.status) {
        dispatch({
          type: ACTION_TYPE.GET_QUESTION,
          payload: json.result,
        });
      } else {
        /**Handle error data */
        // console.log('failed');
        // Alert.alert('WOWWOW!');
      }
    } catch (error) {
      dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: false });
      //   Alert.alert('Wow!');
    }
  };
}

export function submitResponse(params, token, navigation) {
  return async (dispatch, getState) => {
    dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: true });
    try {
      let json = await RestClient.putCall(
        `${URL.BASE_URL}${URL.FORUM_ADD_RESPONSE}`,
        params,
        token,
      );
      console.log(json, 'response from API');
      dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: false });

      /**Handle success data */
      if (json.status) {

        Alert.alert(
          'Your response added successfully',
          '',
          [
            {
              text: 'Ok',
              onPress: () => {
                navigation.navigate('Drawer', {
                  screen: 'Tab',
                });
              },
            },
          ],
          { cancelable: false },
        );
      } else {
        /**Handle error data */
        // console.log('failed');
        // Alert.alert('WOWWOW!');
      }
    } catch (error) {
      dispatch({ type: ACTION_TYPE.TOGGLE_LOADER, payload: false });
      //   Alert.alert('Wow!');
    }
  };
}
