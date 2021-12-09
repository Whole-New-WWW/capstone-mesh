import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dashboard from '../screens/Dashboard/Dashboard'
import Map from '../screens/Dashboard/Map'
import Account from '../screens/Account/Account'
import Report from '../screens/Reports/Form'
import {
  ProfileNavigator,
  MapNavigator,
  SafetyNetsNavigator,
  ReportNavigator,
} from './Stacks'
import { NavIcon, Colors } from '../../styles'

// Color imports
const { navy, lavender, light } = Colors

const Tab = createBottomTabNavigator()

export default function MyTabs(props) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case 'Dashboard':
              return (
                <NavIcon
                  source={require('../../assets/icons/home.png')}
                  color={focused ? navy : lavender}
                />
              )
            case 'Account':
              return (
                <NavIcon
                  source={require('../../assets/icons/account.png')}
                  color={focused ? navy : lavender}
                />
              )
            case 'Map':
              return (
                <NavIcon
                  source={require('../../assets/icons/map.png')}
                  color={focused ? navy : lavender}
                />
              )
            case 'Reports':
              return (
                <NavIcon
                  source={require('../../assets/icons/addreport.png')}
                  color={focused ? navy : lavender}
                />
              )
            case 'Safety Nets':
              return (
                <NavIcon
                  source={require('../../assets/icons/friends.png')}
                  color={focused ? navy : lavender}
                />
              )
            default:
              return <></>
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: lavender,
        inactiveTintColor: light,
      }}
      initialRouteName="Home"
      swipeEnabled={false}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Account" component={ProfileNavigator} />
      <Tab.Screen name="Map" component={MapNavigator} />
      <Tab.Screen name="Reports" component={ReportNavigator} />
      <Tab.Screen name="Safety Nets" component={SafetyNetsNavigator} />
    </Tab.Navigator>
  )
}
