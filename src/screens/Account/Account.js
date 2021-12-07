import React, { useState } from 'react'
import {
  Container,
  Button,
  ButtonText,
  Title,
  Text,
  Details,
} from '../../../styles'
import Header from '../../nav/Header'
import Footer from '../../nav/Footer'
import { AuthContext } from '../../nav/Auth'

export const Account = (props) => {
  let [user] = useState(AuthContext)
  user = user._currentValue.user

  props.route.name = `Your Profile`
  console.log(user)

  const onNext = () => {
    try {
      props.navigation.navigate('Edit Account', {user})
    } catch (e) {
      alert(e)
    }
  }

  return (
    <>
      <Container>
        <Header {...props} />
        <Title>{user.firstName}</Title>
        <Text>Email</Text>
        <Details>{user.email}</Details>
        <Text>Mobile</Text>
        <Details>{user.mobile ? user.mobile : 'No mobile #'}</Details>
        <Text>ID</Text>
        <Details>{user.id}</Details>
        <Button onPress={onNext}>
          <ButtonText>Edit</ButtonText>
        </Button>
      </Container>
      <Footer {...props} />
    </>
  )
}
