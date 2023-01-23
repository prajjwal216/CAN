import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import FONTS from '../../../../constants/fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import GLOBALS from '../../../../constants';
const { COLORS } = GLOBALS;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    fontSize: RFValue(22),
    fontFamily: FONTS.BOLD,
    color: 'rgba(0, 0, 0, 1)',
    marginLeft: 10,
    margin: 10,
  },
  item: {
    backgroundColor: '#ffff',
    padding: 15,
    marginVertical: responsiveHeight(1),
    marginHorizontal: responsiveWidth(3),
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 0.5,
    shadowOpacity: 0.4,
    borderRadius: 10,
  },
  title: {
    fontSize: RFValue(17),
    color: 'rgba(10, 73, 117, 1)',
    fontFamily: FONTS.MEDIUM,
  },
  description: {
    fontSize: RFValue(16),
    color: 'rgba(0, 0, 0, 0.66)',
    fontFamily: FONTS.REGULAR,
  },
  bottomBtn: {
    flex: 0.5,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    paddingTop: 20
  },
  bottomText: {
    fontSize: RFValue(15),
    color: 'rgba(10, 73, 117, 1)',
    fontFamily: FONTS.REGULAR,
  },
  emptyview: {
    margin: 10,

    alignItems: 'center',
  },
  emptytext: {
    fontSize: 25,
    color: COLORS.LIGHTBLACK,
    fontWeight: '600',
    fontFamily: FONTS.REGULAR,
  },
});
export default styles;
