import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Platform } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import Images from '../../../assets/images';
import { useDispatch } from 'react-redux';
import GLOBALS from '../../../constants';
const {FONTS, COLORS, URL, ACTION_TYPE} = GLOBALS;

const slides = [
  {
    id: 1,
    image: Images.onboardingSlide1,
    image1: Images.onboardingCANlogo,
    text: 'Chandigarh Angels Network is\n a community of successful \nentrepreneurs turned angel\n investors.'
  },
  {
    id: 2,
    image: Images.onboardingSlide2,
    image1: Images.onboardingCANlogo,
    text: 'We mainly focus on helping\nstartups at seed & growth\nstage.'
  },
  {
    id: 3,
    image: Images.onboardingSlide3,
    image1: Images.onboardingCANlogo,
    text: 'We are doing our bit with\n bespoke mentoring and\n handholding to the Startups\n wherever and whenever\n required.'
  }
];

export default Onboarding = ({ navigation }) => {
  const [showApp, setshowApp] = useState(false)
  const dispatch = useDispatch();

  onDoneApp = () => {
    navigation.reset({ index: 1, routes: [{ name: 'Login' }] })
    setshowApp(true);
    dispatch({type: ACTION_TYPE.RESET_FIRST_TIME, });
  }

  _renderItem = ({ item }) => {
    return (
      <ImageBackground style={styles.image} source={item.image} >
        <View style={styles.heading}>
          <View style={styles.logo}>
            <Image source={item.image1} />
          </View>
          <Text style={styles.subText}>{item.text}</Text>
        </View>
      </ImageBackground>
    );
  }
  renderNextButton = () => {
    return (
      <Image style={styles.button} source={Images.onboardingButton}></Image>
    );
  };
  renderDoneButton = () => {
    return (
      <Image style={styles.button} source={Images.onboardingButton}></Image>
    );
  };
  return (
    <AppIntroSlider renderItem={this._renderItem} data={slides}
      activeDotStyle={styles.activeDotStyle}
      dotStyle={styles.dotStyle}
      renderNextButton={this.renderNextButton}
      renderDoneButton={this.renderDoneButton}
      onDone={onDoneApp}
    />
  )
}



