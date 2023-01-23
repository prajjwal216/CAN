import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useDispatch, useSelector} from 'react-redux';
import * as AppActions from '../../../../actions/';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomHeader from '../../../../components/common/customHeader';
export default function ForumResponse({navigation, navigation: {goBack}}) {
  const formReducer = useSelector(state => state.forumReducer);
  const userData = useSelector(state => state.authReducer.loginData);
  const token = useSelector(state => state.authReducer.loginData.Token);

  const [selectedCategory, setCategory] = useState({});
  const [response, setRespone] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    if (formReducer && formReducer.selectedQuestionResponse) {
      if (formReducer.selectedQuestionResponse.answer) {
        setRespone(formReducer.selectedQuestionResponse.answer);
      }
    }
  }, []);

  useEffect(() => {}, []);

  const onQuestionResponse = () => {
    if (!response) {
      Alert.alert('Please enter answer');
    } else {
      let params = {
        category_id: formReducer.selectedCategory._id,
        select_category: formReducer.selectedCategory.category_name,
        quetion: formReducer.selectedQuestionResponse.quetion,
        answerd: 'yes',
        status: 'active',
        answer: response,
        answerd_by: userData.result.name,
        _id: formReducer.selectedQuestionResponse._id,
      };
      dispatch(AppActions.submitResponse(params, token, navigation));
    }
  };
  return (
    <View style={styles.container}>
   <CustomHeader title={formReducer?.selectedCategory?.category_name} navigation={navigation} />

      <Text style={styles.subText}>
        {formReducer?.selectedQuestionResponse?.quetion}?
      </Text>
      {!formReducer?.selectedQuestionRespone?.answer &&
        !formReducer?.selectedQuestionResponse?.answer != '' && (
          <Text style={styles.txt}>Response</Text>
        )}
      <TextInput
        numberOfLines={30}
        style={[
          styles.responseBox,
          !formReducer?.selectedQuestionResponse?.answer &&
          !formReducer?.selectedQuestionResponse?.answer != ''
            ? {}
            : {
                borderWidth: 0,
                fontSize: RFValue(14),
                height: responsiveHeight(25),
              },
        ]}
        placeholder="Enter Your Response"
        multiline={true}
        value={response}
        onChangeText={text => setRespone(text)}
      />

      {!formReducer?.selectedQuestionResponse?.answer &&
        !formReducer?.selectedQuestionResponse?.answer != '' && (
          <>
            <Text style={styles.bodyText}>
              Please be polite while answering the question. Refer to community
              guidelines for more info.
            </Text>
            <View style={styles.button}>
              <TouchableOpacity style={styles.btn1} onPress={() => goBack()}>
                <Text style={styles.btnText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn2}
                onPress={() => onQuestionResponse()}>
                <Text style={styles.btnText}>Post</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
    </View>
  );
}
