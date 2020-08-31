import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import Login from '../screens/Auth/Login';
import Welcome from '../screens/Auth/Welcome';
import SignUp from '../screens/Auth/SignUp';

const Stack = createStackNavigator();
const AuthStack = () => {
  const navigationOptions = {
    gestureEnabled: false,
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: 'normal',
        },
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        component={Welcome}
        name="Welcome"
      />
      <Stack.Screen
        options={{headerTitle: 'Log in'}}
        component={Login}
        name="Login"
      />
      <Stack.Screen component={SignUp} name="SignUp" />
      <Stack.Screen component={ForgotPassword} name="ForgotPassword" />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
