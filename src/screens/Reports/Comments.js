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
  ReportBar,
  FooterLink
} from '../../../styles'
import { View } from 'react-native'
import Header from '../../nav/Header'
import Footer from '../../nav/Footer'
import { firebase } from '../../firebase/config'
import DateTimePicker from '@react-native-community/datetimepicker'

// Color imports
const { light, lavender, navy } = Colors

export const Comments = (props) => {
  props.route.name = `Incident Report`
  // const [user] = useState(AuthContext)
  const [comments, setComments] = useState('')
  const [date, setDate] = useState(new Date(1598051730000))
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)

  console.log('COMMENTS >>>', comments, date)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setShow(Platform.OS === 'ios')
    setDate(currentDate)
  }

  const showMode = (currentMode) => {
    if (date) {
      setShow(false)
    }
    setShow(true)
    setMode(currentMode)
  }

  const showDatepicker = () => {
    showMode('date')
  }

  const showTimepicker = () => {
    showMode('time')
  }

  const onSubmit = () => {
    try {
      const incidentsRef = firebase.firestore().collection('incidents')
      incidentsRef.add({
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
        <Title>Date and Time of Incident</Title>
        <ReportBar>
          <Button onPress={showDatepicker}>
            <ButtonText>Choose Date</ButtonText>
          </Button>
          <Button onPress={showTimepicker}>
            <ButtonText>Choose Time</ButtonText>
          </Button>
        </ReportBar>
        {show && (
          <>
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="spinner"
              onChange={onChange}
            />
            <FooterLink onPress={() => setShow(false)}>Done</FooterLink>
          </>
        )}
        <Title>Additional Comments</Title>
        <FormBox>
          <LoginInput
            style={{
              height: 100,
              width: '90%',
              backgroundColor: 'transparent',
            }}
            blurOnSubmit={true}
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
