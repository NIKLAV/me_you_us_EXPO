import React from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import CameraIcon from "react-native-vector-icons/MaterialCommunityIcons";
import RoundPhoto from "../../common/RoundPhoto";
import { COLOR, width } from "../../../constants";
import MessageInput from "../../common/MessageInput";
import IconWrapper from "../../common/IconWrapper";

const AddingPostField = () => {
  return (
    <View style={styles.container}>
      <View>
        <RoundPhoto
          url={
            "https://vignette.wikia.nocookie.net/zlodei/images/9/98/Ph28.jpeg/revision/latest/top-crop/width/360/height/450?cb=20140629112400&path-prefix=ru"
          }
          size={42}
        />
      </View>
      <MessageInput placeholder='What’s new?'/>
      <IconWrapper activeOpacity={0.7}  style={{backgroundColor: "#7dcfff"}}>
        <CameraIcon size={22} name="camera-plus" color="#fff" />
      </IconWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    backgroundColor: COLOR.BACK_MAIN_TOP_TABBAR_COLOR,
  },
  
});

export default AddingPostField;
