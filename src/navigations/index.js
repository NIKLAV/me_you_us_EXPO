import React from "react";
import {
  NavigationContainer,
  useNavigationState,
} from "@react-navigation/native";
import AuthStack from "./AuthStack";
import { createStackNavigator } from "@react-navigation/stack";
import MainTopTabs from "./MainTopTabs";
import { useSelector } from "react-redux";
import StartScreen from "../screens/StartScreen";
import { navigationRef } from "../services/helpers";

const RootStack = createStackNavigator();

const AllNavigation = () => {
  const token = useSelector((state) => !!state.auth.token);
  console.warn("token in state", token);
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        <RootStack.Screen name="StartScreen" component={StartScreen} />
        <RootStack.Screen name="Auth" component={AuthStack} />
        <RootStack.Screen name="MainTopTabs" component={MainTopTabs} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AllNavigation;
