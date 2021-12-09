import React, { useState } from 'react'
import {
  Container,
  Title,
  Button,
  ButtonText,
  TextInput,
} from '../../../styles'
import { AuthContext } from '../../nav/Auth'
import { firebase } from '../../firebase/config'

export default function Edit(props) {
  let [user] = useState(AuthContext)
  user = user._currentValue.user

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState(user.password)
  const [mobile, setMobile] = useState(user.mobile)

  props.route.name = `Account Settings`

  const onSubmit = () => {
    try {
      const usersRef = firebase.firestore().collection('users').doc(user.id)
      usersRef.update({ email: email, name: name, mobile: mobile, password: password })
      alert('Successfully saved!')
      props.navigation.navigate('Account', { email: email, name: name, mobile: mobile })
    } catch (e) {
      alert(e)
    }
  }

  const onBack = () => {
    try {
      props.navigation.navigate('Account')
    } catch (e) {
      alert(e)
    }
  }

  return (
    <>
      <Container>
        <Title>Edit Your Information</Title>
        <TextInput
          placeholder={user.email}
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          placeholder={user.name}
          onChangeText={(text) => setName(text)}
          value={name}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          placeholder={user.mobile ? user.mobile : 'No mobile #'}
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
    </>
  )
}
