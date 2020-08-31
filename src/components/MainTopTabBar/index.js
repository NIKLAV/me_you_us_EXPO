import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Animated from "react-native-reanimated";
import { containerWidth, COLOR } from "../../constants";
import CustomStatusBar from "../common/StatusBar";
import TopIcon from "./TopIcon";

const MainTopTabBar = ({ state, navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: COLOR.BACK_MAIN_TOP_TABBAR_COLOR }}>
      <View style={styles.container}>
        <CustomStatusBar />
        <View style={styles.logoAndSearch}>
          <View>
            <Text>Logo</Text>
          </View>
          <View>
            <Text>Icon</Text>
          </View>
        </View>
        <View style={styles.iconContainer}>
          {state.routes.map((el) => (
            <TopIcon name={el.name} />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: containerWidth,
    alignSelf: "center",
  },
  logoAndSearch: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default MainTopTabBar;
