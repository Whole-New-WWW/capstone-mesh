import React from 'react'
import ContactList from '../ContactList/ContactList'
import * as Contacts from 'expo-contacts'
import firebase from 'firebase'
import { Image } from 'react-native'
import {
  Container,
  DashText,
  CircularImage,
  Button,
  ButtonText,
  Title,
  SmallIcon,
  SmallAddButton,
  Grid,
  SafetyNetButton,
  SafetyNetIcon,
  Contact,
  Text,
} from '../../../styles'
import { AuthContext } from '../../auth/Auth'

const db = firebase.firestore()

export default function SingleSafetyNet(props) {
  const { net } = props.route.params //getting from firebase
  const users = net.users
  //react hooks defining state:
  const { user } = React.useContext(AuthContext)
  const userID = user.id //the user themself not the contact user

  //deletes single safety net on click of the delete button
  const deleteSafetyNet = async (userId) => {
    //create reference to current user
    const currentUserRef = db.collection('users').doc(userId)

    //get current user as user object
    const currentUserSnapshot = await currentUserRef.get()
    const currentUserObj = await currentUserSnapshot.data()
    //modify user object:
    const newSafetyNets = currentUserObj.safety_nets.filter(
      (safetyNet) => safetyNet.name !== net.name,
    )
    //filter safety nets by name excluding the name we want to delete
    //save as new safety nets array
    //in firestore replace the old safety net with new safety net obj
    const response = await currentUserRef.update({ safety_nets: newSafetyNets })
  }

  //this will call the function that updates the db and will navigate to the all safety nets
  function onclickDelete(userId) {
    deleteSafetyNet(userId)
    props.navigation.navigate('Safety Nets')
  }

  return (
    <Container>
      <CircularImage>
        <Image
          source={require('../../../assets/icons/friends.png')}
          style={{ width: 75, height: 75, alignSelf: 'center' }}
        />
      </CircularImage>
      <Title>{net.name}</Title>
      {!users ? (
        <>
          <Container>
            <Text
              style={{ textAlign: 'center', paddingTop: 25, paddingBottom: 25 }}
            >
              Add your crew here!
            </Text>
            <SmallAddButton
              style={{ alignSelf: 'center' }}
              onPress={() => props.navigation.navigate('Contact List')}
            >
              <SmallIcon source={require('../../../assets/icons/plus.png')} />
              <DashText>Add Contact</DashText>
            </SmallAddButton>
          </Container>
          <Button
            onPress={() => onclickDelete(userID)}
            style={{ width: 150, alignSelf: 'center' }}
          >
            <ButtonText>Delete Safety Net</ButtonText>
          </Button>
        </>
      ) : (
        <>
          <Grid>
            {users.map((user, index) => {
              return (
                <Contact key={index}>
                  <DashText>{user.fullName}</DashText>
                  <SafetyNetButton style={{ backgroundColor: 'transparent' }}>
                    <SafetyNetIcon
                      source={require('../../../assets/icons/remove.png')}
                    />
                  </SafetyNetButton>
                </Contact>
              )
            })}
            <SmallAddButton
              onPress={() => props.navigation.navigate('Contact List')}
            >
              <SmallIcon source={require('../../../assets/icons/plus.png')} />
              <DashText>Add Contact</DashText>
            </SmallAddButton>
          </Grid>
          <Button onPress={() => onclickDelete(userID)}>
            <ButtonText>Delete Safety Net</ButtonText>
          </Button>
        </>
      )}
    </Container>
  )
}
