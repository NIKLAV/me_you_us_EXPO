import React, { useEffect, useRef, useState } from "react";
import { FlatList, KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Comment from "../../components/Comments/Comment";
import CommentFooter from "../../components/Comments/CommentFooter";
import HeaderSeparator from "../../components/common/HeaderSeparator";
import Preloader from "../../components/common/Preloader";
import { containerWidth, height, MARGIN } from "../../constants";
import { getCommentsInFeed } from "../../redux/feedsComments/actions";
import BottomSheet from "../../components/common/BottomSheet";
import { CHECK_ID_AND_IS_ANSWER } from "../../redux/types";

/* const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; */

const Comments = () => {
  const dispatch = useDispatch();
  /* const [answerState, setIsAnswerState] = useState({
    isAnswer: false,
    commentId: null
  }) */
  const inputRef = useRef(null);
  
  const onPressAnswer = (commentId) => {
    dispatch({
      type: CHECK_ID_AND_IS_ANSWER,
      payload: { commentId: commentId },
    });
    /*  setIsAnswerState({...answerState, isAnswer: true, commentId: commentId}) */
    inputRef.current.focus();
  };

  const postId = useSelector((state) => state.feedComments.postId);
  const loading = useSelector(
    (state) => state.feedComments.loadingCommentsInFeed
  );

  useEffect(() => {
    if (!postId) return;
    dispatch(getCommentsInFeed(postId));
  }, []);

  const comments = useSelector((state) => state.feedComments.comments);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "position" : "height"}
      keyboardVerticalOffset={70}
      style={{
        backgroundColor: "#fff",
      }}
    >
      <View style={styles.container}>
        {!loading ? (
          <>
            <FlatList
              keyExtractor={(item) => item.id.toString()}
              data={comments}
              ListHeaderComponent={HeaderSeparator}
              renderItem={({ item }) => (
                <Comment
                  onPressAnswer={onPressAnswer}
                  commentId={item.id}
                  author={item.author}
                  date={item.publish_at}
                  answers={item.answers}
                  message={item.message}
                />
              )}
            />
            <CommentFooter inputRef={inputRef} />
          </>
        ) : (
          <Preloader />
        )}
        <BottomSheet modalHeight={300} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    /* justifyContent: 'space-between', */
    height: height - 30 - MARGIN.DEFAULT_MARGIN_VERTICAL - 34,
  },
});

export default Comments;
