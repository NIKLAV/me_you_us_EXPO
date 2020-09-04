import React from "react";
import { View, StyleSheet } from "react-native";
import { containerWidth } from "../../constants";

const SettingsWrapper = ({ children }) => {
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: containerWidth,
        alignSelf: 'center',
        
    }
})

export default SettingsWrapper;
