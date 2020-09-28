import React, {useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  COLOR,
  COMMENT_CONTAINER_WIDTH,
  containerWidth,
  DEFAULT_TEXT_STYLES_IN_COMMENTS,
  MARGIN,
  SIZE_AVA_IN_ASNWER,
  SIZE_AVA_IN_COMMENTS,
  width,
} from "../../constants";
import { getAnswersInComment } from "../../redux/feedsComments/actions";
import { OpenModalButton } from "../common/Icons";
import RoundPhoto from "../common/RoundPhoto";
import TextWrapper from "../common/TextWrapper";
import Answer from "./Answer";

const data = [1, 2];

const Comment = ({ commentId, author, date, answers, message, onPressAnswer }) => {
  const dispatch = useDispatch();
  const { avatar, first_name, last_name, nickname, id } = author;
  

  const [isShowAnswers, setIsShowAnswers] = useState(false);

  const showAnswers = () => {
    setIsShowAnswers(!isShowAnswers);
    dispatch(getAnswersInComment(commentId));
  };

  const allAnswers = useSelector((state) => state.feedComments.answers);
  console.log("allAnswers", allAnswers);

  return (
    <>
      <View style={styles.container}>
        <RoundPhoto size={SIZE_AVA_IN_COMMENTS} url={avatar.url} />
        <View style={styles.textContainer}>
          <TextWrapper style={styles.textStyle}>
            <Text style={styles.name}>{nickname}</Text> {message}
          </TextWrapper>
        </View>
        <OpenModalButton />
      </View>
      <View style={styles.afterCommentContainer}>
        <TextWrapper style={styles.createtAt}>{date}</TextWrapper>
        {/*  <TextWrapper style={styles.like}>22 like</TextWrapper> */}
        <TouchableOpacity onPress={() => onPressAnswer(commentId)} activeOpacity={0.8}>
          <TextWrapper style={styles.answer}>answer</TextWrapper>
        </TouchableOpacity>
      </View>

      <View style={styles.repliesContainer}>
        {answers > 0 && (
          <TouchableOpacity activeOpacity={0.8} onPress={showAnswers}>
            <TextWrapper style={styles.replies}>
              See {answers} replies
            </TextWrapper>
          </TouchableOpacity>
        )}
        {isShowAnswers && (
          <FlatList
            data={allAnswers}
            renderItem={({ item }) => (
              <Answer
                date={item.publish_at}
                message={item.message}
                author={item.author}
              />
            )}
          />
        )}
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
    marginLeft: MARGIN.DEFAULT_MARGIN_BETWEEN_AVA_AND_TEXT,
    width:
      COMMENT_CONTAINER_WIDTH -
      MARGIN.DEFAULT_MARGIN_BETWEEN_AVA_AND_TEXT -
      SIZE_AVA_IN_COMMENTS -
      22,
  },
  textStyle: DEFAULT_TEXT_STYLES_IN_COMMENTS,
  afterCommentContainer: {
    flexDirection: "row",
    marginLeft:
      10 + SIZE_AVA_IN_COMMENTS + MARGIN.DEFAULT_MARGIN_BETWEEN_AVA_AND_TEXT,
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
  repliesContainer: {
    marginTop: 15,
    marginLeft:
      10 + SIZE_AVA_IN_COMMENTS + MARGIN.DEFAULT_MARGIN_BETWEEN_AVA_AND_TEXT,
  },
  replies: {
    /* marginLeft:
      10 + SIZE_AVA_IN_COMMENTS + MARGIN.DEFAULT_MARGIN_BETWEEN_AVA_AND_TEXT, */
    color: "#A1A5AD",
    fontSize: 14,
    fontWeight: "normal",
  },
  name: {
    color: COLOR.PRIMARY_COLOR,
  },
});

export default Comment;
