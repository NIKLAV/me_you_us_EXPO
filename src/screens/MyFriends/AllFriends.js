import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import BottomSheet from "../../components/MyFriends/BottomSheet";
import Friend from "../../components/MyFriends/Friend";
import MyFriendsWrapper from "../../components/MyFriends/MyFriendsWrapper";

import { COLOR } from "../../constants";

const AllFriends = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <MyFriendsWrapper>
      <Friend />
      <Friend />
      {isOpen && <BottomSheet />}
    </MyFriendsWrapper>
  );
};

const styles = StyleSheet.create({});

export default AllFriends;
