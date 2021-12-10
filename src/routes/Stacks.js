import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Map from '../screens/Dashboard/Map'
import Account from '../screens/Account/Account'
import Edit from '../screens/Account/Edit'
import History from '../screens/Account/History'
import LoginScreen from '../screens/LoginScreen'
import RegistrationScreen from '../screens/RegistrationScreen'
import SafetyNets from '../screens/SafetyNets/SafetyNets'
import SingleSafetyNet from '../screens/SafetyNets/SingleSafetyNet'
import Comments from '../screens/Reports/Comments'
import ContactList from '../screens/ContactList/ContactList'

import { Colors } from '../../styles'

// Color imports
const { navy, lavender, light } = Colors

const Stack = createStackNavigator()

export function MapNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: `${light}`,
          height: 125,
        },
        headerTintColor: `${navy}`,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  )
}

export function ProfileNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: `${light}`,
          height: 125,
        },
        headerTintColor: `${navy}`,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Account"
        component={Account}
        options={{ title: 'Profile' }}
      />
      <Stack.Screen
        name="Edit"
        component={Edit}
        options={{ title: 'Edit Profile' }}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{ title: 'SOS History' }}
      />
    </Stack.Navigator>
  )
}

export function SafetyNetsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: `${light}`,
          height: 125,
        },
        headerTintColor: `${navy}`,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="Safety Nets" component={SafetyNets} />
      <Stack.Screen name="Safety Net" component={SingleSafetyNet} />
      <Stack.Screen name="Contact List" component={ContactList} />
    </Stack.Navigator>
  )
}

export function ReportNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: `${light}`,
          height: 125,
        },
        headerTintColor: `${navy}`,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Comments"
        component={Comments}
        options={{ title: 'Submit a Report' }}
      />
    </Stack.Navigator>
  )
}

export default function LoginNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
    </Stack.Navigator>
  )
}


