import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home/Home";
import GeneralSettings from "../screens/Settings/GeneralSettings";
import Wallet from "../screens/Wallet/Wallet";
import Chat from "../screens/Chat/Chat";
import Notification from "../screens/Notification/Notification";
import AllFriends from "../screens/MyFriends/AllFriends";
import MainTopTabBar from "../components/MainTopTabBar";

import Advertisement from "../screens/Settings/Advertisiment";
import Security from "../screens/Settings/Security";
import AuthStack from "./AuthStack";

const Tab = createMaterialTopTabNavigator();
const SetingsStack = createStackNavigator();

const Settings = () => {
  return (
    <SetingsStack.Navigator screenOptions={{ headerShown: false }}>
      <SetingsStack.Screen
        options={{ animationEnabled: false }}
        name="GeneralSettings"
        component={GeneralSettings}
      />
      <SetingsStack.Screen
        options={{ animationEnabled: false }}
        name="Advertisement"
        component={Advertisement}
      />
      <SetingsStack.Screen
        options={{ animationEnabled: false }}
        name="Security"
        component={Security}
      />
    </SetingsStack.Navigator>
  );
};

const MainTopTabs = () => {
  return (
    <Tab.Navigator
      swipeEnabled={false}
      tabBar={(props) => <MainTopTabBar {...props} />}
    >
      <Tab.Screen  name="Home" component={Home} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="AllFriends" component={AllFriends} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
};

export default MainTopTabs;
