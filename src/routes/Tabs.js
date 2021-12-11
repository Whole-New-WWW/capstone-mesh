import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dashboard from '../screens/Dashboard/Dashboard'
import {
  ProfileNavigator,
  MapNavigator,
  SafetyNetsNavigator,
  ReportNavigator
} from './Stacks'
import { NavIcon, Colors } from '../../styles'

// Color imports
const { navy, lavender } = Colors

const Tab = createBottomTabNavigator()

export default function MyTabs(props) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case 'Home':
              return <NavIcon source={require('../../assets/icons/home.png')} />
            case 'Account':
              return (
                <NavIcon source={require('../../assets/icons/account.png')} />
              )
            case 'Map':
              return <NavIcon source={require('../../assets/icons/map.png')} />
            case 'Report':
              return (
                <NavIcon source={require('../../assets/icons/addreport.png')} />
              )
            case 'Safety Nets':
              return (
                <NavIcon source={require('../../assets/icons/friends.png')} />
              )
            default:
              return <></>
          }
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#fefefe',
          height: 100,
          borderTop: lavender
        },
        activeTintColor: navy,
        inactiveTintColor: lavender,
        labelStyle: { fontSize: 13, fontWeight: 'bold' },
      }}
      initialRouteName="Dashboard"
      swipeEnabled={false}
      shifting={true}
    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Account" component={ProfileNavigator} />
      <Tab.Screen name="Map" component={MapNavigator} />
      <Tab.Screen name="Safety Nets" component={SafetyNetsNavigator} />
      <Tab.Screen name="Report" component={ReportNavigator} />
    </Tab.Navigator>
  )
}
