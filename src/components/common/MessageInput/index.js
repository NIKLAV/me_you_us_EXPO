import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import TelegaIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import { width, COLOR } from "../../../constants";
import { createNewFeed } from "../../../redux/feed/actions";

const MessageInput = ({ placeholder, onChangeText, value }) => {
  /* const handleAddPost = () => {
    if (messagePost.message !== '') {
      dispatch(addFeed(messagePost))
        .then(() => dispatch(getFeeds()))
        .then(() => dispatch(getProfileFeeds(currentUser?.id)))
        .then(() => setMessagePost({ message: '' }))
    }
  }
 */
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const onPress = () => {
    if (text.trim().length === 0) {
      return;
    }
    dispatch(createNewFeed({ message: text }));
    setText('')
  };
  return (
    <View style={styles.input}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder={placeholder}
      />
      <TouchableOpacity onPress={onPress}>
        <TelegaIcon size={25} color="#93969e" name="telegram" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: width - 110,
    height: 42,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: COLOR.INPUT_COLOR,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLOR.INPUT_COLOR,
  },
});

export default MessageInput;
