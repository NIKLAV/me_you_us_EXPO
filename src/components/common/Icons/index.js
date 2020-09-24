import React from "react";
import { TouchableOpacity } from "react-native";
import CameraIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/FontAwesome5";
import IconWrapper from "../IconWrapper";

const CameraButton = () => {
  return (
    <IconWrapper activeOpacity={0.7} style={{ backgroundColor: "#7dcfff" }}>
      <CameraIcon size={22} name="camera-plus" color="#fff" />
    </IconWrapper>
  );
};

export default CameraButton;

export const OpenModalButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="ellipsis-h" size={22} color={"#b1b3b7"} />
    </TouchableOpacity>
  );
};
