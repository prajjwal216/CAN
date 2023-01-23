import {StyleSheet, Dimensions} from 'react-native';
import GLOBALS from '../../../constants';
import {RFValue} from 'react-native-responsive-fontsize';

const {FONTS, COLORS} = GLOBALS;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoView: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: RFValue(180),
    justifyContent: 'center',
  },
  logoImg: {
    alignSelf: 'center',
    height: 100,
    width: 200,
  },
  inputAreaView: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
    margin: 20,
    bottom: RFValue(50),
    shadowColor: COLORS.SHADOW,
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  inputAreaHeader: {
    fontFamily: FONTS.BOLD,
    fontSize: 30,
    paddingLeft: 20,
    paddingTop: 10,
  },
  buttonsView: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resetButton: {
    flex: 0.47,
    alignItems: 'center',
    backgroundColor: COLORS.BUTTONCOLOR,
    borderRadius: 8,
    justifyContent: 'center',
  },
  cancelButton: {
    flex: 0.47,
    backgroundColor: COLORS.CANCELBUTTON,
    borderRadius: 8,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 16,
    fontFamily: FONTS.REGULAR,
    fontStyle: 'normal',
    padding: 5,
    color: COLORS.BLACK,
  },
});

export default styles;
