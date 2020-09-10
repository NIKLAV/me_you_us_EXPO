import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { height } from "../../../constants";

const IconWrapper = ({ children, style, size = 42, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{...styles.container, width: size, height: size, ...style}} activeOpacity={0.8}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    backgroundColor: "#69ab5b",
    zIndex: 10,
  },
});

export default IconWrapper;
