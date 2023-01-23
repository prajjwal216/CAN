import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import COLORS, {SHADOW} from '../../../constants/colors';
import FONTS from '../../../constants/fonts';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  container_style: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    marginTop: 3,
  },
  container_style1: {
    marginLeft: 15,
    marginTop: 5,

    width: '70%',
  },
  item_style: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: COLORS.SHADOW,
    shadowOffset: {},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.WHITE,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  header: {
    backgroundColor: COLORS.WHITE,
    padding: 10,
    fontSize: 25,
    fontFamily: FONTS.BOLD,
    marginTop: 5,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 6,
  },
  details: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  img: {
    width: 80,
    height: 71,
    margin: 5,
    overflow: 'hidden',
    borderRadius: 8,
  },
  title: {
    fontSize: RFValue(18),
    fontWeight: '600',
    color: '#0A4975',
    fontFamily: FONTS.BOLD,
  },
  description: {
    fontSize: RFValue(16),
    fontFamily: FONTS.REGULAR,
    fontWeight: '600',
    color: COLORS.LIGHTBLACK,
  },
  value: {
    fontSize: RFValue(12),
    fontFamily: FONTS.BOLD,
  },
  view: {
    flex: 0.5,
  },
  contain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contain1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
});

export {styles};
