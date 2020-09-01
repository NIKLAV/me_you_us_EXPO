import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useNavigationState, useNavigation } from "@react-navigation/native";
import TextWrapper from "../common/TextWrapper";
import { containerWidth } from "../../constants";
import CustomButton from "../../components/common/Button";
import Tab from "./Tab";

const AccountSettings = () => {
  const state = useNavigationState((state) => state);

  return (
    <View style={{ backgroundColor: "#fff", marginVertical: 10 }}>
      <View style={styles.container}>
        <View>
          <TextWrapper>Account settings</TextWrapper>
        </View>
        <View style={styles.buttons}>
          {state.routeNames.map((el, index) => {
            const isFocused = index === state.index;
            return (
              <Tab
                isFocused={isFocused}
                key={index + Math.random()}
                text={el}
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

export default AccountSettings;
