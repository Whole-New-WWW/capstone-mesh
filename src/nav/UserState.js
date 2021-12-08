import React, { useEffect, useState, useContext } from 'react'
import 'react-native-gesture-handler'
import { firebase } from '../firebase/config'
import { NavigationContainer } from '@react-navigation/native'
import { AuthContext } from './Auth'
import { decode, encode } from 'base-64'
import { User, Guest } from './Navigator'

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
  const { user, setUser } = useContext(AuthContext)

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users')
    auth.onAuthStateChanged((user) => { // rerender the screen when the auth changes
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          })
      } else {
        setLoading(false)
      }
    })
    return () => console.log('unmounting'); // cleanup useEffect
  }, [])

  if (loading) {
    return <></> // add a spinner
  }
  return (
    <NavigationContainer>
      {user ? <User /> : <Guest />}
    </NavigationContainer>
  )
}
