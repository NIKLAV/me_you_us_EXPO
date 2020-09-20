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
import Requests from "../screens/MyFriends/Requests";
import Advertisement from "../screens/Settings/Advertisiment";
import Security from "../screens/Settings/Security";
import ChatWithBro from "../screens/Chat/ChatWithBro";
import { MARGIN } from "../constants";

const Tab = createMaterialTopTabNavigator();
const SetingsStack = createStackNavigator();
const FriendsStack = createStackNavigator();
const ChatStack = createStackNavigator();

const Settings = () => {
  return (
    <SetingsStack.Navigator
      screenOptions={{ headerShown: false, animationEnabled: false }}
    >
      <SetingsStack.Screen name="GeneralSettings" component={GeneralSettings} />
      <SetingsStack.Screen name="Advertisement" component={Advertisement} />
      <SetingsStack.Screen name="Security" component={Security} />
    </SetingsStack.Navigator>
  );
};

const MyFriends = () => {
  return (
    <FriendsStack.Navigator
      screenOptions={{ headerShown: false, animationEnabled: false }}
    >
      <FriendsStack.Screen name="Requests" component={Requests} />
      <FriendsStack.Screen name="AllFriends" component={AllFriends} />
    </FriendsStack.Navigator>
  );
};

/* export const ChatScreens = () => {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        options={{ headerShown: false }}
        name="Chat"
        component={Chat}
      />
      <ChatStack.Screen
        options={{ headerStyle: { marginTop: MARGIN.DEFAULT_MARGIN_VERTICAL } }}
        name="ChatWithBro"
        component={ChatWithBro}
      />
    </ChatStack.Navigator>
  );
}; */

const MainTopTabs = () => {
  return (
    <Tab.Navigator
      swipeEnabled={false}
      tabBar={(props) => <MainTopTabBar {...props} />}
      lazy
      /* removeClippedSubviews */
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="MyFriends" component={MyFriends} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
};

export default MainTopTabs;
