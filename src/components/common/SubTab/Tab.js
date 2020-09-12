import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Tab = ({
  text,
  isFocused,
  textFocusColor,
  buttonFocusColor,
  buttonStyle,
}) => {
  const checkText = (text) => {
    if (text === "GeneralSettings") {
      return "General settings";
    } else if (text === "AllFriends") {
      return "All friends";
    }
    return text;
  };
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        styles.container,
        isFocused && { backgroundColor: buttonFocusColor },
        buttonStyle,
      ]}
      onPress={() => navigation.navigate(text)}
    >
      <Text style={isFocused && { color: textFocusColor }}>
        {checkText(text)}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderColor: "#bec0c4",
    borderWidth: 1,
    borderRadius: 14,
  },
});

export default Tab;
