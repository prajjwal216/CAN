import { StyleSheet } from 'react-native';
import GLOBALS from '../../../constants';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const { FONTS, COLORS } = GLOBALS;

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.WHITE,
  },
  login: {
    backgroundColor: COLORS.WHITE,
    marginVertical: 10,
  },
  loginText: {
    right: 12,
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 2,
    fontFamily: FONTS.BOLD,
    fontStyle: 'normal',
    lineHeight: 24,
    marginLeft: 20,
  },
  listItem: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    justifyContent: 'space-evenly',
    marginVertical: responsiveHeight(0.4),
    marginHorizontal: responsiveWidth(5),
    shadowColor: COLORS.LIGHTBLACK1,
    borderColor: COLORS.LIGHTBLACK2,
    shadowOffset: {},
    borderWidth: 0.5,
    shadowOpacity: 0.5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    paddingTop: "1%",
    padding: 10,
    marginTop: 10,
  },
  nameView: {
    flex: 0.6,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 7,
    marginLeft: 10,
  },
  nameText: {
    flexWrap: "wrap",
    fontSize: 20,
    color: COLORS.PRIMARY,
    marginTop: 7,
    fontWeight: '600',
    font: FONTS.BOLD,
  },
  mailText: {
    flexWrap: "wrap",
    fontSize: 18,
    color: COLORS.LIGHTBLACK,
    marginTop: 22,
    marginTop: 15,
    fontWeight: '400',
    font: FONTS.MEDIUM,
    marginBottom: 7
  },
  dateText: {
    fontSize: 18,
    color: COLORS.LIGHTBLACK,
    marginLeft: 2,
    font: FONTS.MEDIUM,
    fontWeight: '400',
    marginTop: 15,
  },
  phoneText: {
    fontSize: 18,
    marginLeft: 4,
    color: COLORS.LIGHTBLACK,
    marginTop: 20,
    font: FONTS.MEDIUM,
    fontWeight: '400',
    marginBottom: 7
  }
});
