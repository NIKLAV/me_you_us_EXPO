import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  COLOR,
  COMMENT_CONTAINER_WIDTH,
  containerWidth,
  width,
} from "../../constants";
import {
  sendAnswersInComment,
  sendCommentInFeed,
} from "../../redux/feedsComments/actions";
import MessageInput from "../common/MessageInput";
import RoundPhoto from "../common/RoundPhoto";

const CommentFooter = ({ inputRef, url, addCurrentAnswer }) => {
  const postId = useSelector((state) => state.feedComments.postId);
  const dispatch = useDispatch();
  const { isAnswer, currentCommentId } = useSelector(
    (state) => state.feedComments
  );
  
  const [text, setText] = useState("");

  const sendComment = () => {
    if (isAnswer === false) {
      dispatch(sendCommentInFeed({ feed_id: postId, message: text }));
    } else dispatch(sendAnswersInComment(currentCommentId, { message: text }, addCurrentAnswer));
  };

  return (
    <View style={styles.container}>
      <RoundPhoto
        size={50}
        url={url}
      />
      <MessageInput
        width={{ width: width - 80 }}
        placeholder="Type a message..."
        value={text}
        setValue={setText}
        send={sendComment}
        inputRef={inputRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 17,
    paddingHorizontal: (width - COMMENT_CONTAINER_WIDTH) / 2,
    width: width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    borderColor: COLOR.CHAT_SEPARATOR_COLOR,
    borderTopWidth: 0.7,
  },
});

export default CommentFooter;
