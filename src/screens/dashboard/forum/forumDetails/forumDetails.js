import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import * as AppActions from '../../../../actions';
import { useDispatch, useSelector } from 'react-redux';
import GLOBALS from '../../../../constants';
import CustomHeader from '../../../../components/common/customHeader';
const { FONTS, COLORS, URL, ACTION_TYPE } = GLOBALS;

export default function ForumDetails({ navigation }) {
  const dispatch = useDispatch();
  const [categoryQuestions, setCategoryQuestion] = useState([]);
  const selectedCategory = useSelector(
    state => state.forumReducer.selectedCategory,
  );
  const formReducer = useSelector(state => state.forumReducer);
  useEffect(() => {
    if (selectedCategory) {
      dispatch(AppActions.getQuestionsByCategory(selectedCategory._id));
    }
  }, []);
  useEffect(() => {
    setCategoryQuestion(formReducer.selectedCategoryQuestion);
  }, [formReducer]);

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.item}
        onPress={() => {
          dispatch({
            type: ACTION_TYPE.SET_QUESTION_FOR_RESPONSE,
            payload: item,
          });
          navigation.navigate('Response');
        }}>
        <Text style={styles.title}>{item.quetion}</Text>

        <Text style={[styles.description, item.answerd != 'no' ? { color: COLORS.BLACK, fontFamily: FONTS.BOLD } : {}]}>
          {item.answerd == 'no' ? '- No response added for this question' : item.answer}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <CustomHeader title="Questions" navigation={navigation} />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={[styles.txt, { flex: 1 }]}>
          {' '}
          {selectedCategory?.category_name}{' '}
        </Text>
        {/*  */}
      </View>
      <View>
        <FlatList
          ListEmptyComponent={() => {
            return (
              <View style={styles.emptyview}>
                <Text style={styles.emptytext}>No question posted</Text>
              </View>
            );
          }}
          data={categoryQuestions}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      </View>


      <View style={styles.bottomBtn}>
        <TouchableOpacity
          style={styles.buttonTxt}
          onPress={() => navigation.navigate('Question')}>
          <Text style={styles.bottomText}>Have any Questions?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
