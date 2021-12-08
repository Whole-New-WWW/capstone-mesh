import React, { useState } from 'react'
import {
  Text,
  Container,
  Title,
  Button,
  ButtonText,
  Colors,
  FormBox,
  LoginInput,
  TextInput
} from '../../../styles'
import Header from '../../nav/Header'
import Footer from '../../nav/Footer'
import { firebase } from '../../firebase/config'

// Color imports
const { light, lavender, navy } = Colors

export const Comments = (props) => {
  props.route.name = `Incident Report`
  // const [user] = useState(AuthContext)
  const [comments, setComments] = useState('')
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

  console.log('COMMENTS >>>', comments)

  const onSubmit = () => {
    try {
      const incidentsRef = firebase.firestore().collection('incidents')
      incidentsRef.add({
        time,
        date,
        comments,
      })
      props.navigation.navigate('Dashboard')
    } catch (e) {
      alert(e)
    }
  }

  return (
    <>
      <Container>
        <Header {...props} />
        <Title>Date & Time</Title>
        <Text>Time</Text>
        <TextInput
          style={{
            height: 50,
            width: '85%',
          }}
          placeholder="Time"
          onChangeText={(text) => setTime(text)}
          value={time}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <Text>Date</Text>
        <TextInput
          style={{
            height: 50,
            width: '85%',
          }}
          placeholder="Date"
          onChangeText={(text) => setDate(text)}
          value={date}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <Text>Type your comments below:</Text>
        <FormBox>
          <LoginInput
            style={{
              height: 100,
              width: '90%',
              backgroundColor: 'transparent',
            }}
            multiline={true}
            placeholder="Additional Comments"
            onChangeText={(text) => setComments(text)}
            value={comments}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
        </FormBox>
        <Button onPress={onSubmit}>
          <ButtonText>Submit</ButtonText>
        </Button>
      </Container>
      <Footer {...props} />
    </>
  )
}
