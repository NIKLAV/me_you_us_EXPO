import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import TelegaIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import { width, COLOR } from "../../../constants";

const MessageInput = ({ placeholder, setValue, value, send, iconColor="#93969e", width }) => {
  const dispatch = useDispatch();

  const onPress = () => {
    if (value.trim().length === 0) {
      return;
    }
    send();
    setValue("");
  };
  return (
    <View style={{...styles.input, ...width}}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
      />
      <TouchableOpacity onPress={onPress}>
        <TelegaIcon size={25} color={iconColor} name="telegram" />
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
