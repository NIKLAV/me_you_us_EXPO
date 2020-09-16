import React, { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import TeletaIcon from "react-native-vector-icons/MaterialCommunityIcons";
import BlockIcon from "react-native-vector-icons/FontAwesome5";
import DeleteIcon from "react-native-vector-icons/FontAwesome5";
import CustomButton from "../../components/common/Button";
import RoundPhoto from "../../components/common/RoundPhoto";
import TextWrapper from "../../components/common/TextWrapper";
import BottomSheet from "../../components/MyFriends/BottomSheet";
import Friend from "../../components/MyFriends/Friend";
import MyFriendsWrapper from "../../components/MyFriends/MyFriendsWrapper";

import { COLOR, containerWidth, height, width } from "../../constants";
import { closeModalInFriends } from "../../redux/modal/actions";

const AllFriends = () => {
  const dispatch = useDispatch();
  const isOpenInFriends = useSelector((state) => state.modal.isOpenInFriends);
  
  const modalRef = useRef();
  return (
    <MyFriendsWrapper>
      <Friend openSettings={() => modalRef.current.open()} />
      <BottomSheet isOpen={isOpenInFriends} dispatchToClose={closeModalInFriends} ref={modalRef}>
        <View style={styles.containerPhotoAndText}>
          <RoundPhoto
            url={"https://i.ytimg.com/vi/vNRtqcpz5xY/maxresdefault.jpg"}
            size={65}
          />
          <View style={styles.nameAndDateContainer}>
            <TextWrapper>Vasiliy PupilSd</TextWrapper>
            <TextWrapper style={{ fontSize: 14, color: "#b9bcc4" }}>
              Friends from 2020
            </TextWrapper>
          </View>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.buttonContainer}>
          <CustomButton
            text="Write to Vasiliy "
            styleButton={styles.telegabuttonStyle}
            icon
          >
            <TeletaIcon color="#fff" size={24} name="telegram" />
          </CustomButton>
          <CustomButton
            styleText={styles.textStyleButton}
            text="Block Vasiliy "
            styleButton={styles.defaultButtonStyle}
            icon
          >
            <BlockIcon
              color={COLOR.MYFRIENDS_ICONS_AND_BUTTON_TEXT_COLOR}
              size={18}
              name="user-lock"
            />
          </CustomButton>
          <CustomButton
            styleText={styles.textStyleButton}
            text="Remove Vasiliy from friends"
            styleButton={styles.defaultButtonStyle}
            icon
          >
            <DeleteIcon
              color={COLOR.MYFRIENDS_ICONS_AND_BUTTON_TEXT_COLOR}
              size={18}
              name="user-times"
            />
          </CustomButton>
        </View>
      </BottomSheet>
    </MyFriendsWrapper>
  );
};

const styles = StyleSheet.create({
  containerPhotoAndText: {
    marginTop: 30,
    width: containerWidth,
    flexDirection: "row",
    alignItems: "center",
    /*   borderBottomColor: COLOR.MYFRIENDS_SEPARATOR_COLOR,
    borderBottomWidth: 1, */
    alignSelf: "center",
  },
  nameAndDateContainer: {
    marginLeft: 30,
    justifyContent: "space-between",
    height: 50,
  },
  separator: {
    marginTop: 20,
    width: width,
    borderBottomColor: COLOR.MYFRIENDS_SEPARATOR_COLOR,
    borderBottomWidth: 1,
  },
  telegabuttonStyle: {
    paddingHorizontal: 10,
    width: containerWidth,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: COLOR.POST_FOOTER_TELEGA_AND_SHARE_COLOR,
  },
  defaultButtonStyle: {
    paddingHorizontal: 10,
    width: containerWidth,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderColor: "#e0e0e0",
    borderBottomWidth: 0.7,
    borderTopWidth: 0.7,
    borderLeftWidth: 0.7,
    borderRightWidth: 0.7,
  },
  textStyleButton: {
    textAlign: "center",
    color: COLOR.MYFRIENDS_ICONS_AND_BUTTON_TEXT_COLOR,
  },
  buttonContainer: {
    marginTop: height / 25,
    height: height / 4,
    justifyContent: "space-between",
  },
});

export default AllFriends;
