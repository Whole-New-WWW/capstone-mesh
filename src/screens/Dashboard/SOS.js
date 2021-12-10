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

export default function SOSButton(props) {
  const { user, setUser } = useContext(AuthContext)
  const [location, setLocation] = useState(null)

  // date formatting
  const D = new Date().getDate()
  const M = new Date().getMonth()
  const Y = new Date().getFullYear()
  const H = new Date().getHours()
  const MM = new Date().getMinutes()
  const date = `${M}/${D}/${Y} at ${H}:${MM}`

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

  // gets safety net mobiles
  const getSafetyNetPhoneNums = async () => {
    const userRef = db.collection('users').doc(user.id)
    const userData = await userRef.get()
    const userObj = await userData.data()
    const userSafetyNets = userObj.safety_nets
    const phoneNums = []

    // iterate through each safety net
    if (!userSafetyNets) {
      alert('No safety nets! Add one now in Safety Nets 🤗')
    }
    userSafetyNets.forEach((net) => {
      let users = net.users
      if (!users) {
        alert(
          'No contacts in your default Safety Net! Add one now in Safety Nets🤝',
        )
      } else {
        for (let i = 0; i < users.length; i++) {
          phoneNums.push(users[i].phoneNumber)
          return phoneNums
        }
      }
    })
  }

  // onPress handler to save location, send message to safety nets and store in SOS history
  const onSOS = async () => {
    try {
      const phoneNumbers = await getSafetyNetPhoneNums()

      if (phoneNumbers) {
        // grants brightness permission to dim screen
        const { status } = await Brightness.requestPermissionsAsync()
        if (status === 'granted') {
          Brightness.setSystemBrightnessAsync(0.1)
        }

        // texts your safety net
        const isAvailable = await SMS.isAvailableAsync()

        if (isAvailable) {
          const { result } = await SMS.sendSMSAsync(
            phoneNumbers,
            `AUTO MESSAGE FROM MESH: SOS triggered. Here is my location: http://maps.google.com/?q=${location.latitude},${location.longitude}`,
          )

          // saves your coordinates and date of SOS trigger
          if (result !== 'sent') {
            alert(`SOS triggered is ${result}`)
            Brightness.setSystemBrightnessAsync(0.7)
          } else {
            const usersRef = firebase
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
          alert('Error in sending.')
        }
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
