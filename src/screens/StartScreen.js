import React, { useEffect } from "react";
import { View, Text, StatusBar, Image } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { useDispatch } from "react-redux";
import { authenticate } from "../redux/auth/actions";
import { COLOR } from "../constants";
import axios from "axios";

const StartScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.warn("effect");
    const tryLogin = async () => {
      const token = await AsyncStorage.getItem("MYUtoken");
      const time = await AsyncStorage.getItem("expirationTime");
      console.warn('token i efect', token)
      if (!token) {
        
        delete axios.defaults.headers.common.Authorization;
        navigation.navigate("Auth");
        return;
      }

      const expirationDate = new Date(JSON.parse(time));
      console.warn(expirationDate, new Date())

      if (expirationDate <= new Date() || !token) {
        
        delete axios.defaults.headers.common.Authorization;
        navigation.navigate("Auth");
        return;
      }
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      navigation.navigate("MainTopTabs");
      dispatch(authenticate(token));
      
    };
    tryLogin();
  }, [dispatch]); 

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLOR.PRIMARY_COLOR,
      }}
    >
      <StatusBar hidden />
      <Image
        style={{ width: 40, height: 40 }}
        source={require("../assets/img/start/logo.png")}
      />
    </View>
  );
};

export default StartScreen;
