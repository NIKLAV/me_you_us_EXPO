import React from "react";
import { FlatList, KeyboardAvoidingView, StyleSheet, View } from "react-native";
import Comment from "../../components/Comments/Comment";
import CommentFooter from "../../components/Comments/CommentFooter";
import HeaderSeparator from "../../components/common/HeaderSeparator";
import { containerWidth, height, MARGIN } from "../../constants";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const Comments = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "position" : "height"}
      keyboardVerticalOffset={70}
      style={{
        backgroundColor: "#fff",
      }}
    >
      <View style={styles.container}>
        <FlatList
          data={data}
          ListHeaderComponent={HeaderSeparator}
          renderItem={({ item }) => <Comment />}
        />
        <CommentFooter />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height - 30 - MARGIN.DEFAULT_MARGIN_VERTICAL - 34,
  },
});

export default Comments;
