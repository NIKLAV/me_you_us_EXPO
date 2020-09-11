import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconWrapper from "../../../common/IconWrapper";
import TextWrapper from "../../../common/TextWrapper";
import { COLOR } from "../../../../constants";

const sizeRound = 36;

const Counter = ({ nameIcon, count }) => {
  const [isLiked, setIsLiked] = useState(false);

  const onLikePress = () => {
    setIsLiked(!isLiked);
  };
  return (
    <View style={styles.likeContaier}>
      <IconWrapper
        onPress={onLikePress}
        size={sizeRound}
        style={
          isLiked
            ? { backgroundColor: COLOR.PRIMARY_COLOR }
            : { backgroundColor: "#edeeef" }
        }
      >
        <Icon
          size={22}
          name={nameIcon}
          color={isLiked ? "#fff" : COLOR.POST_FOOTER_LIKE_AND_DISLIKE_COLOR}
        />
      </IconWrapper>
      <View style={{marginLeft: 10}}>
        <TextWrapper>{count}</TextWrapper>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  likeContaier: {
    /* width: 60, */
    flexDirection: "row",
    /* justifyContent: "space-between", */
    alignItems: "center",
  },
});

export default Counter;
