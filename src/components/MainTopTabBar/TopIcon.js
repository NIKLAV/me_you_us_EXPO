import React from "react";
import HomeIcon from "react-native-vector-icons/FontAwesome";
import SettingsIcon from "react-native-vector-icons/FontAwesome5";
import AllFriendsIcon from "react-native-vector-icons/FontAwesome5";
import NotificationIcon from "react-native-vector-icons/Fontisto";
import WalletIcon from "react-native-vector-icons/Fontisto";
import ChatIcon from "react-native-vector-icons/Ionicons";
import LogoutIcon from "react-native-vector-icons/FontAwesome";
import { COLOR, TOP_ICON_SIZE, width } from "../../constants";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { logout } from "../../redux/auth/actions";
import { useDispatch } from "react-redux";
import TopIndicator from "./TopIndicator";

const TopIcon = ({ isFocused, name }) => {
  const dispatch = useDispatch();
  const color = isFocused ? COLOR.PRIMARY_COLOR : COLOR.TOP_ICONS_COLOR;
  const navigation = useNavigation();
  const onPress = () => {
    if (name === "Logout") {
      dispatch(logout());
      /*  navigation.navigate("Auth"); */
    } else navigation.navigate(name);
  };
  return (
    <>
      {name === "Home" ? (
        <TouchableWithoutFeedback onPress={onPress} style={styles.icon}>
          <HomeIcon name="home" color={color} size={25} />
        </TouchableWithoutFeedback>
      ) : name === "Settings" ? (
        <TouchableWithoutFeedback onPress={onPress} style={styles.icon}>
          <SettingsIcon name="user-edit" color={color} size={20} />
        </TouchableWithoutFeedback>
      ) : name === "MyFriends" ? (
        <TouchableWithoutFeedback onPress={onPress} style={styles.icon}>
          <AllFriendsIcon name="user-alt" color={color} size={20} />
        </TouchableWithoutFeedback>
      ) : name === "Notification" ? (
        <TouchableWithoutFeedback onPress={onPress} style={styles.icon}>
          <NotificationIcon name="bell-alt" color={color} size={20} />
        </TouchableWithoutFeedback>
      ) : name === "Wallet" ? (
        <TouchableWithoutFeedback onPress={onPress} style={styles.icon}>
          <WalletIcon name="credit-card" color={color} size={18} />
        </TouchableWithoutFeedback>
      ) : name === "Chat" ? (
        <>
          <TopIndicator left={{left: width - 112,}} count={3} />
          <TouchableWithoutFeedback onPress={onPress} style={styles.icon}>
            <ChatIcon name="ios-chatbubbles" color={color} size={23} />
          </TouchableWithoutFeedback>
        </>
      ) : name === "Logout" ? (
        <TouchableWithoutFeedback onPress={onPress} style={styles.icon}>
          <LogoutIcon name="power-off" color={color} size={23} />
        </TouchableWithoutFeedback>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: TOP_ICON_SIZE,
    width: TOP_ICON_SIZE,
    padding: 8,
    borderWidth: 1,
    borderRadius: TOP_ICON_SIZE / 2,
    borderColor: "#e8e9e9",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TopIcon;
