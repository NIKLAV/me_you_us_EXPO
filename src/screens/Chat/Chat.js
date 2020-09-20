import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ChatItem from "../../components/Chat/ChatItem";
import TextWrapper from "../../components/common/TextWrapper";
import { containerWidth, MARGIN, width } from "../../constants";
import { getMyChats } from "../../redux/chats/actions";

const Chat = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyChats());
  }, []);

  const data = useSelector((state) => state.chats.data);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TextWrapper>Chat</TextWrapper>
        </View>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => (
            <ChatItem
              id={item.id}
              lastMessageInfo={item.last_massage}
              partner={item.partner}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: width,
    backgroundColor: "#fff",
    marginTop: MARGIN.DEFAULT_MARGIN_VERTICAL,
  },
  container: {
    alignSelf: "center",
  },
  header: {
    paddingVertical: 20,
    backgroundColor: "#fff",
    width: containerWidth,
    alignSelf: "center",
  },
});

export default Chat;
