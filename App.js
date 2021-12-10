import React from 'react'
import 'react-native-gesture-handler'
import { decode, encode } from 'base-64'
import { Auth } from './src/auth/Auth'
import UserState from './src/auth/UserState'
import { useFonts } from 'expo-font';
import { LogBox } from 'react-native'
LogBox.ignoreAllLogs()

if (!global.btoa) {
  global.btoa = encode
}
if (!global.atob) {
  global.atob = decode
}

export default function App() {
  const [loaded] = useFonts({
    Nanum: require('./assets/fonts/NanumMyeongjo-Regular.ttf'),
  })

  return (
    <Auth>
      <UserState {...loaded} />
    </Auth>
  )
}
