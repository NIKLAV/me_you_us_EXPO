import React from "react";
import { StyleSheet, Text } from "react-native";
import { COLOR } from "../../../constants";

const TextWrapper = ({ children, style, numberOfLines }) => {
  return (
    <Text
      ellipsizeMode="tail"
      numberOfLines={numberOfLines}
      style={{ ...styles.default, ...style }}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLOR.PRIMARY_TEXT_COLOR,
  },
});

export default TextWrapper;
