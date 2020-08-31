import React from "react";
import HomeIcon from "react-native-vector-icons/FontAwesome";
import SettingsIcon from "react-native-vector-icons/FontAwesome5";
import { COLOR, TOP_ICON_SIZE } from "../../constants";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const TopIcon = ({ name }) => {
  const navigation = useNavigation();
  console.warn(navigation)
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate(name)}
        style={styles.icon}
      >
        {name === "Home" ? (
          <HomeIcon name="home" color={COLOR.TOP_ICONS_COLOR} size={25} />
        ) : name === "GeneralSettings" ? (
          <SettingsIcon name="user-edit" color={COLOR.TOP_ICONS_COLOR} size={20} />
        ) : null}
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: TOP_ICON_SIZE,
    width: TOP_ICON_SIZE,
    padding: 8,
    borderWidth: 1,
    borderRadius: TOP_ICON_SIZE / 2,
    borderColor: "#e8e9e9",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TopIcon;
