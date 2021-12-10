import React, { useState } from 'react'
import {
  Container,
  Text,
  Button,
  ButtonText,
  Colors,
  FormBox,
  LoginInput,
  ReportBar,
  TextInput,
  ModalBox,
} from '../../../styles'
import { View } from 'react-native'
import { firebase } from '../../firebase/config'
import DateTimePicker from '@react-native-community/datetimepicker'
import MultiSelect from 'react-native-multiple-select'
import { AuthContext } from '../../auth/Auth'

// Color imports
const { navy } = Colors

const items = [
  // name key is must. It is to show the text in front
  { id: 1, name: 'Robbery' },
  { id: 2, name: 'Hate Crime' },
  { id: 3, name: 'Stalking' },
  { id: 4, name: 'Assault' },
  { id: 5, name: 'Sexual Assault' },
]

export default function Comments({ navigation }) {
  let [user] = useState(AuthContext)
  user = user._currentValue.user

  const [comments, setComments] = useState('')
  const [location, setLocation] = useState('')
  const [date, setDate] = useState(new Date(1598051730000))
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
  const [selectedItems, setSelectedItems] = useState([])

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

  // splits string of coordinates to object for incidents
  const parseLocation = (location) => {
    const coords = location.split(',')
    const latitude = coords[0]
    const longitude = coords[1]
    return { lat: latitude, long: longitude }
  }

  // send info to firestore
  const onSubmit = () => {
    try {
      const coords = parseLocation(location);
      const incidentsRef = firebase.firestore().collection('incidents')
      incidentsRef.add({
        date,
        comments,
        type: selectedItems,
        location: coords,
      })

      const usersRef = firebase.firestore().collection('users').doc(user.id)
      usersRef.update({
        incidents: firebase.firestore.FieldValue.arrayUnion({
          date,
          comments,
          type: selectedItems,
          location: coords,
        }),
      })
      alert(`Thank you for sharing your report. We're with you ❤️`)
      navigation.navigate('Dashboard')
    } catch (e) {
      alert(e)
    }
  }

  return (
    <Container>
      <Text>
        {'\n'}
        {'\n'}Date and Time
      </Text>
      <ReportBar>
        <Button onPress={showDatepicker}>
          <ButtonText>Choose Date</ButtonText>
        </Button>
        <Button onPress={showTimepicker}>
          <ButtonText>Choose Time</ButtonText>
        </Button>
      </ReportBar>
      {show && (
        <ModalBox>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="spinner"
            onChange={onChange}
          />
          <View style={{ padding: 10, backgroundColor: `${navy}` }}>
            <ButtonText
              style={{ textAlign: 'center' }}
              onPress={() => setShow(false)}
            >
              Done
            </ButtonText>
          </View>
        </ModalBox>
      )}

      <Text>{'\n'}Type of Incident</Text>
      <ModalBox style={{ backgroundColor: 'white' }}>
        <MultiSelect
          hideTags
          items={items}
          uniqueKey="name"
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="What kind of incident occurred?"
          searchInputPlaceholderText="Search"
          tagRemoveIconColor={navy}
          selectedItemTextColor={navy}
          selectedItemIconColor={navy}
          displayKey="name"
          searchInputStyle={{ color: navy }}
          submitButtonColor={navy}
          submitButtonText="Submit"
        />
      </ModalBox>

      <Text>{'\n'}Location</Text>
      <Text style={{fontStyle: 'italic', fontSize: 12}}>Forgot? Check your SOS history in Account</Text>
      <TextInput
        placeholder="Please enter coordinates: [latitude],[longitude]"
        onChangeText={(text) => setLocation(text)}
        value={location}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />

      <Text>{'\n'}Additional Comments</Text>
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
  )
}
