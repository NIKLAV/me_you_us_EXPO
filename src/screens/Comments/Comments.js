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

const Comments = () => {
  const dispatch = useDispatch();

  const inputRef = useRef(null);

  const onPressAnswer = (commentId) => {
    dispatch({
      type: CHECK_ID_AND_IS_ANSWER,
      payload: { commentId: commentId },
    });

    inputRef.current.focus();
  };

  const postId = useSelector((state) => state.feedComments.postId);
  const loading = useSelector(
    (state) => state.feedComments.loadingCommentsInFeed
  );
  const avaUrl = useSelector((state) => state.account.avatarUrl);

  useEffect(() => {
    if (!postId) return;
    dispatch(getCommentsInFeed(postId));
  }, []);

  const comments = useSelector((state) => state.feedComments.comments);

  /* const [currentAnswers, setCurrentAnswers] = useState([]);

  const addCurrentAnswer = (data) => {
    if (Array.isArray(data)) {
      setCurrentAnswers([...currentAnswers, ...data]);
    } else setCurrentAnswers([...currentAnswers, data]);
  };
  console.warn("render"); */

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
                  /* currentAnswers={currentAnswers}
                  setCurrentAnswers={setCurrentAnswers}
                  addCurrentAnswer={addCurrentAnswer} */
                />
              )}
            />
            <CommentFooter
             /*  addCurrentAnswer={addCurrentAnswer} */
              url={avaUrl}
              inputRef={inputRef}
            />
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
