import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../constants/colors';
import FONTS from '../../constants/fonts';

function CustomHeader({ title, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconView}>
        <Icon
          name="chevron-back"
          size={RFValue(35)}
          color={COLORS.WHITE}
          onPress={() => navigation.goBack()}
          style={styles.icon}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
}
export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: RFValue(60),
    backgroundColor: COLORS.PRIMARY,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconView: {
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    paddingLeft: 15,
  },
  text: {
    textAlign: 'center',
    fontSize: RFValue(22),
    fontWeight: 'bold',
    color: COLORS.WHITE,
    fontFamily: FONTS.REGULAR,
  },
});
