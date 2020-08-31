import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { COLOR, FONT_SIZE } from "../../../constants";

const CustomCheckBox = ({ label, containerStyle }) => {
  const [checked, setChecked] = useState(false);
  const onCheck = () => {
    setChecked(!checked);
  };
  return (
    <TouchableOpacity
      onPress={() => setChecked(!checked)}
      style={{...styles.container, ...containerStyle}}
      activeOpacity={0.9}
    >
      <View style={styles.checkbox}>
        {checked ? (
          <Icon
            name="ios-checkmark"
            color={COLOR.LOGIN_BUTTON_COLOR}
            size={22}
          />
        ) : null}
      </View>
      <View>
        <Text style={FONT_SIZE.H3}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 130,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    alignItems: "center",
    justifyContent: "center",
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: COLOR.PLACEHOLDER_TEXT_COLOR,
  },
});

export default CustomCheckBox;
