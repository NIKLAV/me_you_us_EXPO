import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Animated,
} from "react-native";
import CalendarIcon from "react-native-vector-icons/FontAwesome";
import { COLOR, containerWidth } from "../../constants";
import TextWrapper from "../common/TextWrapper";
import { shake } from "../../services/helpers";
import ErrorMessage from "../common/Input/ErrorMessage";

const SettingsInput = ({
  label,
  placeholder,
  value,
  setValue,
  date,
  setShow,
  errorMessage,
  onBlur,
  clearError,
}) => {
  const [shakeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    shake(Animated, shakeAnim);
  }, [errorMessage]);

  return (
    <>
      {date ? (
        <View>
          <TextWrapper style={styles.label}>{label}</TextWrapper>
          <View style={styles.dateInput}>
            <TextInput
              value={`${value.getDate()}/${
                value.getMonth() + 1
              }/${value.getFullYear()}`}
              placeholderTextColor={COLOR.PLACEHOLDER_TEXT_COLOR}
              placeholder={placeholder}
              style={{ paddingLeft: 15 }}
              editable={false}
            />
            <TouchableOpacity
              onPress={setShow}
              style={{ paddingRight: 15 }}
              activeOpacity={0.8}
            >
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
          <Animated.View
            style={[
              styles.input,
              errorMessage && {
                marginLeft: shakeAnim,
                borderColor: COLOR.ERROR_COLOR,
                borderWidth: 1,
              },
            ]}
          >
            <TextInput
              onChangeText={setValue}
              value={value}
              placeholderTextColor={COLOR.PLACEHOLDER_TEXT_COLOR}
              placeholder={placeholder}
              style={{ paddingLeft: 15 }}
              onBlur={onBlur}
            />
          </Animated.View>
          {errorMessage ? (
            <ErrorMessage
              closeErrors={clearError}
              errorMessage={errorMessage}
            />
          ) : null}
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
    backgroundColor: COLOR.INPUT_COLOR,
    borderRadius: 20,
  },
  dateInput: {
    width: containerWidth,
    height: 42,
    marginVertical: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLOR.INPUT_COLOR,
    borderRadius: 20,
  },
});

export default SettingsInput;
