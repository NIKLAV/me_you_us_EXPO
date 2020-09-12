import React from "react";
import HomeIcon from "react-native-vector-icons/FontAwesome";
import SettingsIcon from "react-native-vector-icons/FontAwesome5";
import AllFriendsIcon from "react-native-vector-icons/FontAwesome5";
import NotificationIcon from "react-native-vector-icons/Fontisto";
import WalletIcon from "react-native-vector-icons/Fontisto";
import ChatIcon from "react-native-vector-icons/Ionicons";
import LogoutIcon from "react-native-vector-icons/FontAwesome";
import { COLOR, TOP_ICON_SIZE } from "../../constants";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { logout } from "../../redux/auth/actions";
import { useDispatch } from "react-redux";

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
      <TouchableWithoutFeedback onPress={onPress} style={styles.icon}>
        {name === "Home" ? (
          <HomeIcon name="home" color={color} size={25} />
        ) : name === "Settings" ? (
          <SettingsIcon name="user-edit" color={color} size={20} />
        ) : name === "MyFriends" ? (
          <AllFriendsIcon name="user-alt" color={color} size={20} />
        ) : name === "Notification" ? (
          <NotificationIcon name="bell-alt" color={color} size={20} />
        ) : name === "Wallet" ? (
          <WalletIcon name="credit-card" color={color} size={18} />
        ) : name === "Chat" ? (
          <ChatIcon name="ios-chatbubbles" color={color} size={23} />
        ) : name === "Logout" ? (
          <LogoutIcon name="power-off" color={color} size={23} />
        ) : null}
      </TouchableWithoutFeedback>
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
