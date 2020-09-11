import React from "react";
import { StyleSheet, Image, View } from "react-native";
import {
  width,
  height,
  POST_PHOTO_HEIGHT,
  MARGIN,
} from "../../../../constants";
import TextWrapper from "../../../common/TextWrapper";

const BodyPost = ({message}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ width: width, height: POST_PHOTO_HEIGHT }}
          source={{
            uri:
              "https://javasea.ru/uploads/posts/2020-04/1587045469_popugay-ara2.jpg",
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <TextWrapper style={styles.text}>
          {message}
        </TextWrapper>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  textContainer: {
    marginVertical: MARGIN.DEFAULT_MARGIN_VERTICAL,
    width: width - 42,
    alignSelf: "center",
  },
  text: {
      lineHeight: 30
  }
});

export default BodyPost;
