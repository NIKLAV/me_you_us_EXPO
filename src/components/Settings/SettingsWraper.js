import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { containerWidth } from "../../constants";

const SettingsWrapper = ({ children }) => {
  return (
    <View style={{ backgroundColor: "#fff", paddingTop: 20 }}>
      <ScrollView style={styles.container}>{children}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: containerWidth,
    alignSelf: "center",
  },
});

export default SettingsWrapper;
