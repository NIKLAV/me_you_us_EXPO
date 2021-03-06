import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import RoundPhoto from "../../common/RoundPhoto";
import { COLOR, width } from "../../../constants";
import MessageInput from "../../common/MessageInput";

import { useDispatch, useSelector } from "react-redux";
import { createNewFeed } from "../../../redux/feed/actions";
import CameraButton from "../../common/Icons";

const AddingPostField = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const send = () => {
    dispatch(createNewFeed({ message: text }));
  };

  const url = useSelector((state) => state.account.avatarUrl);

  return (
    <View style={styles.container}>
      <View>{url && <RoundPhoto url={url} size={42} />}</View>
      <MessageInput
        setValue={setText}
        value={text}
        placeholder="What’s new?"
        send={send}
      />
      <CameraButton />
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
