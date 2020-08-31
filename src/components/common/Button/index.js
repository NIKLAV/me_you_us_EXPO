import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import {width, FONT_SIZE} from '../../../constants';

const CustomButton = ({styleButton, styleText, text, onPress, disabled}) => {
  /* const ButtonWrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity */
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{...styles.default, ...styleButton}}>
      <Text style={{...styles.defaultText, ...styleText}}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  default: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: width - 80,
    height: 45,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 20,
  },
  defaultText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CustomButton;
