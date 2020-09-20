import React from "react";
import BackIcon from "react-native-vector-icons/FontAwesome5";
import { View, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import CustomStatusBar from "../common/StatusBar";
import TextWrapper from "../common/TextWrapper";
import { width } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const ChatHeader = () => {
  const currentPartner = useSelector((state) => state.chats.currentPartner);

  const { first_name, last_name } = currentPartner;

  const navigation = useNavigation();

  const onPressBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <CustomStatusBar />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={onPressBack}
          style={styles.icon}
          activeOpacity={0.4}
        >
          <BackIcon color="#6d737f" size={22} name="arrow-left" />
        </TouchableOpacity>
        <TextWrapper>
          {first_name} {last_name}
        </TextWrapper>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "center",
    zIndex: 1,
  },
  icon: {
    position: "absolute",
    left: width / 15,
    bottom: 15,
  },
});

export default ChatHeader;
