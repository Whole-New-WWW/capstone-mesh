import React, { useState, useEffect, useContext } from 'react'
import { Icon, DashText, SOS } from '../../../styles'
import { AuthContext } from '../../auth/Auth'
import { firebase } from '../../firebase/config'

import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location' //using expo to get the location of user
import * as Brightness from 'expo-brightness'
import * as SMS from 'expo-sms'

const db = firebase.firestore()

export default function SOSButton() {
  const { user, setUser } = useContext(AuthContext)
  const [location, setLocation] = useState(null)

  // date formatting
  const D = new Date().getDate()
  const M = new Date().getMonth()
  const Y = new Date().getFullYear()
  const H = new Date().getHours()
  const MM = new Date().getMinutes()
  const date = `${M}/${D}/${Y} at ${H}:${MM}`

  // Location tracking permissions
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

  // parses through firestore for mobile numbers
  const getSafetyNetPhoneNums = async () => {
    const userRef = db.collection('users').doc(user.id)
    const userData = await userRef.get()
    const userObj = await userData.data()
    const userSafetyNets = userObj.safety_nets
    const phoneNums = []

    userSafetyNets.forEach((net) => {
      if (net.selected === false) {
        return
      } else {
        let users = net.users
        for (let i = 0; i < users.length; i++) {
          phoneNums.push(users[i].phoneNumber)
        }
      }
    })

    if (phoneNums.length) {
      return phoneNums
    } else {
      alert('You have no safety net contacts or phone numbers to alert!')
    }
  }

  // onPress handler to save location
  const onSOS = async () => {
    // if brightness permission is granted, continue
    const { status } = await Brightness.requestPermissionsAsync()
    if (status === 'granted') {
      Brightness.setSystemBrightnessAsync(0.1)
    }

    const isAvailable = await SMS.isAvailableAsync()
    if (isAvailable) {
      const phoneNumbers = await getSafetyNetPhoneNums()
      console.log('PHONE #S', phoneNumbers)
      const { result } = await SMS.sendSMSAsync(
        phoneNumbers,
        `AUTOMSG FROM MESH: SOS triggered! Here is my location: http://maps.google.com/?q=${location.latitude},${location.longitude}`,
      )

      // saves your coordinates and date of SOS trigger
      if (result !== 'sent') {
        Brightness.setSystemBrightnessAsync(0.8)
        // alert(`SOS triggered is ${result}`)  // currently has a bug. is able to parse through phoneNumbers but unable to continue into the message portion
        alert(`SOS Trigger Feature coming soon!`)
      } else {
        const usersRef = await firebase
          .firestore()
          .collection('users')
          .doc(user.id)
        usersRef.update({
          sos: firebase.firestore.FieldValue.arrayUnion({
            location: `${location.latitude},${location.longitude}`,
            date,
          }),
        })
      }
    } else {
      alert('Please allow SMS permission to continue.')
    }
  }

  return (
    <SOS onPress={() => onSOS()}>
      <DashText>SOS</DashText>
      <Icon source={require('../../../assets/icons/alert.png')} />
    </SOS>
  )
}
