import React, {useState} from 'react';
import {View, Text, Modal, StyleSheet} from 'react-native';
import CommonButton from './commonButton';
import GLOBALS from '../../constants';

const {FONTS, COLORS} = GLOBALS;

export default function CommonPopup({
  visible,
  bodytext,
  buttonpress,
  buttonTitle,
}) {
  return (
    <Modal transparent={true} visible={visible}>
      <View style={styles.mainview}>
        <View style={styles.innerview}>
          <Text style={styles.bodystyle}>{bodytext}</Text>
          <CommonButton onPress={buttonpress} title={buttonTitle} />
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
  },
  innerview: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 20,
  },
  headingstyle: {
    fontSize: 30,
    fontFamily: FONTS.BOLD,
    color: COLORS.BLACK,
  },
  bodystyle: {
    color: COLORS.BLACK,
    fontSize: 19,
    marginVertical: 20,
    textAlign: 'center',
    fontFamily: FONTS.REGULAR,
  },
});
