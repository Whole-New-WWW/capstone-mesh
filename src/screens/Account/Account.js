import React, { useState, useEffect } from 'react'
import {
  Container,
  Button,
  ButtonText,
  Title,
  Text,
  Details,
  ReportBar,
  DetailText,
  NavIcon,
  CircularImage,
  InvertButton,
} from '../../../styles'
import { TouchableOpacity, Image, ScrollView } from 'react-native'
import { AuthContext } from '../../auth/Auth'
import { firebase } from '../../firebase/config'
import one from '../../../assets/profiles/profile1.jpg'
import two from '../../../assets/profiles/profile2.jpg'
import three from '../../../assets/profiles/profile3.jpg'
import four from '../../../assets/profiles/profile4.jpg'

const auth = firebase.auth()

export default function Account({ navigation }) {
  let [user] = useState(AuthContext)
  user = user._currentValue.user

  const profilePhotos = [one, two, three, four]
  const [image, setImage] = useState(null)

  // random profile photo

  function changePic(array) {
    const randomNumber = Math.floor(Math.random() * array.length)
    setImage(array[randomNumber])
  }

  useEffect(() => {
    changePic(profilePhotos)
  })

  const logOut = () => {
    try {
      auth.signOut()
    } catch (error) {
      alert(e)
    }
  }

  return (
    <>
      <Container>
        <CircularImage>
          <Image
            source={image}
            style={{
              borderRadius: 100,
              width: 145,
              height: 145,
              alignSelf: 'center',
            }}
          />
        </CircularImage>
        <ReportBar style={{ paddingLeft: 5, paddingRight: 20 }}>
          <Title style={{ textTransform: 'uppercase' }}>{user.name}</Title>
          <TouchableOpacity
            onPress={() => navigation.navigate('Edit')}
            style={{ padding: 10, alignSelf: 'center' }}
          >
            <NavIcon source={require('../../../assets/icons/edit.png')} />
          </TouchableOpacity>
        </ReportBar>
        <ScrollView>
          <Text>Account</Text>
          <Details>
            <DetailText>{user.id}</DetailText>
          </Details>
          <Text>Email</Text>
          <Details>
            <DetailText>{user.email}</DetailText>
          </Details>
          <Text>Mobile</Text>
          <Details>
            <DetailText>{user.mobile ? user.mobile : 'No mobile #'}</DetailText>
          </Details>
        </ScrollView>
        <Button onPress={() => navigation.navigate('History')}>
          <ButtonText>SOS History</ButtonText>
        </Button>
        <InvertButton onPress={() => logOut()}>
          <Text>Log Out</Text>
        </InvertButton>
      </Container>
    </>
  )
}
