import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dashboard from '../screens/Dashboard/Dashboard'
import {
  ProfileNavigator,
  MapNavigator,
  SafetyNetsNavigator,
  ReportNavigator,
  ContactListNavigator
} from './Stacks'
import { NavIcon, Colors } from '../../styles'

// Color imports
const { navy, lavender, light, yellow } = Colors

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
                />
              )
            case 'Account':
              return (
                <NavIcon
                  source={require('../../assets/icons/account.png')}
                />
              )
            case 'Map':
              return (
                <NavIcon
                  source={require('../../assets/icons/map.png')}
                />
              )
            case 'Reports':
              return (
                <NavIcon
                  source={require('../../assets/icons/addreport.png')}
                />
              )
            case 'Safety Nets':
              return (
                <NavIcon
                  source={require('../../assets/icons/friends.png')}
                />
              )
            case 'Contact List':
              return (
                <NavIcon
                  source={require('../../assets/icons/addreport.png')}
                />
              )
            default:
              return <></>
          }
        },
      })}
      tabBarOptions={{
        style: {
          height: 100,
          paddingLeft: 10,
          paddingRight: 10,
        },
        activeTintColor: navy,
        inactiveTintColor: lavender,
      }}
      tabBarIcon={{
        style: {
          borderRadius: 50
        }
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
      <Tab.Screen name="Contact List" component={ContactListNavigator} />
    </Tab.Navigator>
  )
}
