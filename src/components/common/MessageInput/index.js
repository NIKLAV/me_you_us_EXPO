import React from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import TelegaIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { width, COLOR } from "../../../constants";

const MessageInput = ({ placeholder, onChangeText, value }) => {
  return (
    <View style={styles.input}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
      <TouchableOpacity>
        <TelegaIcon
          size={25}
          color='#93969e'
          name="telegram"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: width - 110,
    height: 42,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: COLOR.INPUT_COLOR,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLOR.INPUT_COLOR,
  },
});

export default MessageInput;
