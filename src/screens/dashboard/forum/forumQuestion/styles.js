import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import FONTS from '../../../../constants/fonts';
import { RFValue } from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingText: {
    fontSize: RFValue(20),
    fontFamily: FONTS.REGULAR,
    color: 'rgba(0, 0, 0, 1)',
    margin: 15,
  },
  categoryText: {
    fontSize: RFValue(18),
    color: 'rgba(0, 0, 0, 0.66)',
    margin: 10,
    fontFamily: FONTS.REGULAR
  },
  dropdown: {
    borderWidth: responsiveWidth(0.5),
    padding: 5,
    borderRadius: 8,
    margin: 10,
    borderColor: 'rgba(10, 73, 117, 0.37)',
    fontFamily: FONTS.REGULAR
  },
  placeholderStyle: {
    color: "rgba(0, 0, 0, 0.27)",
  },
  selectedTextStyle: {
    color: "rgba(0, 0, 0, 1)",
    paddingLeft: 5,
    fontFamily: FONTS.REGULAR
  },
  inputSearchStyle: {
    color: "rgba(0, 0, 0, 0.27)"
  },
  questionText: {
    color: 'rgba(0, 0, 0, 0.66)',
    margin: 10,
    fontSize: RFValue(18),
    fontFamily: FONTS.REGULAR
  },
  textInput: {
    borderWidth: responsiveWidth(0.5),
    padding: 12,
    height: responsiveHeight(12),
    borderRadius: 8,
    fontSize: RFValue(13),
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
    width: responsiveWidth(45)
  },
  btn2: {
    backgroundColor: 'rgba(255, 189, 89, 1)',
    borderRadius: 8,
    alignItems: 'center',
    padding: 10,
    width: responsiveWidth(45),
    marginLeft: 20
  },
  btnTxt: {
    fontSize: RFValue(16),
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: FONTS.REGULAR
  }
});
export default styles;