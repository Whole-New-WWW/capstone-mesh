import React, { useEffect, useState, useContext } from 'react'
import 'react-native-gesture-handler'
import { firebase } from '../firebase/config'
import { NavigationContainer } from '@react-navigation/native'
import { AuthContext } from './Auth'
import { decode, encode } from 'base-64'
import LoginNavigator from '../routes/Stacks'
import TabNavigator from '../routes/Tabs'

if (!global.btoa) {
  global.btoa = encode
}
if (!global.atob) {
  global.atob = decode
}

// Firebase Auth
const auth = firebase.auth()

export default function UserState() {
  const [loading, setLoading] = useState(true)
  const [loggedIn, setLoggedIn] = useState(null)
  const { user, setUser } = useContext(AuthContext)

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users')
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
            setLoggedIn(true)
          })
          .catch((error) => {
            setLoading(false)
          })
      } else {
        setLoading(false)
        setLoggedIn(false)
      }
    })
    return () => console.log('unmounting...')
  }, [])

  if (loading) {
    return <></>
  }

  return (
    <NavigationContainer>
      {loggedIn ? <TabNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  )
}
