import { StyleSheet } from 'react-native';
import GLOBALS from '../../../constants'

const { FONTS, COLORS } = GLOBALS

export default StyleSheet.create({
  myProfile: {
    flex: 1,
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: '600',
    marginTop: 10,
    fontFamily: FONTS.BOLD
  },
  container: {
    flex: 1,
    marginTop: 10,
    marginLeft: 18,
    marginBottom: 10
  },
  imageContainer: {
    marginLeft: 18,
  },
  viewDateSelect: {
    flexDirection: 'column-reverse',
    alignItems: 'flex-end',
    marginRight: 35,
  },
  dateSelect: {
    position: 'absolute',
    marginBottom: 14
  },
  button: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 18,
    height: 40,
    width: 380,
    borderColor: COLORS.YELLOW,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: COLORS.YELLOW,
    marginTop: 21,
  },
  textButton: {
    alignItems: 'center',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    fontStyle: 'normal',
    color: COLORS.BLACK
  },
  placeholderStyle: {
    color: '#BCBCBC',
    fontSize: 16,
  },
  dropdown: {
    height: 40,
    borderColor: COLORS.PRIMARY,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginHorizontal: 20,
  },
  placeholderStyle: {
    color: 'black',
    fontSize: 16,
  },
  stateLabel: {
    marginHorizontal: 20,
    fontFamily: FONTS.REGULAR,
    fontSize: 18,
    color: COLORS.LIGHTGREY,
    marginTop: 15,
  },
  dateView:{
    marginHorizontal: 20,
    marginVertical: 5,
  },
  labelstyle: {
    color: COLORS.LIGHTGREY,
    fontSize: 18,
    fontFamily: FONTS.REGULAR,
    marginTop: 15,
    fontWeight: '400',
    fontStyle: 'normal',
  },
  calendarView:{
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
    height: 40,
    borderRadius: 8,
    paddingLeft: 8,
    paddingRight:8,
    flex:1,
  },
  calendarInput:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10
  },
  textStyle:{
    fontSize:16,
  },
  imageloadStyle:{ 
    flex: 1, 
    borderRadius: 50, 
    overflow:'hidden',
    height: 100, 
    width: 100,
    position:'absolute'
  },
  profileiconStyle:{
    borderRadius: 50,
    height: 100, 
    width: 100,
    backgroundColor:COLORS.GRAY,
    justifyContent:'center'
  },
  profileiconimage:{
    height:30 ,
    width:30,
    marginTop:60,
    marginStart:65
  }

})