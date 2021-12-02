import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../screens/Dashboard/Dashboard";
import Map from "../screens/Dashboard/Map";
const Stack = createStackNavigator();

export default function AuthStack() {
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
    </Stack.Navigator>
  );
}