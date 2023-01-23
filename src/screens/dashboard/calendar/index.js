import React, { useState, useEffect } from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import { View, Text, Image, Linking } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import * as AppActions from '../../../actions/';
import { styles } from './style';
import Images from '../../../assets/images';
import COLORS from '../../../constants/colors';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import * as homeactions from '../../../actions/';
import moment from 'moment';
import FONTS from '../../../constants/fonts';

const Calendars = ({navigation}) => {
  const dispatch = useDispatch();

  const calendarreducer = useSelector(
    state => state.homeReducer.activeCalendar,
  );

console.log(calendarreducer,'calendar reducer data')

  const date = new Date();

  useEffect(() => {
    navigation.addListener('focus', () => {

    let data = {
      start_date: moment(date).format('MM/DD/YYYY'),
      end_date: moment(date).format('MM/DD/YYYY'),
    };
    dispatch(AppActions.getCalendar(data));
  });
  }, []);

  const [idate, setDate] = useState(date);
  const [calendarevent, setCalendarevent] = useState([]);

  useEffect(() => {
    setCalendarevent(calendarreducer);
  }, [calendarreducer]);

  const onDateChange = date => {
    setDate(date.format());
  };

  let customdate = moment(idate).format('Do MMMM, YY');

  const apicall = selected_date => {
    let data = {
      start_date: moment(selected_date.format()).format('MM/DD/YYYY'),
      end_date: moment(selected_date.format()).format('MM/DD/YYYY'),
    };
    console.log(data,"this is calendar date")
    dispatch(AppActions.getCalendar(data));
  };

  return (
    <View style={styles.container}>
      <View>
        <CalendarPicker
          onDateChange={date => {
            onDateChange(date), apicall(date);
          }}
          selectedDayColor="#FFBD59"
          minDate={date}
          textStyle={styles.textStyle}
          previousTitleStyle={styles.previousTitleStyle}
          nextTitleStyle={styles.nextTitleStyle}
          monthTitleStyle={styles.monthTitleStyle}
          yearTitleStyle={styles.yearTitleStyle}
        />
        <View style={styles.dateview}>
          <Text style={styles.date}>{customdate} </Text>
        </View>
      </View>

      <FlatList
        ListEmptyComponent={() => {
          return (
            <View style={styles.emptyview}>
              <Text style={styles.emptytext}>
                No event today.
              </Text>
            </View>
          );
        }}
        data={calendarevent}
        keyExtractor={item => {
          return item.id;
        }}
        renderItem={({ item }) => {
          return (
            <View>
              <View style={styles.event}>
                {item.title && <Text style={styles.title}>{item.title}</Text>}
                <View style={styles.locations}>
                  <View style={styles.eventlocation}>
                    {item.event_type == 'pitch_session' ? (
                      <Text style={styles.locationtext}>
                        Type:{' '}
                        <Text style={styles.loctext}>Pitch Session</Text>
                      </Text>
                    ) :
                      (
                        <Text style={styles.locationtext}>
                          Type:{' '}
                          <Text style={styles.loctext}>Event</Text>
                        </Text>)
                    }
                  </View>
                  <View style={styles.timelocation}>
                    <View style={styles.clockicon}>
                      {item.time && (
                        <Fontisto name="clock" color={COLORS.PRIMARY} size={15}>
                          {' '}
                          <Text style={styles.timetext}>{item.time}</Text>
                        </Fontisto>
                      )}
                    </View>
                    <View style={styles.meetlocation}>
                      {item.location && (
                        <Ionicons
                          name="location-outline"
                          color={COLORS.PRIMARY}
                          size={15}>
                          <Text style={styles.textlocation}>
                            {' '}
                            {item.location}
                          </Text>
                        </Ionicons>
                      )}
                    </View>
                  </View>
                </View>
                <View style={styles.aboutview}>
                  <View style={styles.descview}>
                    {item.description && (
                      <Text style={styles.desctext}>{item.description}</Text>
                    )}
                  </View>
                  <View style={styles.meetingview}>
                    {item.meeting_url && (
                      <Text style={styles.meeting}>
                        Meeting URL :{' '}
                        <Text
                          style={styles.link}
                          onPress={() => Linking.openURL(item.meeting_url)}>
                          {item.meeting_url}
                        </Text>
                      </Text>
                    )}
                  </View>
                  {item.event_type == 'pitch_session' && (
                    <View style={styles.documents}>
                      { item.file && (
                        <Text style={styles.doctext}>Pitch Deck:{' '} </Text>
                      )}
                      {item.file && (
                        <Text style={styles.doctext}>
                          {item.file.map(link => {
                            const dotindex = link.lastIndexOf('.');
                            const extension = link.slice(dotindex + 1);
                            if (extension == 'pdf') {
                              return (
                                <TouchableOpacity
                                  onPress={() => Linking.openURL(link)}>
                                  <Image
                                    source={Images.pdf}
                                    style={styles.docimg}
                                  />
                                </TouchableOpacity>
                              );
                            } else if (
                              extension == 'document' ||
                              extension == 'msword' ||
                              extension == 'doc ' ||
                              extension == 'docx'
                            ) {
                              return (
                                <TouchableOpacity
                                  onPress={() => Linking.openURL(link)}>
                                  <Image
                                    source={Images.doc}
                                    style={styles.docimg}
                                  />
                                </TouchableOpacity>
                              );
                            } else if (
                              extension == 'png' ||
                              extension == 'jpg' ||
                              extension == 'jpeg'
                            ) {
                              return (
                                <TouchableOpacity
                                  onPress={() => Linking.openURL(link)}>
                                  <Ionicons name="images" size={18} color={COLORS.PRIMARY} style={{ paddingLeft: 5, paddingTop: 5 }} />
                                </TouchableOpacity>
                              );
                            }
                          })}
                        </Text>
                      )}
                    </View>
                  )}
                </View>
              </View>
              <View style={styles.horizontal} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Calendars;
