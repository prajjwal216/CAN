import React, { useEffect, useState, useMemo } from 'react';
import { Text, View, FlatList, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './style';
import COLORS from '../../../constants/colors';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { useDispatch, useSelector } from 'react-redux';
import * as AppActions from '../../../actions/';
import moment from 'moment';
import ImageLoad from 'react-native-image-placeholder';

const App = ({ navigation }) => {
  const dispatch = useDispatch();
  const mandateReducerData = useSelector(
    state => state.homeReducer.mandateList,
  );
  const calendarEventList = useSelector(
    state => state.homeReducer.activeCalendarEvent,
  );

  const token = useSelector(state => state.authReducer.loginData.Token);

  const [customStyleIndex, setCustomStyleIndex] = useState(0);

  const handleCustomIndexSelect = index => {
    setCustomStyleIndex(index);
  };

  /**Initialize state variables */
  const [mandateList, setMandateData] = useState([]);
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    navigation.addListener('focus', () => {
      dispatch(AppActions.getActiveMandateList(token));
      dispatch(AppActions.getCalendarEvents(token));
    });
  }, []);

  useEffect(() => {
    navigation.addListener('focus', () => {
      apicall();
    });
  }, []);

  /**Watch reducer mandate data change */
  useEffect(() => {
    setMandateData(mandateReducerData);
  }, [mandateReducerData]);

  /**Watch reducer mandate data change */
  useEffect(() => {
    setEventList(calendarEventList);
  }, [calendarEventList]);

  const apicall = () => {
    const date = new Date();
    let data = {
      start_date: moment(date).format('MM/DD/YYYY'),
      end_date: moment(date).add(7, 'days').format('MM/DD/YYYY'),
    };
    console.log(data,"this is date")
    dispatch(AppActions.getCalendarEvents(data));
  };

  return (
    <View style={styles.main}>
      <SegmentedControlTab
        values={['Active Mandate', 'Calendar']}
        selectedIndex={customStyleIndex}
        onTabPress={handleCustomIndexSelect}
        borderRadius={20}
        tabsContainerStyle={styles.tabsContainer}
        tabStyle={styles.tabStyle}
        activeTabStyle={styles.activeTabStyle}
        tabTextStyle={styles.tabTextStyle}
        activeTabTextStyle={styles.activeTabTextStyle} s
      />
      {customStyleIndex === 0 && (
        <FlatList
          data={mandateList}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({ item }) => {
            return (
              <View style={styles.container_style1}>
                <View style={styles.item_style}>
                  <View style={styles.containerss}>
                    <ImageLoad
                      resizeMode="stretch"
                      source={{ uri: item.logo }}
                      style={styles.img}></ImageLoad>
                    <View style={styles.containers}>
                      <Text style={styles.title}>{item.company_name} </Text>
                      <Text style={styles.des}>{item.description} </Text>
                    </View>
                  </View>
                  <View style={styles.container2}>
                    <View style={styles.cont}>
                      <View style={styles.flex1}>
                        <Text style={styles.text}>
                          <Text style={styles.mrp}>MRR :</Text>
                          {''} {item.mrr.mrr_amount} {item.mrr.mrr_amount_in}
                        </Text>
                      </View>
                      <View style={styles.flex2}>
                        <Text style={styles.text}>
                          <Text style={styles.mrp}>Round size :</Text>
                          {''} {item.round_size.round_size_amount}{' '}
                          {item.round_size.round_size_amount_in}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.contain}>
                      <View style={styles.flex1}>
                        <Text style={styles.text}>
                          <Text style={styles.mrp}>Valuation :</Text>
                          {''} {item.valuation.valuation_amount}{' '}
                          {item.valuation.valuation_amount_in}
                        </Text>
                      </View>
                      <View style={styles.flex2}>
                        <Text style={styles.text}>
                          <Text style={styles.mrp}>Commitment :</Text>
                          {''} {item.commitment.commitment_amount}{' '}
                          {item.commitment.commitment_amount_in}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      )}
      {customStyleIndex === 1 && (
        <FlatList
          data={eventList.sort((a, b) => a.date.localeCompare(b.date))}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({ item }) => {
            return (
              <View style={styles.container_style}>
                <View style={styles.item2_style}>
                  <View style={styles.calender}>
                    <View style={styles.calen}>
                      <View style={styles.day}>
                        <Text style={styles.days}>
                          {moment(item.date, 'YYYY/MM/DD').format('DD   MMM')}
                        </Text>
                      </View>
                      <View style={styles.calview}>
                        <View style={styles.cont1}>
                          <Text style={styles.title2}>{item.title}</Text>
                          <View style={styles.des1}>
                            <Text style={styles.descrip1}>
                              {item.description}
                            </Text>
                          </View>
                        </View>
                        <View style={styles.clock}>
                          <View style={styles.calender}>
                            <Icon
                              name="time-outline"
                              size={15}
                              color={'#0A4975'}>
                              <Text style={{ color: COLORS.LIGHTBLACK }}>
                                {item.time}
                              </Text>
                            </Icon>
                          </View>
                          <View style={styles.location}>
                            <Icon
                              name="location-outline"
                              size={15}
                              color={'#0A4975'}>
                              <Text style={{ color: COLORS.LIGHTBLACK }}>
                                {item.location}
                              </Text>
                            </Icon>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

export default App;
