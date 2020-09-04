import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { exp } from "react-native-reanimated";
import PlusIcon from "react-native-vector-icons/FontAwesome";
import TextWrapper from "../../common/TextWrapper";

const PhotoPicker = ({ label, onPick }) => {
  const [img, setImg] = useState(null);

  let openImage = async () => {
    let premission = await ImagePicker.requestCameraRollPermissionsAsync();

    if (premission.granted === false) {
      return;
    }

    let picker = await ImagePicker.launchImageLibraryAsync();

    if (picker.cancelled === true) {
      return;
    }

    setImg({ localUri: picker.uri });
    onPick(picker.uri);
    console.warn(picker);
  };

  return (
    <>
      <TextWrapper style={styles.label}>{label}</TextWrapper>
      <TouchableOpacity
        onPress={openImage}
        activeOpacity={0.8}
        style={styles.container}
      >
        <View style={styles.picker}>
          <PlusIcon name="plus" color="#fff" size={18} />
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    textAlign: "center",
  },
  container: {
    width: 90,
    height: 90,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 45,
    backgroundColor: "rgba(233, 210, 251, 0.8)",
  },
  picker: {
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d2a2f6",
    borderRadius: 30,
  },
});

export default PhotoPicker;
