import React from "react";
import { StyleSheet, Text } from "react-native";
import MyFriendsWrapper from "../../components/MyFriends/MyFriendsWrapper";
import Request from "../../components/MyFriends/Request";

import { COLOR } from "../../constants";

const Requests = () => {
  return (
    <MyFriendsWrapper>
      <Request />
    </MyFriendsWrapper>
  );
};


export default Requests;
