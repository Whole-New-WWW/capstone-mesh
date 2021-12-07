import React, { useState, useEffect } from 'react'
import { Icon, DashText, SOS } from '../../../styles'

import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location' //using expo to get the location of user

import * as Brightness from 'expo-brightness'

export default function SOSButton(props) {
  const [location, setLocation] = useState(null)

  useEffect(() => {
    ;(async () => {
      let { status } = await requestForegroundPermissionsAsync() //Asks the user to grant permissions for location
      if (status != 'granted') {
        setError('Permission to access location was denied')
        return
      }
      const locate = await getCurrentPositionAsync({})
      setLocation({
        latitude: locate.coords.latitude,
        longitude: locate.coords.longitude,
      })
    })()
  }, [])

  // useEffect(() => {
  //   ;(async () => {
  //     const { status } = await Brightness.requestPermissionsAsync()
  //     if (status === 'granted') {
  //       Brightness.setSystemBrightnessAsync(0.1)
  //       console.log('SYSTEM BRIGHTNESS')
  //     }
  //   })()
  // }, [])

  // onPress handler to save location
  const onSOS = async () => {
    try {
      const { status } = await Brightness.requestPermissionsAsync()
      if (status === 'granted') {
        Brightness.setSystemBrightnessAsync(0.1)
        console.log('SYSTEM BRIGHTNESS')
      }
      console.log('GRABBING LOCATION', location)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <>
      <SOS onPress={() => onSOS()}>
        <DashText>SOS</DashText>
        <Icon source={require('../../../assets/icons/alert.png')} />
      </SOS>
    </>
  )
}
