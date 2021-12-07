import React, { useState, useEffect } from 'react'
import { Icon, DashText, SOS } from '../../../styles'
import { AuthContext } from '../../nav/Auth'

import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location' //using expo to get the location of user
import * as Brightness from 'expo-brightness'
import * as SMS from 'expo-sms'

export default function SOSButton(props) {
  let [user] = useState(AuthContext)
  user = user._currentValue.user
  const [location, setLocation] = useState(null)

  let nets = user.safety_nets

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

  // onPress handler to save location
  const onSOS = async () => {
    let nets = user.safety_nets;
    console.log('NETS >>', nets.length)
    try {
      const { status } = await Brightness.requestPermissionsAsync()
      if (status === 'granted') {
        Brightness.setSystemBrightnessAsync(0.1)
        console.log('SYSTEM BRIGHTNESS')
      }
      console.log('COORDS >> ', location)

      const isAvailable = await SMS.isAvailableAsync()
      if (isAvailable) {
        const { result } = await SMS.sendSMSAsync(
          ['3473356165'],
          `I triggered an SOS button. Here is my location: ${location}`
        )
      } else {
        alert('Error in sending.')
      }
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
