import { StyleSheet } from "react-native"
import GLOBALS from '../../../constants'

const { FONTS, COLORS } = GLOBALS

export default styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  subText: {
    color: COLORS.WHITE,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: FONTS.REGULAR,
  },
  logo: {
    flex: .35,
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading: {
    alignItems: "center",
    justifyContent: 'space-between',
    flex: 0.85,
  },
  button: {
    marginTop: Platform.OS === 'android' ? -10 : 0
  },
  activeDotStyle:{ 
    backgroundColor: "#FFBD59" 
  },
  dotStyle:{
     backgroundColor: 'gray' 
    }
})
