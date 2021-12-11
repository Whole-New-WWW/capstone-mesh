import React, { useState } from 'react'
import { DashContainer, Logo, Title, Text, Home } from '../../../styles'
import { View } from 'react-native'
import SOSButton from './SOS'
import { AuthContext } from '../../auth/Auth'

export default function Dashboard(props) {
  let [user] = useState(AuthContext)
  user = user._currentValue.user

  const title = () => {
    if (user) return `Welcome home, ${user.name}`
    else return `Welcome home`
  }

  return (
    <DashContainer>
      <Home>
        <View>
          <Title>
            <Text style={{ fontFamily: 'Nanum', fontSize: 45 }}>mesh</Text>
          </Title>
          <Text>Your community safety network</Text>
          <Logo
            source={require('../../../assets/globe-logo.png')}
            style={{ height: 150, width: 150 }}
          />
        </View>
        <View>
          <Title>{title()}</Title>
          <Text style={{ textAlign: 'center' }}>
            Plan and track your journeys with ease of mind.
            {'\n'}{'\n'}
            The SOS below is your emergency button to immediately contact your Safety Net with your exact location, so they can assist you.
          </Text>
        </View>
        <SOSButton />
      </Home>
    </DashContainer>
  )
}
