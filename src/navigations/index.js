import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home/Home";
import MainTopTabs from "./MainTopTabs";

const RootStack = createStackNavigator();
const isAuth = false;
const AllNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuth ? (
          <RootStack.Screen name="Auth" component={AuthStack} />
        ) : (
          <RootStack.Screen name="MainTopTabs" component={MainTopTabs} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AllNavigation;
