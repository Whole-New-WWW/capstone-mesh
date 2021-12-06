import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../screens/Dashboard/Dashboard";
import Map from "../screens/Dashboard/Map";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen/RegistrationScreen";
import SafetyNets from '../screens/SafetyNets/SafetyNets';
import SingleSafetyNet from "../screens/SafetyNets/SingleSafetyNet";
import { Type } from "../screens/Reports/Type";
import { Time } from "../screens/Reports/Time";
import { Comments } from "../screens/Reports/Comments";
const Stack = createStackNavigator();

export default function User() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        options={{
          headerShown: false,
        }}
      >
        {(props) => <Dashboard {...props} />}
      </Stack.Screen>

      <Stack.Screen
        name="Map"
        component={Map}
        options={{
          headerShown: false,
        }}
      />

      {/* Report Screen */}
      <Stack.Screen
        name="Type"
        component={Type}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Time"
        component={Time}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Comments"
        component={Comments}
        options={{
          headerShown: false,
        }}
      />

      {/* Login/Signup */}
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{
          headerShown: false,
        }}
      />

      {/* Safety Nets */}
      <Stack.Screen
        name="Safety Nets"
        component={SafetyNets}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Safety Net"
        component={SingleSafetyNet}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
