import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import TelegaIcon from "react-native-vector-icons/MaterialCommunityIcons";
import ShareIcon from "react-native-vector-icons/FontAwesome5";
import { COLOR, width } from "../../../../constants";
import IconWrapper from "../../../common/IconWrapper";
import TextWrapper from "../../../common/TextWrapper";
import Counter from "./Counter";

const sizeRound = 36;

const FooterPost = () => {
  return (
    <View
      style={{ borderWidth: 1, borderColor: COLOR.POST_FOOTER_BORDER_COLOR }}
    >
      <View style={styles.container}>
        <Counter nameIcon="thumbs-up" count={20} />
        <Counter nameIcon="thumbs-down" count={1} />
        <IconWrapper
          size={sizeRound}
          style={{ backgroundColor: COLOR.POST_FOOTER_TELEGA_AND_SHARE_COLOR }}
        >
          <TelegaIcon color={"#fff"} name="telegram" size={25} />
        </IconWrapper>
        <IconWrapper
          size={sizeRound}
          style={{ backgroundColor: COLOR.POST_FOOTER_TELEGA_AND_SHARE_COLOR }}
        >
          <ShareIcon color={"#fff"} name="share" size={22} />
        </IconWrapper>
        <TouchableOpacity activeOpacity={0.8}>
          <TextWrapper>15 comments</TextWrapper>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    alignSelf: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: width - 10,
  },
});

export default FooterPost;
