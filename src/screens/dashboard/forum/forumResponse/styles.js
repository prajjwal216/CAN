import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import FONTS from '../../../../constants/fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import COLORS from '../../../../constants/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  headingText: {
    fontSize: RFValue(20),
    fontFamily: FONTS.REGULAR,
    color: 'rgba(0, 0, 0, 1)',
    margin: 15
  },
  subText: {
    fontSize: RFValue(18),
    color: 'rgba(10, 73, 117, 1)',
    margin: 10,
    fontFamily: FONTS.REGULAR,
    marginTop: RFValue(30),
  },
  txt: {
    // color: 'rgba(0, 0, 0, 0.66)',
    color: COLORS.PRIMARY,
    margin: 10,
    marginBottom: 0,
    paddingLeft: 5,
    fontSize: RFValue(18),
    fontFamily: FONTS.BOLD
  },
  responseBox: {
    height: responsiveHeight(13),
    borderWidth: responsiveWidth(0.5),
    padding: 10,
    borderRadius: 8,
    margin: 10,
    borderColor: 'rgba(10, 73, 117, 0.37)',
    fontFamily: FONTS.REGULAR
  },
  bodyText: {
    color: 'rgba(0, 0, 0, 0.45)',
    fontSize: RFValue(16),
    padding: 5,
    marginLeft: 10,
    fontFamily: FONTS.REGULAR
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10
  },
  btn1: {
    backgroundColor: 'rgba(218, 218, 218, 1)',
    borderRadius: 8,
    alignItems: 'center',
    padding: 10,
    width: responsiveWidth(45),
    flex: 1
  },
  btn2: {
    flex: 1,
    backgroundColor: 'rgba(255, 189, 89, 1)',
    borderRadius: 8,
    alignItems: 'center',
    padding: 10,
    width: responsiveWidth(45),
    marginLeft: 20
  },
  btnText: {
    fontSize: RFValue(16),
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: FONTS.REGULAR
  }
});
export default styles;