import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {containerWidth, COLOR} from '../../constants';
import CustomButton from '../common/Button';

const AuthButtons = ({text_1, text_2, onPress_2, onPress_1}) => {
  return (
    <View style={styles.buttons__container}>
      <CustomButton
        onPress={onPress_1}
        styleButton={styles.login}
        text={text_1}
      />
      <Text>or</Text>
      <CustomButton
        styleText={styles.signUpText}
        styleButton={styles.signUp}
        text={text_2}
        onPress={onPress_2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttons__container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    marginBottom: 10,
    width: containerWidth,
    backgroundColor: COLOR.LOGIN_BUTTON_COLOR,
  },
  signUp: {
    marginTop: 10,
    width: containerWidth,
    borderWidth: 1,
    borderColor: COLOR.HEADER_AUTH_TEXT_COLOR,
    backgroundColor: 'transparent',
  },
  signUpText: {
    color: COLOR.HEADER_AUTH_TEXT_COLOR,
  },
});

export default AuthButtons;
