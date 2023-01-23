import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import FONTS from '../../../constants/fonts';
import {RFValue} from 'react-native-responsive-fontsize';
import COLORS from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: responsiveHeight(80),
  },
  logo: {
    backgroundColor: COLORS.PRIMARY,
    flex: 0.4,
    borderBottomLeftRadius: responsiveWidth(5),
    borderBottomRightRadius: responsiveWidth(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoimg: {
    height: responsiveHeight(15),
    width: responsiveWidth(70),
    resizeMode: 'cover',
  },
  inputarea: {
    position: 'absolute',
    zIndex: 3,
    width: responsiveWidth(90),
    marginVertical: responsiveHeight(25),
    marginHorizontal: responsiveWidth(5),
    padding: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 20,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  login: {
    padding: 10,
    marginLeft: 10,
    fontSize: RFValue(30),
    fontWeight: '600',
    fontFamily: FONTS.BOLD,
    color: 'rgba(0, 0, 0, 1)',
  },
  text: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(18),
    fontWeight: '400',
    padding: 5,
    marginLeft: '2%',
    color: COLORS.LIGHTGREY,
  },
  textPassword: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(18),
    fontWeight: '400',
    pading: 5,
    top: 5,
    marginLeft: '3%',
    color: COLORS.LIGHTGREY,
  },
  inputText: {
    padding: 2,
    color: 'rgba(0, 0, 0, 0.27)',
  },
  textInputEmail: {
    fontFamily: FONTS.REGULAR,
    padding: 7,
    margin: '2%',
    bottom: 10,
    fontSize: RFValue(16),
    fontWeight: '400',
    borderColor: COLORS.PRIMARY,
    borderRadius: responsiveWidth(2),
    borderWidth: 1,
  },
  textInput: {
    fontFamily: FONTS.REGULAR,
    padding: 7,
    margin: '2%',
    fontSize: RFValue(16),
    fontWeight: '400',
    borderColor: COLORS.PRIMARY,
    borderRadius: responsiveWidth(2),
    borderWidth: 1,
  },
  eye: {
    position: 'absolute',
    right: 20,
    bottom: 18,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  bottomText: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(14),
    color: COLORS.PRIMARY,
    padding: 4,
    margin: '2%',
  },
  loginBtn: {
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: COLORS.BUTTONCOLOR,
    borderRadius: responsiveWidth(2),
  },
  btnText: {
    fontFamily: FONTS.REGULAR,
    textAlign: 'center',
    fontSize: RFValue(22),
    padding: 5,
    color: 'rgba(0, 0, 0, 1)',
  },
  errorText: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(12),
    color: 'red',
    marginLeft: '5%',
  },
  textFailed: {
    alignSelf: 'flex-end',
    color: 'red',
  },
});

export default styles;
