import { StyleSheet, Platform } from 'react-native';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
const styles = StyleSheet.create({
  height: Platform.OS === 'ios' ? 200 : 100,
  container: {
    flex: 1,
  },
  event: {
    flex: 1,
    paddingLeft: 10,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  dateview: {
    margin: 10,
  },
  date: {

    fontSize: 20,
    color: COLORS.PRIMARY,
    fontFamily: FONTS.BOLD,
    marginTop: 15,
    marginBottom: 20
  },
  title: {
    fontSize: 16,
    color: COLORS.PRIMARY,
    fontWeight: '600',
    fontFamily: FONTS.REGULAR,
  },
  locations: {
    flexDirection: 'row',
    flex: 1,
  },
  eventlocation: {
    marginTop: 10,
    flexDirection: 'row',
    flex: 0.6,
    flexWrap: 'wrap',
  },
  locationtext: {
    marginBottom: 5,
    fontSize: 15,
    fontWeight: '500',
    fontFamily: FONTS.BOLD,
    color: COLORS.BLACK,
  },
  timelocation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    flexWrap: 'wrap',
    marginTop: 10,
  },
  clockicon: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  meetlocation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.6,
    flexWrap: 'wrap',
  },
  loctext: {
    fontSize: 15,
    fontWeight: 'normal',
    color: COLORS.LIGHTBLACK,
    fontFamily: FONTS.REGULAR,
  },
  timetext: {
    color: COLORS.LIGHTBLACK,
    fontSize: 15,
    fontFamily: FONTS.REGULAR,
  },
  textlocation: {
    color: COLORS.LIGHTBLACK,
    fontSize: 15,
    fontFamily: FONTS.REGULAR,
  },
  aboutview: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  desctext: {
    color: COLORS.LIGHTBLACK,
    fontSize: 15,
    fontWeight: '400',
    fontFamily: FONTS.REGULAR,
    paddingRight: 5,
  },
  meeting: {
    fontWeight: '500',
    fontSize: 16,
    fontFamily: FONTS.BOLD,
    color: COLORS.BLACK,
  },
  link: {
    fontWeight: '500',
    color: COLORS.BLUE,
    fontSize: 15,
    fontFamily: FONTS.REGULAR,
  },
  documents: {
    flexDirection: 'row',
    marginTop: 10,
  },
  doctext: {
    fontWeight: '500',
    fontSize: 16,
    fontFamily: FONTS.BOLD,
    color: COLORS.BLACK,
  },
  docimg: {
    height: 22,
    width: 22,
    marginLeft: 5,
  },
  horizontal: {
    margin: 10,
    height: 1,
    backgroundColor: COLORS.LIGHTBLACK,
  },
  welcomeview: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  welcometext: {
    paddingBottom: 10,
    color: COLORS.PRIMARY,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: FONTS.REGULAR,
  },
  eveninglocations: {
    flexDirection: 'row',
    flex: 1,
  },
  timelocationevening: {
    flexDirection: 'row',
    flex: 0.4,
    flexWrap: 'wrap',
  },
  locationtextevening: {
    fontSize: 15,
    fontWeight: '500',
    fontFamily: FONTS.BOLD,
    color: COLORS.BLACK,
  },
  eveningevent: {
    flexDirection: 'row',
    flex: 0.7,
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  iconclock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    flexWrap: 'wrap',
  },
  loactionmeet: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    flexWrap: 'wrap',
  },
  loremview: {
    paddingTop: 5,
    margin: 10,
  },
  loremtext: {
    color: COLORS.LIGHTBLACK,
    fontSize: 15,
    fontWeight: '400',
  },
  emptyview: {
    marginTop: 30,
    alignItems: 'center',
    flex: 1
  },
  emptytext: {
    fontSize: 18,
    color: COLORS.LIGHTBLACK,

    fontFamily: FONTS.REGULAR,
  },
  textStyle:{
    color: COLORS.PRIMARY
  },
  previousTitleStyle:{
    fontSize: 15,
    fontFamily: FONTS.REGULAR
  },
  nextTitleStyle:{
    fontSize: 15,
    fontFamily: FONTS.REGULAR
  },
  monthTitleStyle:{
    fontSize: 18,
    fontFamily: FONTS.SEMI_BOLD
  },
  yearTitleStyle:{
    fontSize: 18,
    fontFamily: FONTS.SEMI_BOLD
  }


});
export { styles };
