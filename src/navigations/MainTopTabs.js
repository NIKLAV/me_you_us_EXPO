import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../screens/Home/Home";
import GeneralSettings from "../screens/Settings/GeneralSettings";
import Wallet from "../screens/Wallet/Wallet";
import Chat from "../screens/Chat/Chat";
import Notification from "../screens/Notification/Notification";
import AllFriends from "../screens/MyFriends/AllFriends";
import MainTopTabBar from "../components/MainTopTabBar";

const Tab = createMaterialTopTabNavigator();

const MainTopTabs = () => {
  return (
    <Tab.Navigator tabBar={(props) => <MainTopTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="AllFriends" component={AllFriends} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="GeneralSettings" component={GeneralSettings} />
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
};

export default MainTopTabs;
