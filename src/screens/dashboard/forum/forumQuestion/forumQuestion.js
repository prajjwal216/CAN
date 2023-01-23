import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Dropdown } from 'react-native-element-dropdown';
import { useDispatch, useSelector } from 'react-redux';
import * as AppActions from '../../../../actions';
import CustomHeader from '../../../../components/common/customHeader';
const ForumQuestion = ({ navigation, navigation: { goBack } }) => {
  const dispatch = useDispatch();
  const formReducer = useSelector(state => state.forumReducer);
  const userData = useSelector(state => state.authReducer.loginData);
  const token = useSelector(state => state.authReducer.loginData.Token);

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [question, setQuestion] = useState('');
  const [selectedCategory, setCategory] = useState({});
  useEffect(() => {
    dispatch(AppActions.getForumCategories());
  }, []);
  const forumCategoryData = useSelector(
    state => state.forumReducer.forumCategories,
  );
  useEffect(() => {
    setCategory({
      _id: formReducer.selectedCategory._id,
      category_name: formReducer.selectedCategory.category_name,
    });
  }, []);

  const onQuestionPost = () => {
    if (!question) {
      Alert.alert('Please enter question');
    } else {
      let params = {
        category_id: selectedCategory._id,
        select_category: selectedCategory.category_name,
        quetion: question,
        answerd: 'no',

      };
      dispatch(AppActions.askQuestion(params, token, navigation));
    }
  };

  return (
    <View>
      <CustomHeader title="Have Questions?" navigation={navigation} />
      <Text style={styles.categoryText}>Category</Text>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={forumCategoryData}
        search
        maxHeight={300}
        labelField="category_name"
        valueField="value"
        placeholder={!isFocus ? 'Select' : '...'}
        searchPlaceholder="Search..."
        // value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
          setCategory({
            _id: item._id,
            category_name: item.category_name,
          });
        }}
      />
      <Text style={styles.questionText}>Questions</Text>
      <TextInput
        value={question}
        onChangeText={text => setQuestion(text)}
        style={styles.textInput}
        multiline={true}
        placeholder="Type your questions"
        placeholderTextColor={'rgba(0, 0, 0, 0.27)'}
      />
      <Text style={styles.bodyText}>
        If you have already asked similar question in the past please wait for
        others to send in their response instead of asking it again.
      </Text>
      <View style={styles.button}>
        <TouchableOpacity style={styles.btn1} onPress={() => goBack()}>
          <Text style={styles.btnTxt}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2} onPress={() => onQuestionPost()}>
          <Text style={styles.btnTxt}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ForumQuestion;
