import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from '../screens/LoginScreen/LoginScreen'
import RegistrationScreen from '../screens/RegistrationScreen/RegistrationScreen'

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
    </Stack.Navigator>
  );
}
