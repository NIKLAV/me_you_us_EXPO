import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import CalendarIcon from "react-native-vector-icons/FontAwesome";
import { COLOR, containerWidth } from "../../constants";
import TextWrapper from "../common/TextWrapper";

const SettingsInput = ({ label, placeholder, value, setValue, date, setShow }) => {
  return (
    <>
      {date ? (
        <View>
          <TextWrapper style={styles.label}>{label}</TextWrapper>
          <View style={styles.dateInput}>
            <TextInput
              onChangeText={setValue}
              value={value}
              placeholderTextColor={COLOR.PLACEHOLDER_TEXT_COLOR}
              placeholder={placeholder}
              style={{ paddingLeft: 15}}
            />
            <TouchableOpacity onPress={setShow} style={{paddingRight: 15}} activeOpacity={0.8}>
              <CalendarIcon
                name="calendar"
                size={20}
                color={COLOR.PLACEHOLDER_TEXT_COLOR}
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View>
          <TextWrapper style={styles.label}>{label}</TextWrapper>
          <View style={styles.input}>
            <TextInput
              onChangeText={setValue}
              value={value}
              placeholderTextColor={COLOR.PLACEHOLDER_TEXT_COLOR}
              placeholder={placeholder}
              style={{ paddingLeft: 15 }}
            />
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    textAlign: "center",
  },
  input: {
    width: containerWidth,
    height: 42,
    marginVertical: 10,
    justifyContent: "center",
    backgroundColor: COLOR.SETTINGS_INPUT_COLOR,
    borderRadius: 20,
  },
  dateInput: {
    width: containerWidth,
    height: 42,
    marginVertical: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: 'space-between',
    backgroundColor: COLOR.SETTINGS_INPUT_COLOR,
    borderRadius: 20,
  },
});

export default SettingsInput;
