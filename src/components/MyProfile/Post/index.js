import React from "react";
import { View, StyleSheet } from "react-native";
import HeaderPost from "./Header/HeaderPost";
import { MARGIN, width } from "../../../constants";
import BodyPost from "./Body/BodyPost";
import FooterPost from "./Footer/FooterPost";

const Post = () => {
  return (
    <View style={styles.container}>
      <HeaderPost />
      <BodyPost />
      <FooterPost/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: MARGIN.DEFAULT_MARGIN_VERTICAL,
  },
});

export default Post;
