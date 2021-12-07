import React, { useState } from 'react'
import {
  Container,
  Title,
  Button,
  ButtonText,
  TextInput
} from '../../../styles'
import Header from '../../nav/Header'
import Footer from '../../nav/Footer'
import { AuthContext } from '../../nav/Auth'

export const Edit = (props) => {
  const [user] = useState(AuthContext)
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [mobile, setMobile] = useState(null)

  props.route.name = `Account Settings`

  const onSubmit = () => {
    try {
      const usersRef = firebase.firestore().collection('users')
      // const
      // props.navigation.navigate('Dashboard')
    } catch (e) {
      alert(e)
    }
  }

  return (
    <>
      <Container>
        <Header {...props} />
        <Title>Edit Your Information</Title>
          <TextInput
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Name"
            onChangeText={(text) => setName(text)}
            value={name}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Mobile"
            onChangeText={(text) => setMobile(text)}
            value={mobile}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
        <Button onPress={onSubmit}>
          <ButtonText>Submit</ButtonText>
        </Button>
      </Container>
      <Footer {...props} />
    </>
  )
}
