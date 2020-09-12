import React from "react";
import { StyleSheet, Text } from "react-native";
import Friend from "../../components/MyFriends/Friend";
import MyFriendsWrapper from "../../components/MyFriends/MyFriendsWrapper";

import { COLOR } from "../../constants";

const AllFriends = () => {
  return (
    <MyFriendsWrapper>
      <Friend/>
    </MyFriendsWrapper>
  );
};

const styles = StyleSheet.create({});

export default AllFriends;
