import React from "react";
import { StyleSheet, View } from "react-native";
import { COMMENT_CONTAINER_WIDTH, containerWidth, width } from "../../constants";
import { OpenModalButton } from "../common/Icons";
import RoundPhoto from "../common/RoundPhoto";
import TextWrapper from "../common/TextWrapper";

const sizeAva = 50;
const margin = 20;

const Comment = () => {
  return (
    <>
      <View style={styles.container}>
        <RoundPhoto
          size={sizeAva}
          url={`https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg`}
        />
        <View style={styles.textContainer}>
          <TextWrapper style={styles.textStyle}>
            Здесь будет какой-то очень интересный комментарий. Можно лайкнуть а
            можно и не лайкнуть.
          </TextWrapper>
        </View>
        <OpenModalButton />
      </View>
      <View style={styles.afterCommentContainer}>
        <TextWrapper style={styles.createtAt}>1:15pm</TextWrapper>
        <TextWrapper style={styles.like}>22 like</TextWrapper>
        <TextWrapper style={styles.answer}>Answer</TextWrapper>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    alignSelf: "center",
    width: COMMENT_CONTAINER_WIDTH,
    flexDirection: "row",
    /* justifyContent: "space-between", */
  },
  textContainer: {
    marginLeft: margin,
    width: COMMENT_CONTAINER_WIDTH - margin - sizeAva - 22,
  },
  textStyle: {
    color: "#525B6A",
    fontWeight: "normal",
    fontSize: 15,
  },
  afterCommentContainer: {
      marginTop: 5,
    flexDirection: "row",
    marginLeft: 10 + sizeAva + margin,
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

export default Comment;
