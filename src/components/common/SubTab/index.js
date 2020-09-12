import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useNavigationState, useNavigation } from "@react-navigation/native";
import TextWrapper from "../TextWrapper";
import { containerWidth } from "../../../constants";
import Tab from "./Tab";

const SubTab = ({
  title,
  buttonsContainerStyle,
  textFocusColor,
  buttonFocusColor,
  buttonStyle,
}) => {
  const state = useNavigationState((state) => state);

  return (
    <View style={{ backgroundColor: "#fff", marginVertical: 10 }}>
      <View style={styles.container}>
        <View>
          <TextWrapper>{title}</TextWrapper>
        </View>
        <View style={{ ...styles.buttons, ...buttonsContainerStyle }}>
          {state.routeNames.map((el, index) => {
            const isFocused = index === state.index;
            return (
              <Tab
                isFocused={isFocused}
                key={index + Math.random()}
                text={el}
                textFocusColor={textFocusColor}
                buttonFocusColor={buttonFocusColor}
                buttonStyle={buttonStyle}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: containerWidth,
    alignSelf: "center",
    backgroundColor: "#fff",
    height: 90,
    justifyContent: "space-evenly",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default SubTab;
