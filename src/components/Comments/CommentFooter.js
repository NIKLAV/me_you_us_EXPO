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

const CommentFooter = ({ inputRef }) => {
  const postId = useSelector((state) => state.feedComments.postId);
  const dispatch = useDispatch();
  const { isAnswer, currentCommentId } = useSelector(
    (state) => state.feedComments
  );
  console.warn("isAnswer", isAnswer, "id", currentCommentId);
  const [text, setText] = useState("");

  const sendComment = () => {
    if (isAnswer === false) {
      dispatch(sendCommentInFeed({ feed_id: postId, message: text }));
    } else dispatch(sendAnswersInComment(currentCommentId, { message: text }));
  };

  return (
    <View style={styles.container}>
      <RoundPhoto
        size={50}
        url={`https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg`}
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
