import React from "react";
import { View, StyleSheet } from "react-native";
import TelegaIcon from "react-native-vector-icons/MaterialCommunityIcons";
import PlusIcon from "react-native-vector-icons/FontAwesome5";
import EllepsisIcon from "react-native-vector-icons/FontAwesome5";
import { COLOR, width } from "../../../constants";
import CustomButton from "../../common/Button";
import IconWrapper from "../../common/IconWrapper";

const BlockWithButtons = () => {
  return (
    <View style={styles.buttonContainer}>
      <CustomButton
        icon
        styleButton={styles.messageButton}
        text="Send a message"
        styleText={styles.textMessageButton}
      >
        <TelegaIcon color="#fff" size={22} name="telegram" />
      </CustomButton>
      <CustomButton
        styleText={styles.textUnfollowButton}
        text="Unfolow"
        styleButton={styles.unfollowButton}
        icon
      >
        <PlusIcon name="plus" color="#9c9fa6" size={19} />
      </CustomButton>
      <IconWrapper style={styles.ellipsButton}>
        <EllepsisIcon name="ellipsis-h" size={22} color="#fff" />
      </IconWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  messageButton: {
    width: width / 2.34,
    backgroundColor: COLOR.POST_FOOTER_TELEGA_AND_SHARE_COLOR,
  },
  textMessageButton: {
    marginLeft: 30,
    fontSize: 14,
  },
  unfollowButton: {
    height: 42,
    width: width / 3,
    borderColor: "#dadbdb",
    borderWidth: 0.7,
  },
  textUnfollowButton: {
    color: "#9c9fa6",
    marginLeft: 30,
    fontSize: 14,
  },
  ellipsButton: {
    backgroundColor: COLOR.PRIMARY_COLOR,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width - 10,
  },
});

export default BlockWithButtons;
