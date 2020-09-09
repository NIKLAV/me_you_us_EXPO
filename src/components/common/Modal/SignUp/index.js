import React, { useState } from "react";
import {
  View,
  Modal,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import CloseIcon from "react-native-vector-icons/Fontisto";
import { COLOR, height, width } from "../../../../constants";
import * as types from '../../../../redux/types'



const ModalSignup = ({visible}) => {
  const dispatch = useDispatch()
  const toogleModal = () => {
    dispatch({type: types.AUTH_SIGNUP_CLOSE_MODAL})
  };
  return (
    <Modal transparent={true} visible={visible} animationType={"slide"}>
      <View style={styles.container}>
        <TouchableOpacity onPress={toogleModal} style={styles.icon}>
          <CloseIcon name="close-a" color="#fff" size={20} />
        </TouchableOpacity>
        <View>
          <Image source={require("../../../../assets/img/modal/ok.png")} />
        </View>
        <View>
          <Text style={styles.text}>Check your email</Text>
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
