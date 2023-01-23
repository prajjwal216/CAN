import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import GLOBALS from '../../../constants';
const {FONTS, COLORS} = GLOBALS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: RFValue(180),
  },
  logoimg: {
    alignSelf: 'center',
    height: 100,
    width: 300,
  },
  inputarea: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
    margin: 20,
    bottom: RFValue(50),
    shadowColor: COLORS.SHADOW,
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  heading: {
    fontFamily: FONTS.BOLD,
    fontSize: 30,
    paddingLeft: 20,
    paddingTop: 10,
  },
  passwordLabel: {
    paddingLeft: 20,
    paddingTop: 15,
    color: COLORS.LIGHTGREY,
    fontSize: 18,
    fontFamily: FONTS.REGULAR,
  },
  passwordView: {
    borderColor: COLORS.PRIMARY,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    height: 40,
    alignItems: 'center',
  },
  inputPassword: {
    flex: 1,
    fontSize: 16,
    fontFamily: FONTS.REGULAR,
    paddingHorizontal: 8,
  },
  passwordIcon: {
    paddingRight: RFValue(10),
  },
  stateLabel: {
    paddingLeft: 20,
    paddingTop: RFValue(15),
    fontSize: 18,
    color: COLORS.LIGHTGREY,
    fontFamily: FONTS.REGULAR,
  },
  dropdown: {
    borderColor: COLORS.PRIMARY,
    borderRadius: 8,
    borderWidth: 1,
    marginHorizontal: 20,
    height: 40,
    paddingHorizontal: 8,
    fontFamily: FONTS.REGULAR,
  },
  placeholderStyle: {
    color: COLORS.PLACEHOLDER,
    fontSize: 16,
  },
  link: {
    alignSelf: 'center',
    padding: RFValue(10),
    color: COLORS.PRIMARY,
    fontFamily: FONTS.REGULAR,
  },
});

export default styles;
