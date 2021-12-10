import React, { useState } from 'react'
import { DashContainer, Logo, Title, Text, Grid } from '../../../styles'
import SOSButton from './SOS'
import { AuthContext } from '../../auth/Auth'
import { createStackNavigator } from '@react-navigation/stack'

export default function Dashboard(props) {
  const [loading, setLoading] = useState(true) // maybe add this to mediate the second-long wait time
  let [user] = useState(AuthContext)
  user = user._currentValue.user

  const title = () => {
    if (user) return `Welcome home, ${user.name}`
    else return `Welcome home`
  }

  return (
    <DashContainer>
      <Title>
        <Text style={{ fontFamily: 'Nanum', fontSize: 45 }}>mesh</Text>
      </Title>
      <Logo
        source={require('../../../assets/globe-logo.png')}
        style={{ height: 150, width: 150 }}
      />
      <Grid>
        <Title>{title()}</Title>
        <Text style={{ textAlign: 'center' }}>
          Your community safety network
        </Text>
        <Text style={{ textAlign: 'center' }}>
          To get started, click on the menu bars in the bottom or on the side.
          {'\n'}
        </Text>
        <Text style={{ textAlign: 'center' }}>
          If you are in danger, press the SOS button below to alert your safety
          nets.{'\n'}
        </Text>
        <SOSButton />
      </Grid>
    </DashContainer>
  )
}
