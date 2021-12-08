import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Dashboard from '../screens/Dashboard/Dashboard'
import Map from '../screens/Dashboard/Map'
import Account from '../screens/Account/Account'
import Edit from '../screens/Account/Edit'
import LoginScreen from '../screens/LoginScreen'
import RegistrationScreen from '../screens/RegistrationScreen'
import SafetyNets from '../screens/SafetyNets/SafetyNets'
import SingleSafetyNet from '../screens/SafetyNets/SingleSafetyNet'
import { Type } from '../screens/Reports/Type'
import { Time } from '../screens/Reports/Time'
import { Comments } from '../screens/Reports/Comments'

const Stack = createStackNavigator()

export function User() {
  console.log('IN THE USER STACK')
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
      />

      <Stack.Screen
        name="Map"
        component={Map}
      />

      {/* Account Screens */}

      <Stack.Screen
        name="Account"
        component={Account}
      />

      <Stack.Screen
        name="Edit Account"
        component={Edit}
      />
      <Stack.Screen
        name="Type"
        component={Type}
      />
      <Stack.Screen
        name="Time"
        component={Time}
      />
      <Stack.Screen
        name="Comments"
        component={Comments}
      />

      {/* Safety Nets */}
      <Stack.Screen
        name="Safety Nets"
        component={SafetyNets}
      />
      <Stack.Screen
        name="Safety Net"
        component={SingleSafetyNet}
      />

      {/* Login + SignUp */}
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        name="Registration"
        component={RegistrationScreen}
      />
    </Stack.Navigator>
  )
}

export function Guest() {
  console.log('IN THE GUEST STACK')
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        name="Registration"
        component={RegistrationScreen}
      />
    </Stack.Navigator>
  )
}
