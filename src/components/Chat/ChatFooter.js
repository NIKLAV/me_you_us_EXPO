import React, { useState } from "react";
import { StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { COLOR, containerWidth, width } from "../../constants";
import CameraButton from "../common/Icons";
import IconWrapper from "../common/IconWrapper";
import SmileIcon from "react-native-vector-icons/Feather";
import MessageInput from "../common/MessageInput";
import { sendMessageToUser } from "../../redux/chats/actions";

const ChatFooter = () => {
  const dispatch = useDispatch();
  const partnerId = useSelector(
    (state) => state.chats.currentPartner.partner_id
  );

  const [text, setText] = useState("");

  let body = {
    message: text,
    to: partnerId,
  };

  const sendMessage = () => {
    dispatch(sendMessageToUser(body));
  };

  return (
    <View style={styles.container}>
      <MessageInput
        iconColor={COLOR.PRIMARY_COLOR}
        setValue={setText}
        value={text}
        placeholder="Type a message..."
        send={sendMessage}
      />
      <IconWrapper
        style={{ backgroundColor: COLOR.POST_FOOTER_TELEGA_AND_SHARE_COLOR }}
      >
        <SmileIcon color="#fff" name="smile" size={22} />
      </IconWrapper>
      <CameraButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    position: "absolute",
    bottom: 0,
    paddingVertical: 17,
    paddingHorizontal: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: COLOR.CHAT_SEPARATOR_COLOR,
    /* flex: 1, */
  },
});

export default ChatFooter;
