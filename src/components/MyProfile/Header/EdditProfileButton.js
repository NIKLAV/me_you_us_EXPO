import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import PenIcon from "react-native-vector-icons/FontAwesome5";
import { height, width } from "../../../constants";

const EdditProfileButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <PenIcon name="pen" size={20} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: height / 22,
    top: height / 22,
    height: height / 12,
    width: height / 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    backgroundColor: "#69ab5b",
    zIndex: 10,
  },
});

export default EdditProfileButton;
