import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import styles from '../../dashboard/forum/style';
import { useDispatch, useSelector } from 'react-redux';
import * as AppActions from '../../../actions/';
import GLOBALS from '../../../constants';
const { FONTS, COLORS, URL, ACTION_TYPE } = GLOBALS;
export default function Forum({ navigation }) {
  const [forumCategoryList, setForumCategoryList] = useState([]);
  const dispatch = useDispatch();
  const forumCategoryData = useSelector(
    state => state.forumReducer.forumCategories,
  );
  useEffect(() => {
    dispatch(AppActions.getForumCategories());
  }, []);
  useEffect(() => {
    setForumCategoryList(forumCategoryData);
  }, [forumCategoryData]);
  const onCategoryClick = (item) => {
    dispatch({
      type: ACTION_TYPE.SET_SELECTED_FORUM,
      payload: item,
    });
    navigation.navigate('DashboardStack', {
      screen: 'Detail',
    });
  }
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          onCategoryClick(item)

        }}>
        <Text style={styles.title}>{item.category_name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.txt}> Forum </Text>
      <FlatList
        data={forumCategoryList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
