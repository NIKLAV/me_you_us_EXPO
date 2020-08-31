import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import {createStackNavigator} from '@react-navigation/stack';
import Newsfeed from '../screens/Newsfeed/Newsfeed';

const RootStack = createStackNavigator();

const AllNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Auth" component={AuthStack} />
        <RootStack.Screen name="Newsfeed" component={Newsfeed} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AllNavigation;


