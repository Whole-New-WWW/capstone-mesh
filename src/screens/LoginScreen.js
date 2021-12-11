import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
  Title,
  Text,
  DashContainer,
  FooterView,
  LoginInput,
  Logo,
  Button,
  ButtonText,
  FooterLink,
} from '../../styles'
import { firebase } from '../firebase/config'

// Firebase Auth
const auth = firebase.auth()

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onFooterLinkPress = () => {
    navigation.navigate('Registration')
  }

  const onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid
        const usersRef = firebase.firestore().collection('users')
        usersRef
          .doc(uid)
          .get()
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists) {
              alert('User does not exist anymore.')
              return
            }
          })
          .catch((error) => {
            alert(error)
          })
      })
      .catch((error) => {
        alert(error)
      })
  }

  return (
    <DashContainer>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%', marginTop: 25 }}
        keyboardShouldPersistTaps="always"
      >
        <Title>Log In</Title>
        <Logo source={require('../../assets/globe-logo.png')} />
        <LoginInput
          placeholder="E-mail"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <LoginInput
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <Button onPress={() => onLoginPress()}>
          <ButtonText>Log In</ButtonText>
        </Button>
        <FooterView>
          <Text>
            Don't have an account?{' '}
            <FooterLink onPress={onFooterLinkPress}>Sign up</FooterLink>
          </Text>
        </FooterView>
      </KeyboardAwareScrollView>
    </DashContainer>
  )
}
