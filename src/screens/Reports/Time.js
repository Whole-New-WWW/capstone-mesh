import React, { useState } from 'react'
import {
  Container,
  Title,
  Button,
  ButtonText,
  TextInput,
  ReportBar,
  Text,
} from '../../../styles'
import Header from '../../nav/Header'
import Footer from '../../nav/Footer'

export const Time = (props) => {
  props.route.name = `Incident Report`
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

  const onNext = () => {
    props.navigation.navigate('Comments', { date, time })
  }

  //route.params to pass information

  console.log('TIME.JS >>>', { date, time })

  return (
    <>
      <Container>
        <Header {...props} />
        <Title>Date and Time</Title>
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
        <ReportBar>
          <Button onPress={onNext}>
            <ButtonText>Back</ButtonText>
          </Button>
          <Button onPress={onNext}>
            <ButtonText>Next</ButtonText>
          </Button>
        </ReportBar>
      </Container>
      <Footer {...props} />
    </>
  )
}
