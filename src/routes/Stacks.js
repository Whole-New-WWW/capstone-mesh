import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Dashboard from '../screens/Dashboard/Dashboard'
import Map from '../screens/Dashboard/Map'
import Account from '../screens/Account/Account'
import Edit from '../screens/Account/Edit'
import History from '../screens/Account/History'
import LoginScreen from '../screens/LoginScreen'
import RegistrationScreen from '../screens/RegistrationScreen'
import SafetyNets from '../screens/SafetyNets/SafetyNets'
import SingleSafetyNet from '../screens/SafetyNets/SingleSafetyNet'
import { Form } from '../screens/Reports/Form'

import { Colors } from '../../styles'

// Color imports
const { navy, lavender, light } = Colors

const Stack = createStackNavigator()

export function MapNavigator() {
  console.log('SWAPPED TO MAP NAV')
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: `${light}`,
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
  console.log('SWAPPED TO PROFILE NAV')
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: `${light}`,
        },
        headerTintColor: `${navy}`,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="Account" component={Account} options={{ title: 'Profile' }} />
      <Stack.Screen name="Edit" component={Edit} options={{ title: 'Edit Profile' }} />
      <Stack.Screen name="History" component={History} options={{ title: 'SOS History' }} />
    </Stack.Navigator>
  )
}

export function SafetyNetsNavigator() {
  console.log('SWAPPED TO SAFETY NET NAV')
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: `${light}`,
        },
        headerTintColor: `${navy}`,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="Safety Nets" component={SafetyNets} />
      <Stack.Screen name="Safety Net" component={SingleSafetyNet} />
    </Stack.Navigator>
  )
}

export function ReportNavigator() {
  console.log('SWAPPED TO REPORT STACK')
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: `${light}`,
        },
        headerTintColor: `${navy}`,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="Reports" component={Form} />
    </Stack.Navigator>
  )
}

export default function LoginNavigator() {
  console.log('IN THE GUEST STACK')
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
    </Stack.Navigator>
  )
}
