import React, { useState } from 'react'
import {
  Container,
  Button,
  ButtonText,
  Title,
  Text,
  Details,
  ReportBar,
  DetailText,
  NavIcon,
} from '../../../styles'
import { TouchableOpacity } from 'react-native'
import { AuthContext } from '../../auth/Auth'
import { firebase } from '../../firebase/config'

const auth = firebase.auth()

export default function Account({ navigation }) {
  let [user] = useState(AuthContext)
  user = user._currentValue.user

  const logOut = () => {
    try {
      auth.signOut()
    } catch (error) {
      alert(e)
    }
  }

  return (
    <>
      <Container>
        <ReportBar style={{paddingLeft: 5, paddingRight: 20}}>
          <Title style={{ textTransform: 'uppercase' }}>{user.name}</Title>
          <TouchableOpacity onPress={() => navigation.navigate('Edit')} style={{padding: 10, alignSelf: 'center'}}>
            <NavIcon source={require('../../../assets/icons/edit.png')} />
          </TouchableOpacity>
        </ReportBar>
        <Text>ID</Text>
        <Details>
          <DetailText>{user.id}</DetailText>
        </Details>
        <Text>Email</Text>
        <Details>
          <DetailText>{user.email}</DetailText>
        </Details>
        <Text>Mobile</Text>
        <Details>
          <DetailText>{user.mobile ? user.mobile : 'No mobile #'}</DetailText>
        </Details>
        <ReportBar>
          <Button onPress={() => logOut()}>
            <ButtonText>Log Out</ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate('History')}>
            <ButtonText>SOS History</ButtonText>
          </Button>
        </ReportBar>
      </Container>
    </>
  )
}
