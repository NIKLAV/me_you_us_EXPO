import React from "react";
import { View, StyleSheet } from "react-native";
import { MARGIN, width } from "../../../constants";

const HeaderSeparator = () => {
  return <View style={styles.separator}></View>;
};

const styles = StyleSheet.create({
  separator: {
    height: MARGIN.DEFAULT_MARGIN_VERTICAL,
    width: width,
    backgroundColor: "#efefef",
  },
});

export default HeaderSeparator;
