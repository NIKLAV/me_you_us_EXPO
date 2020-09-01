import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { COLOR } from "../../../constants";

const Logo = ({ type }) => {
  return (
    <View style={styles.logo}>
      <View>
        <Image
          style={{ position: "absolute" }}
          source={
            type === "welcome"
              ? require("../../../assets/img/home/arrow_left.png")
              : require("../../../assets/img/top_tab_bar/arrow_left.png")
          }
        />
        <Image
          source={
            type === "welcome"
              ? require("../../../assets/img/home/arrow_right.png")
              : require("../../../assets/img/top_tab_bar/arrow_right.png")
          }
        />
      </View>
      <View>
        <Text
          style={
            type === "welcome" ? styles.logo__text : styles.logo__text__primary
          }
        >
          MeYouUS
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 140,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo__text: {
    color: COLOR.LOGO_TEXT_COLOR,
    fontSize: 22,
  },
  logo__text__primary: {
    color: COLOR.LOGO_TABBAR_TEXT_COLOR,
    fontSize: 22,
  },
});

export default Logo;
