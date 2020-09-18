import React from "react";
import { Animated, StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import DeleteIcon from "react-native-vector-icons/FontAwesome";
import { useDispatch } from "react-redux";
import { COLOR, height, width } from "../../../constants";
import { deleteMyChat } from "../../../redux/chats/actions";

const ChatItemSeparator = ({ children, id }) => {
  const dispatch = useDispatch();

  const onPressDeleteChat = () => {
    dispatch(deleteMyChat(id));
  };

  const DeleteChat = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    return (
      <TouchableOpacity
        onPress={onPressDeleteChat}
        style={styles.delete}
        activeOpacity={0.8}
      >
        <Animated.Text style={{ transform: [{ scale }] }}>
          <DeleteIcon name="close" size={22} color={"#fff"} />
        </Animated.Text>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={DeleteChat}>
      <View style={styles.separator}>{children}</View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  separator: {
    width: width,
    borderTopWidth: 0.8,
    borderColor: COLOR.CHAT_SEPARATOR_COLOR,
  },
  delete: {
    width: width / 4,
    height: height / 8,
    backgroundColor: COLOR.POST_FOOTER_TELEGA_AND_SHARE_COLOR,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChatItemSeparator;
