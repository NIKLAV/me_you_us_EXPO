import React from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Platform,
} from "react-native";
import { useSelector } from "react-redux";
import ChatFooter from "../../components/Chat/ChatFooter";
import PartnerMessage from "../../components/Chat/PartnerMessage";
import YouMessage from "../../components/Chat/YouMessage";
import {
  CHAT_CONTAINER_WIDTH,
  containerWidth,
  height,
  MARGIN,
  width,
} from "../../constants";

const ChatWithBro = () => {
  const data = useSelector((state) => state.chats.messages);
  const myId = useSelector((state) => state.account.id);

  const checkMessage = (item) => {
    if (item.author.id === myId) {
      return (
        <YouMessage
          date={item.date}
          message={item.message}
          url={item.author.avatar.url}
        />
      );
    }
    return (
      <PartnerMessage
        date={item.date}
        message={item.message}
        url={item.author.avatar.url}
      />
    );
  };

  const HeaderSeparator = () => {
    return <View style={styles.separator}></View>;
  };

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
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => checkMessage(item)}
          ListHeaderComponent={HeaderSeparator}
          data={data}
        />
        <ChatFooter />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {},
  separator: {
    height: MARGIN.DEFAULT_MARGIN_VERTICAL,
    width: width,
    backgroundColor: "#efefef",
  },
});

export default ChatWithBro;
