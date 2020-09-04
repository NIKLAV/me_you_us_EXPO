import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { COLOR, containerWidth } from "../../constants";
import TextWrapper from "../common/TextWrapper";

const SettingsInput = ({ label, placeholder, value, setValue }) => {
  return (
    <View>
      <TextWrapper style={styles.label}>{label}</TextWrapper>
      <View style={styles.input}>
        <TextInput
          onChangeText={setValue}
          value={value}
          placeholderTextColor={COLOR.PLACEHOLDER_TEXT_COLOR}
          placeholder={placeholder}
          style={{paddingLeft: 15}}
        
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    label: {
        textAlign: 'center',
    },
    input: {
        width: containerWidth,
        height: 42,
        marginVertical: 10,
        justifyContent: 'center',
        backgroundColor: COLOR.SETTINGS_INPUT_COLOR,
        borderRadius: 20


    }
})

export default SettingsInput;
