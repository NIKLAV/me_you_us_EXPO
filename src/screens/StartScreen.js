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
    console.warn('effect')
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem("userData");
      if (!userData) {
        navigation.navigate("Auth");
        return;
      }
      const transformedData = JSON.parse(userData);
      const { token, time } = transformedData;
      const expirationDate = new Date(time);
     
      if (expirationDate <= new Date() || !token) {
        delete axios.defaults.headers.common.Authorization;
        navigation.navigate("Auth");
        return;
      }

      navigation.navigate("MainTopTabs");
      dispatch(authenticate(token));
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
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
