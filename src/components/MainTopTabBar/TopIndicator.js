import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { height, TOP_ICON_SIZE, width } from "../../constants";

const TopIndicator = ({ count, left }) => {
  return (
    <View style={{...styles.container, ...left}}>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    
    top: -5,
    height: TOP_ICON_SIZE / 2.5,
    width: TOP_ICON_SIZE / 2.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: TOP_ICON_SIZE,
    backgroundColor: "#ffa800",
    zIndex: 1000,
  },
  count: {
    color: "#fefeff",
  },
});

export default TopIndicator;
