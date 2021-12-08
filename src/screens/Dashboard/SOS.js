import React, { useState, useEffect } from 'react'
import { Icon, DashText, SOS } from '../../../styles'
import { AuthContext } from '../../nav/Auth'
import { firebase } from '../../firebase/config'

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

  // date formatting
  const D = new Date().getDate()
  const M = new Date().getMonth()
  const Y = new Date().getFullYear()
  const H = new Date().getHours()
  const MM = new Date().getMinutes()
  const date = `${M}/${D}/${Y} at ${H}:${MM}`

  console.log('LOCATION', location)

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
    try {
      // grants brightness permission to dim screen
      const { status } = await Brightness.requestPermissionsAsync()
      if (status === 'granted') {
        Brightness.setSystemBrightnessAsync(0.1)
      }
      console.log('COORDS >> ', location)

      // saves your coordinates and date of SOS trigger
      const usersRef = firebase.firestore().collection('users').doc(user.id)
      usersRef.update({
        sos: firebase.firestore.FieldValue.arrayUnion({
          location: `${location.latitude},${location.longitude}`,
          date
        }),
      })

      // texts your safety net
      const isAvailable = await SMS.isAvailableAsync()
      if (isAvailable) {
        const { result } = await SMS.sendSMSAsync(
          ['3472637146'],
          `SOS button triggered. Here is my location: http://maps.google.com/?q=${location.latitude},${location.longitude}`,
        )
      } else {
        alert('Error in sending.')
      }
    } catch (e) {
      alert(e)
    }
  }
  // maybe we need to use a firebase.get() for the safety nets to find the mobile numbers and input them as the mobile numbers in sendSMSAsync()? reads will be higher but not a big jump

  return (
    <>
      <SOS onPress={() => onSOS()}>
        <DashText>SOS</DashText>
        <Icon source={require('../../../assets/icons/alert.png')} />
      </SOS>
    </>
  )
}
