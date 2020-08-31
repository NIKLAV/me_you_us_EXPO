import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { FONT_SIZE, COLOR } from '../../constants';

const AuthHeader = ({title, body, type}) => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.header__title__text}>{title}</Text>
      </View>
      <View >
        <Text style={styles.header__body__text}>{body}</Text>
      </View>
      <View >
        <Text style={styles.header__type__text}>{type}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 160,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    color: COLOR.HEADER_AUTH_TEXT_COLOR,
  },
  header__title__text: {
    fontSize: FONT_SIZE.H1,
    color: COLOR.HEADER_AUTH_TEXT_COLOR,
  },
  header__body__text: {
    textAlign: 'center',
    color: COLOR.HEADER_AUTH_TEXT_COLOR,
    lineHeight: 24,
  },
  header__type__text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: COLOR.HEADER_AUTH_TEXT_COLOR,
  }
});

export default AuthHeader;
