import React from "react";
import ErrorIcon from "react-native-vector-icons/Entypo";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { COLOR, containerWidth } from "../../../constants";

const ErrorMessage = ({ errorMessage, closeErrors }) => {
  return (
    <View style={styles.error}>
      <TouchableOpacity onPress={closeErrors}>
        <ErrorIcon
          name="circle-with-cross"
          size={18}
          style={{ marginRight: 15 }}
          color={COLOR.ERROR_COLOR}
        />
      </TouchableOpacity>
      <Text style={styles.error__text}>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    width: containerWidth - 20,
    flexDirection: "row",
    marginTop: 10,
  },
  error__text: {
    color: COLOR.ERROR_COLOR,
  },
});

export default ErrorMessage;
