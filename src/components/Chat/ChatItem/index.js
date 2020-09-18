import React from "react";
import { View, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { COLOR, containerWidth, width } from "../../../constants";
import RoundPhoto from "../../common/RoundPhoto";
import TextWrapper from "../../common/TextWrapper";
import ChatItemSeparator from "./ChatItemSeparator";

const size = 60;
const marginBetweenPhoto = 20;
const widthNameAndMessage = containerWidth - size - marginBetweenPhoto;

const ChatItem = ({ id, lastMessageInfo }) => {
  const { message, date, author } = lastMessageInfo;

  return (
    <ChatItemSeparator id={id}>
      <TouchableOpacity style={styles.container}>
        <RoundPhoto size={size} url={author.avatar.url} />
        <View style={styles.nameAndMessage}>
          <View style={styles.nameAndTime}>
            <TextWrapper>
              {author.first_name} {author.last_name}
            </TextWrapper>
            <TextWrapper style={styles.messageStyle}>{date}</TextWrapper>
          </View>
          <TextWrapper style={styles.messageStyle} numberOfLines={1}>
            {message}
          </TextWrapper>
        </View>
      </TouchableOpacity>
    </ChatItemSeparator>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    width: containerWidth,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  nameAndMessage: {
    marginLeft: marginBetweenPhoto,
    width: widthNameAndMessage,
    height: size,
    justifyContent: "space-around",
  },
  nameAndTime: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  messageStyle: {
    color: "#a0a4ae",
    fontSize: 14,
  },
});

export default ChatItem;
