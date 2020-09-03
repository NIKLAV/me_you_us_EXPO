import React, { useState, useEffect } from "react";
import { NavigationContainer, useNavigationState } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import { createStackNavigator } from "@react-navigation/stack";
import MainTopTabs from "./MainTopTabs";
import { useSelector } from "react-redux";
import StartScreen from "../screens/StartScreen";

const RootStack = createStackNavigator();

const AllNavigation = () => {
  
  return (
    <NavigationContainer>
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
