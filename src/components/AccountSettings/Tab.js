import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLOR } from "../../constants";

const Tab = ({ text, isFocused }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.container}
      onPress={() => navigation.navigate(text)}
    >
      <Text style={isFocused ? { color: COLOR.PRIMARY_COLOR } : null}>
        {text === "GeneralSettings" ? "General settings" : text}
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
