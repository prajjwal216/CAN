import { StyleSheet, Dimensions } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import FONTS from '../../../constants/fonts';

const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex:1,
      backgroundColor:'#F5F5F5',
   
    height: responsiveHeight(100)
  },
  changePassword : {
    color: '#000000', 
    fontSize: 22, 
    textAlign: 'left', 
    marginLeft: 20, 
    marginTop: 20,
    fontFamily : FONTS.REGULAR,
    fontWeight : '600' ,
    height: 30,
    width : 182
  },

 
  
});

export default styles;
