import React from "react";
import CameraIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IconWrapper from "../IconWrapper";

const CameraButton = () => {
  return (
    <IconWrapper activeOpacity={0.7} style={{ backgroundColor: "#7dcfff" }}>
      <CameraIcon size={22} name="camera-plus" color="#fff" />
    </IconWrapper>
  );
};

export default CameraButton;
