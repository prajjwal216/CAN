import { StyleSheet } from 'react-native';
import FONTS from '../../../constants/fonts';
import COLORS from '../../../constants/colors';
import { RFValue } from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
  container_style: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    marginVertical: 10,
  },
  container_style1: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },

  item_style: {
    flex: 1,
    padding: 20,
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
    paddingHorizontal: 15,
  },
  item2_style: {
    marginHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 10,
    paddingBottom: 20,
    width: '92.5%',
  },
  header: {
    backgroundColor: COLORS.WHITE,
    padding: 10,
    fontSize: 22,
    fontFamily: FONTS.BOLD,
  },
  containerss: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 5,
  },
  containers: {
    flex: 1,
    marginTop: 5,
    marginLeft: 15,
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
    fontFamily: FONTS.BOLD,
    color: COLORS.PRIMARY,
  },
  des: {
    fontSize: RFValue(16),
    fontFamily: FONTS.REGULAR,
    flexWrap: 'wrap',
    color: COLORS.LIGHTBLACK,
  },
  cont: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  mrp: {
    fontSize: 14,
    fontFamily: FONTS.BOLD,
  },
  flex1: {
    flex: 0.5,
  },
  flex2: {
    flex: 0.5,
  },
  text: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 14,
  },
  contain: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
  },
  val: {
    marginTop: 7,
  },
  titl: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  calender: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.65,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  calen: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  day: {
    borderWidth: 2,
    height: 75,
    width: 75,
    borderColor: COLORS.PRIMARY,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  days: {
    color: COLORS.PRIMARY,
    fontFamily: FONTS.BOLD,
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 5,
  },
  cont1: {
    flex: 1,
    marginLeft: 15,
    flexWrap: 'wrap',
  },
  title2: {
    fontFamily: FONTS.BOLD,
    fontSize: 18,
    textDecorationLine: 'underline',
    flexWrap: 'wrap',
    textAlign: 'left',
  },

  descrip1: {
    fontFamily: FONTS.REGULAR,
    fontSize: 16,
    color: COLORS.LIGHTBLACK,
  },
  calview: {
    flex: 1,
    flexWrap: 'wrap',
  },
  clock: {
    flex: 1,
    marginLeft: 15,
    marginTop: 7,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.85,
    flexWrap: 'wrap',
  },
  prev: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  previous: {
    fontSize: 25,
    fontFamily: FONTS.REGULAR,
  },

  next: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  next1: {
    fontSize: 25,
    fontFamily: FONTS.BOLD,
  },
  locate: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 15,
  },
  calender1: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.WHITE,
  },
  buttoncontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  main: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  icon: {
    margin: 10,
    flex: 1,
    flexDirection: 'row',
  },
  iconstyle: {
    color: COLORS.LIGHTGREY,
  },
  imageicon: {
    flexDirection: 'row',
    marginTop: 2,
  },
  prevtext: {
    color: COLORS.LIGHTBLACK,
    fontSize: 14,
  },
  nexttext: {
    color: COLORS.BLACK,
    fontSize: 14,
  },
  tabsContainer: {
    height: 50,
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  tabStyle: {
    borderColor: COLORS.PRIMARY,
    borderRadius: 0,
  },
  activeTabStyle: {
    backgroundColor: COLORS.PRIMARY
  },
  tabTextStyle: {
    color: COLORS.PRIMARY,
    fontWeight: 'bold',
    fontSize: 18
  },
  activeTabTextStyle: {
    color: 'white'
  }
});
export { styles };
