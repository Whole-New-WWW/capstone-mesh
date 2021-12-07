import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Dashboard from '../screens/Dashboard/Dashboard'
import Map from '../screens/Dashboard/Map'
import { Account } from '../screens/Account/Account'
import { Edit } from '../screens/Account/Edit'
import LoginScreen from '../screens/LoginScreen'
import RegistrationScreen from '../screens/RegistrationScreen'
import SafetyNets from '../screens/SafetyNets/SafetyNets'
import SingleSafetyNet from '../screens/SafetyNets/SingleSafetyNet'
import { Type } from '../screens/Reports/Type'
import { Time } from '../screens/Reports/Time'
import { Comments } from '../screens/Reports/Comments'

const Stack = createStackNavigator()

export function User(props) {
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

      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Edit Account"
        component={Edit}
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

      {/* Login + SignUp */}
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
    </Stack.Navigator>
  )
}

export function Guest() {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  )
}
