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
  FooterLink,
} from '../../../styles'
import { View } from 'react-native'
import Header from '../../nav/Header'
import Footer from '../../nav/Footer'
import { firebase } from '../../firebase/config'
import DateTimePicker from '@react-native-community/datetimepicker'
import MultiSelect from 'react-native-multiple-select'

// Color imports
const { light, lavender, navy } = Colors

// Dummy Data for the MutiSelect
const items = [
  // name key is must. It is to show the text in front
  { id: 1, name: 'Robbery' },
  { id: 2, name: 'Hate Crime' },
  { id: 3, name: 'Stalking' },
  { id: 4, name: 'Assault' },
  { id: 5, name: 'Sexual Assault' }
]

export const Comments = (props) => {
  props.route.name = `Incident Report`
  // const [user] = useState(AuthContext)
  const [comments, setComments] = useState('')
  const [date, setDate] = useState(new Date(1598051730000))
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
  const [selectedItems, setSelectedItems] = useState([])

  console.log('COMMENTS >>>', comments, date, selectedItems)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setShow(Platform.OS === 'ios')
    setDate(currentDate)
  }

  // chooses date and time
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

  // selects multiple types
  const onSelectedItemsChange = (selectedItems) => {
    // Set Selected Items
    setSelectedItems(selectedItems)
  }

  // send info to firestore
  const onSubmit = () => {
    try {
      const incidentsRef = firebase.firestore().collection('incidents')
      incidentsRef.add({
        date,
        comments,
        type: selectedItems
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
            <View style={{padding: 10, backgroundColor: `${navy}`}}><ButtonText style={{textAlign: 'center'}} onPress={() => setShow(false)}>Done</ButtonText></View>
          </>
        )}

        <Title>Type of Incident</Title>
        <MultiSelect
          hideTags
          items={items}
          uniqueKey="name"
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="What kind of incident occurred?"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={(text) => console.log(text)}
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor={navy}
          selectedItemIconColor={navy}
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: light }}
          submitButtonColor={navy}
          submitButtonText="Submit"
        />

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
