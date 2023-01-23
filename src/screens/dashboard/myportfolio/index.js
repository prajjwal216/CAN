import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import {styles} from './style';
import * as AppActions from '../../../actions/';
import {useDispatch, useSelector} from 'react-redux';
import ImageLoad from 'react-native-image-placeholder';

const Portfolio = ({navigation}) => {
  const dispatch = useDispatch();
  const portfolioReducerData = useSelector(
    state => state.homeReducer.portfolioList,
  );
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    navigation.addListener('focus',()=>{
    dispatch(AppActions.getPortfolioList());
  })
},[]);

  /**Watch reducer mandate data change */
  useEffect(() => {
    setPortfolioData(portfolioReducerData);
  }, [portfolioReducerData]);
  return (
    <View style={styles.main}>
      <Text style={styles.header}> My Portfolio </Text>

      <FlatList
        data={portfolioData}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        renderItem={({item}) => {
          return (
            <View style={styles.container_style}>
              <View style={styles.item_style}>
                <View style={styles.container}>
                  <ImageLoad
                    source={{uri: item.logo}}
                    resizeMode="stretch"
                    style={styles.img}></ImageLoad>
                  <View style={styles.container_style1}>
                    <Text style={styles.title}>{item.company_name} </Text>
                    <Text style={styles.description}>{item.description}</Text>
                  </View>
                </View>
                <View style={styles.container2}>
                  <View style={styles.details}>
                    <View style={styles.contain}>
                      <View style={styles.view}>
                        <Text>
                          <Text style={styles.value}>Amount :</Text>
                          {''} {item.amount.total_amount}{' '}
                          {item.amount.total_amount_in}
                        </Text>
                      </View>
                      <View style={styles.view}>
                        <Text>
                          <Text style={styles.value}># of shares :</Text>
                          {''} {item.number_of_share}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.contain1}>
                      <View style={styles.view}>
                        <Text>
                          <Text style={styles.value}>At Valuation : </Text>
                          {''} {item.valuation.valuation_amount}{' '}
                          {item.valuation.valuation_amount_in}
                        </Text>
                      </View>
                      <View style={styles.view}>
                        <Text>
                          <Text style={styles.value}>Round Size : </Text>
                          {''} {item.round_size.round_size_amount}{' '}
                          {item.round_size.round_size_amount_in}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.container2}>
                  <Text>
                    <Text style={styles.value}>Date of Investment :</Text>
                    {''} {item.date}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Portfolio;
