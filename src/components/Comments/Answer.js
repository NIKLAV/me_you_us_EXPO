import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  COLOR,
  COMMENT_CONTAINER_WIDTH,
  DEFAULT_TEXT_STYLES_IN_COMMENTS,
  MARGIN,
  SIZE_AVA_IN_ASNWER,
  SIZE_AVA_IN_COMMENTS,
} from "../../constants";
import RoundPhoto from "../common/RoundPhoto";
import TextWrapper from "../common/TextWrapper";

const Answer = ({ author, message, date }) => {
  console.log("date in answer", author, message, date);
  return (
    <>
      <View style={styles.container}>
        <RoundPhoto
          size={SIZE_AVA_IN_ASNWER}
          url={author.avatar.url}
        />
        <View style={styles.textContainer}>
          <TextWrapper style={styles.textStyle}>
            <Text style={styles.name}>{author.nickname}</Text> {message}
          </TextWrapper>
        </View>
      </View>
      <View style={styles.afterCommentContainer}>
        <TextWrapper style={styles.createtAt}>{date}</TextWrapper>
        {/* <TextWrapper style={styles.like}>22 like</TextWrapper> */}
        <TextWrapper style={styles.answer}>
          {/* {answers} */} answer
        </TextWrapper>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
  },
  textContainer: {
    width:
      COMMENT_CONTAINER_WIDTH -
      MARGIN.DEFAULT_MARGIN_BETWEEN_AVA_AND_TEXT * 2 -
      SIZE_AVA_IN_COMMENTS -
      22 -
      SIZE_AVA_IN_ASNWER,
    marginLeft: MARGIN.DEFAULT_MARGIN_BETWEEN_AVA_AND_TEXT,
  },
  name: {
    color: COLOR.PRIMARY_COLOR,
  },
  textStyle: DEFAULT_TEXT_STYLES_IN_COMMENTS,
  afterCommentContainer: {
    flexDirection: "row",
    marginLeft: SIZE_AVA_IN_ASNWER + MARGIN.DEFAULT_MARGIN_BETWEEN_AVA_AND_TEXT,
  },
  createtAt: {
    color: "#A1A5AD",
    fontSize: 13,
  },
  like: {
    marginLeft: 15,
    color: "#A1A5AD",
    fontSize: 13,
  },
  answer: {
    marginLeft: 15,
    color: "#A1A5AD",
    fontSize: 13,
    fontWeight: "bold",
  },
});

export default Answer;
