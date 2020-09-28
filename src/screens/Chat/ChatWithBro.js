import React, { useEffect, useRef } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Platform,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import ChatFooter from "../../components/Chat/ChatFooter";
import PartnerMessage from "../../components/Chat/PartnerMessage";
import YouMessage from "../../components/Chat/YouMessage";
import HeaderSeparator from "../../components/common/HeaderSeparator";
import Preloader from "../../components/common/Preloader";
import { height, MARGIN, width } from "../../constants";

const ChatWithBro = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.chats.messages);
  const loading = useSelector((state) => state.chats.loadingGettingMessages);
  const myId = useSelector((state) => state.account.id);
  const chatId = useSelector((state) => state.chats.currentPartner.thread_id);
  const socketConnected = useSelector((state) => state.socket.socketConnected);
  console.warn("socketConnected", socketConnected);

  const flatList = useRef(null);

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

  useEffect(() => {
    if (socketConnected && chatId) {
      dispatch({ type: "SUBSCRIBE", payload: [5, `threads.${chatId}`] });
    }

    return () => {
      if (socketConnected && chatId) {
        dispatch({ type: "UNSUBSCRIBE", payload: [6, `threads.${chatId}`] });
      }
    };
  }, []);

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
              inverted
              ref={flatList}
              keyExtractor={(message) => message.id.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => checkMessage(item)}
              ListFooterComponent={HeaderSeparator}
              data={data}
              /* onContentSizeChange={() => flatList.current.scrollToEnd({animated: true})} */
            />
            <ChatFooter />
          </>
        ) : (
          <Preloader />
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height - 30 - MARGIN.DEFAULT_MARGIN_VERTICAL - 34,
  },
});

export default ChatWithBro;
