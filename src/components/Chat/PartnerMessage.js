import React from "react";
import { StyleSheet, View } from "react-native";
import {
  CHAT_CONTAINER_WIDTH,
  COLOR,
  containerWidth,
  SIZE_PHOTO,
  SPACE_BETWEEN_PHOTO_AND_MESSAGE,
} from "../../constants";
import RoundPhoto from "../common/RoundPhoto";
import TextWrapper from "../common/TextWrapper";

const PartnerMessage = ({ message, url, date }) => {
  return (
    <View style={styles.container}>
      <RoundPhoto size={SIZE_PHOTO} url={url} />
      <View style={styles.messageAndData}>
        <View style={styles.message}>
          <TextWrapper>{message}</TextWrapper>
        </View>
        <View style={styles.date}>
          <TextWrapper style={{ color: "#a0a4ae", fontSize: 14 }}>
            {date}
          </TextWrapper>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CHAT_CONTAINER_WIDTH,
    marginBottom: 90,
    alignSelf: "center",
    marginVertical: 10,
    flexDirection: "row-reverse",
    alignItems: "flex-end",
  },
  messageAndData: {
    maxWidth:
      CHAT_CONTAINER_WIDTH - SIZE_PHOTO - SPACE_BETWEEN_PHOTO_AND_MESSAGE,
    justifyContent: "space-between",
    marginRight: SPACE_BETWEEN_PHOTO_AND_MESSAGE,
    alignItems: "flex-end",
  },
  message: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#f0f2f6",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
});

export default PartnerMessage;
