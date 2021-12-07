import React, { useState } from 'react'
import {
  Container,
  Button,
  ButtonText,
  Title,
  Text,
  Details,
  ReportBar,
} from '../../../styles'
import Header from '../../nav/Header'
import Footer from '../../nav/Footer'
import { AuthContext } from '../../nav/Auth'
import { firebase } from '../../firebase/config'

const auth = firebase.auth()

export default function Account(props) {
  props.route.name = `Your Profile`
  let [user] = useState(AuthContext)
  user = user._currentValue.user

  console.log('ACCOUNT', props)

  const onEdit = () => {
    try {
      props.navigation.navigate('Edit Account', { user })
    } catch (e) {
      alert(e)
    }
  }

  const logOut = async () => {
    try {
      await auth.signOut()
      props.navigation.navigate('Login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Container>
        <Header {...props} />
        <Title style={{ textTransform: 'uppercase' }}>{user.firstName}</Title>
        <Text>ID</Text>
        <Details>{user.id}</Details>
        <Text>Email</Text>
        <Details>{user.email}</Details>
        <Text>Mobile</Text>
        <Details>{user.mobile ? user.mobile : 'No mobile #'}</Details>
        <ReportBar>
          <Button onPress={() => logOut()}>
            <ButtonText>Log Out</ButtonText>
          </Button>
          <Button onPress={() => onEdit()}>
            <ButtonText>Edit</ButtonText>
          </Button>
        </ReportBar>
      </Container>
      <Footer {...props} />
    </>
  )
}
