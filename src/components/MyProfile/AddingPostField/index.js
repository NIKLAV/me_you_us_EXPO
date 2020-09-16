import React from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import CameraIcon from "react-native-vector-icons/MaterialCommunityIcons";
import RoundPhoto from "../../common/RoundPhoto";
import { COLOR, width } from "../../../constants";
import MessageInput from "../../common/MessageInput";
import IconWrapper from "../../common/IconWrapper";
import { useSelector } from "react-redux";

const AddingPostField = () => {
  const url = useSelector((state) => state.account.avatarUrl);
  return (
    <View style={styles.container}>
      <View>{url && <RoundPhoto url={url} size={42} />}</View>
      <MessageInput placeholder="What’s new?" />
      <IconWrapper activeOpacity={0.7} style={{ backgroundColor: "#7dcfff" }}>
        <CameraIcon size={22} name="camera-plus" color="#fff" />
      </IconWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    backgroundColor: COLOR.BACK_MAIN_TOP_TABBAR_COLOR,
  },
});

export default AddingPostField;
