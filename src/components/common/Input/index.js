import React, { useState, useEffect } from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Animated,
} from "react-native";
import { useDispatch } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import ErrorIcon from "react-native-vector-icons/Entypo";
import { COLOR, width, height, containerWidth } from "../../../constants";
import * as types from "../../../redux/types";
import { shake } from "../../../services/helpers";
import ErrorMessage from "./ErrorMessage";

const Input = ({
  placeholder,
  value,
  onChangeText,
  eye,
  errorMessage,
  clearError,
  onBlur,
  onChange,
}) => {
  const dispatch = useDispatch();
  const [isHiddenPassword, setIsHiddenPassword] = useState(true);
  const onPressIcon = () => {
    setIsHiddenPassword(!isHiddenPassword);
  };

  const closeErrors = () => {
    clearError();
    dispatch({ type: types.AUTH_SIGNUP_CLEAR_ERROR });
  };

  const [shakeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    shake(Animated, shakeAnim);
  }, [errorMessage]);

  return (
    <>
      <Animated.View
        style={[
          styles.input__container,
          errorMessage
            ? {
                marginLeft: shakeAnim,
                borderColor: COLOR.ERROR_COLOR,
                borderBottomWidth: 0.7,
              }
            : null,
        ]}
      >
        <TextInput
          placeholderTextColor={
            errorMessage ? COLOR.ERROR_COLOR : COLOR.PLACEHOLDER_TEXT_COLOR
          }
          onBlur={onBlur}
          placeholder={placeholder}
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          onChange={onChange}
          secureTextEntry={eye ? isHiddenPassword : null}
        />
        {eye ? (
          <TouchableOpacity onPress={onPressIcon}>
            {isHiddenPassword ? (
              <Ionicons
                name="ios-eye"
                size={25}
                color={COLOR.PLACEHOLDER_TEXT_COLOR}
              />
            ) : (
              <Ionicons
                name="ios-eye-off"
                size={25}
                color={COLOR.PLACEHOLDER_TEXT_COLOR}
              />
            )}
          </TouchableOpacity>
        ) : null}
      </Animated.View>
      {errorMessage && (
        <ErrorMessage closeErrors={closeErrors} errorMessage={errorMessage} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  input__container: {
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: containerWidth,
    borderBottomWidth: 0.3,
  },
  error: {
    width: containerWidth - 20,
    flexDirection: "row",
    marginTop: 10,
  },
  error__text: {
    color: COLOR.ERROR_COLOR,
  },
});

export default Input;
