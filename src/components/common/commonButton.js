import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import GLOBALS from '../../constants';

const {FONTS, COLORS} = GLOBALS;

export default function CommonButton({title, onPress, style}) {
  return (
    <View>
      <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={styles.font}> {title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.BUTTONCOLOR,
    borderRadius: 8,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom:10
  },
  font: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: FONTS.REGULAR,
    fontStyle: 'normal',
    color: COLORS.BLACK,
  },
});
