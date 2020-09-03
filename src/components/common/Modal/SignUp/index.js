import React, { useState } from "react";
import {
  View,
  Modal,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import CloseIcon from "react-native-vector-icons/Fontisto";
import { COLOR, height, width } from "../../../../constants";

const ModalSignup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toogleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Modal transparent={true} visible={isOpen} animationType={"slide"}>
      <View style={styles.container}>
        <TouchableOpacity onPress={toogleModal} style={styles.icon}>
          <CloseIcon name="close-a" color="#fff" size={20} />
        </TouchableOpacity>
        <View>
          <Image source={require("../../../../assets/img/modal/ok.png")} />
        </View>
        <View>
          <Text style={styles.text}>Registration completed successfully</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: height / 2 - height / 7,
    height: height / 3,
    width: width - 70,
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: COLOR.SUCCESS_COLOR,
  },
  icon: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default ModalSignup;
