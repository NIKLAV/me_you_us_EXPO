import React from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import CameraIcon from "react-native-vector-icons/MaterialCommunityIcons";
import RoundPhoto from "../../common/RoundPhoto";
import { COLOR, width } from "../../../constants";

const AddingPostField = () => {
  return (
    <View style={styles.container}>
      <View>
        <RoundPhoto
          url={
            "https://vignette.wikia.nocookie.net/zlodei/images/9/98/Ph28.jpeg/revision/latest/top-crop/width/360/height/450?cb=20140629112400&path-prefix=ru"
          }
          size={50}
        />
      </View>
      <View style={styles.input}>
        <TextInput />
      </View>
      <TouchableOpacity activeOpacity={0.7} style={styles.camera}>
        <CameraIcon size={25} name="camera-plus" color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-evenly',
    backgroundColor: COLOR.BACK_MAIN_TOP_TABBAR_COLOR,
  },
  camera: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#7dcfff",
  },
  input: {
      width: width - 150,
      height: 42,
      backgroundColor: COLOR.INPUT_COLOR,
      borderRadius: 25,
      borderWidth: 1,
      borderColor: COLOR.INPUT_COLOR,
  }
});

export default AddingPostField;
