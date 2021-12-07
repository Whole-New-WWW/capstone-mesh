import React, { useState, useEffect } from 'react'
import { Linking } from 'react-native'
import {
  Title,
  Grid,
  Icon,
  DashButton,
  DashContainer,
  DashText,
  SOS,
} from '../../../styles'
import Footer from '../../nav/Footer'
import { AuthContext } from '../../nav/Auth'

// Expo iOS Framework
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location' //using expo to get the location of user

export default function Dashboard(props) {
  const [location, setLocation] = useState(null)
  // const [initialRegion, setInitialRegion] = useState(null)
  let [user] = useState(AuthContext)
  user = user._currentValue.user

  const title = () => {
    if (user) {
      return `Welcome home, ${user.firstName}`
    } else {
      return `Welcome home`
    }
  }

  useEffect(() => {
    (async () => {
      let { status } = await requestForegroundPermissionsAsync() //Asks the user to grant permissions for location
      if (status != 'granted') {
        setError('Permission to access location was denied')
        return
      }
      const locate = await getCurrentPositionAsync({});
      setLocation({
        latitude: locate.coords.latitude,
        longitude: locate.coords.longitude,
      });
      console.log('in locate', locate.coords)
    })()
  }, [])

  // onPress handler to save location
  const onSOS = async () => {
    try {
      console.log('GRABBING LOCATION', location)
    } catch (e) {
      alert(e)
    }

    // //async function used to get request permission of users location while getting their current position
    // ;async () => {
    //   let { status } = await requestForegroundPermissionsAsync() //Asks the user to grant permissions for location
    //   if (status != 'granted') {
    //     setError('Permission to access location was denied')
    //     return
    //   }
    //   const locate = await getCurrentPositionAsync({})

    //   //gets the current user coordinates
    //   setLocation({
    //     latitude: locate.coords.latitude,
    //     longitude: locate.coords.longitude,
    //   })

    //   console.log('GRABBING LOCATION', location)
    // }
  }

  return (
    <>
      <DashContainer>
        <Title>{title()}</Title>
        <Grid>
          <DashButton onPress={() => props.navigation.navigate('Map')}>
            <DashText>Account</DashText>
            <Icon source={require('../../../assets/icons/account.png')} />
          </DashButton>
          <DashButton onPress={() => props.navigation.navigate('Map')}>
            <DashText>Map</DashText>
            <Icon source={require('../../../assets/icons/map.png')} />
          </DashButton>
          <DashButton onPress={() => props.navigation.navigate("Safety Nets")}>
            <DashText>Safety Net</DashText>
            <Icon source={require('../../../assets/icons/friends.png')} />
          </DashButton>
          <DashButton onPress={() => props.navigation.navigate('Time')}>
            <DashText>Submit a Report</DashText>
            <Icon source={require('../../../assets/icons/addreport.png')} />
          </DashButton>
          <SOS onPress={() => onSOS()}>
            <DashText>SOS</DashText>
            <Icon source={require('../../../assets/icons/alert.png')} />
          </SOS>
        </Grid>
      </DashContainer>
      <Footer {...props} />
    </>
  )
}
