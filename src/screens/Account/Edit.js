import React, { useState, useContext } from 'react'
import { Container, Text, Button, ButtonText, TextInput } from '../../../styles'
import { AuthContext } from '../../auth/Auth'
import { firebase } from '../../firebase/config'

export default function Edit({ navigation }) {
  const { user, setUser } = useContext(AuthContext)
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState(user.password)
  const [mobile, setMobile] = useState(user.mobile)

  async function onSubmit() {
    try {
      const usersRef = await firebase
        .firestore()
        .collection('users')
        .doc(user.id)
      usersRef.update({
        email: email,
        name: name,
        mobile: mobile,
        password: password,
      })
      setUser({
        ...user,
        email: email,
        name: name,
        mobile: mobile,
        password: password,
      })
      alert('Successfully saved!')
      navigation.navigate('Account')
    } catch (e) {
      alert(e)
    }
  }

  return (
    <Container>
      <Text>
        {'\n'}
        {'\n'}Email
      </Text>
      <TextInput
        placeholder={user.email}
        onChangeText={(text) => setEmail(text)}
        value={email}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <Text>Name</Text>
      <TextInput
        placeholder={user.name}
        onChangeText={(text) => setName(text)}
        value={name}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <Text>Mobile</Text>
      <TextInput
        placeholder={user.mobile ? user.mobile : 'No mobile #'}
        onChangeText={(text) => setMobile(text)}
        value={mobile}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <Text>Password</Text>
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
  )
}
