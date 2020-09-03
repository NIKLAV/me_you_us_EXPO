import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import SearchIcon from "react-native-vector-icons/FontAwesome";
import { containerWidth, COLOR } from "../../constants";
import CustomStatusBar from "../common/StatusBar";
import TopIcon from "./TopIcon";
import Logo from "../common/Logo/Logo";
import { TouchableOpacity } from "react-native-gesture-handler";

const MainTopTabBar = ({state}) => {
  return (
    <SafeAreaView style={{ backgroundColor: COLOR.BACK_MAIN_TOP_TABBAR_COLOR }}>
      <View style={styles.container}>
        <CustomStatusBar />
        <View style={styles.logoAndSearch}>
          <Logo />
          <TouchableOpacity activeOpacity={0.9}>
            <SearchIcon name="search" color={COLOR.LOGO_TABBAR_TEXT_COLOR} size={20} />
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          {state.routes.map((el, index) => {
            const isFocused = state.index === index;
            return (
              <TopIcon
                key={index + Math.random()}
                isFocused={isFocused}
                name={el.name}
              />
            );
          })}
          <TopIcon name='Logout'/>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: containerWidth,
    alignSelf: "center",
  },
  logoAndSearch: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default MainTopTabBar;
