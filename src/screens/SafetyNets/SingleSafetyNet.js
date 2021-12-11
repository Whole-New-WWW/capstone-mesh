import React, { useState } from 'react';
import ContactList from '../ContactList/ContactList';
import * as Contacts from 'expo-contacts';
import { View, Alert } from 'react-native';
import firebase from 'firebase'
import { Image } from 'react-native'
import {
  Container,
  DashText,
  CircularImage,
  AddButton,
  Button,
  ButtonText,
  Title,
  SmallIcon,
  FlexColumnButton,
  SmallAddButton,
  Grid,
  SafetyNetButton,
  SafetyNetIcon,
  Contact
} from "../../../styles";
import { AuthContext } from '../../auth/Auth'

const db = firebase.firestore()

export default function SingleSafetyNet(props) {
  const { net } = props.route.params; //getting from firebase
  console.log('HERE ARE PROPS IN SINGLE', props)
  const users = net.users;
  //const {user} = React.useContext(AuthContext);

  //react hooks defining state:
  const {user} = React.useContext(AuthContext);
  const userID = user.id //the user themself not the contact user


  //deletes single safety net on click of the delete button
  const deleteSafetyNet = async (userId) => {
    //create reference to current user
    const currentUserRef = db.collection('users').doc(userId);

    //get current user as user object
    const currentUserSnapshot = await currentUserRef.get()
    const currentUserObj = await currentUserSnapshot.data()
    console.log('THIS IS THE CURRENT USER OBJ>>', currentUserObj)
    //modify user object:
    const newSafetyNets = currentUserObj.safety_nets
    .filter((safetyNet) => safetyNet.name !== net.name)
    console.log('THIS IS THE NEW SAFETYNETS!!!!', newSafetyNets)
    console.log('THIS IS NET.NAME!!!!!!!!!!!!!', net.name)
        //filter safety nets by name excluding the name we want to delete
        //save as new safety nets array
    //in firestore replace the old safety net with new safety net obj
    const response = await currentUserRef.update({safety_nets: newSafetyNets})
    console.log('THIS IS THE RESPONSE>>>>>', response)
  }

  //this will call the function that updates the db and will navigate to the all safety nets
  function onclickDelete(userId) {
    deleteSafetyNet(userId);
    props.navigation.navigate('Safety Nets', {})
  }


  return (
    <Container>
      <Title>
        {net.name}
      </Title>
      <CircularImage>
        <Image
          source={require('../../../assets/icons/friends.png')}
          style={{ width: 75, height: 75, alignSelf: 'center' }}
        />
      </CircularImage>
      {!users ? (
        <>
        <Container>
          <Title>
            Add your crew here!
          </Title>
          <SmallAddButton
            style={{alignSelf: 'center'}}
          >
            <SmallIcon source={require('../../../assets/icons/plus.png')}/>
            <DashText>
              Add Contact
            </DashText>
          </SmallAddButton>
          <Button
            style={{
              height: 50,
              width: 200,
              alignSelf: 'center',
              justifyContent: 'center'
            }}
            // onPress={() => onclick()} delete functionality
          >
            <ButtonText>
              Delete Safety Net
            </ButtonText>
          </Button>
        </Container>
        </>
      ) : (
        <>
          <Grid>
            {users.map((user, index)=> {
              return (
                <View
                  style={{flexDirection:"row",
                  }}
                >
                  <Contact
                    key={index}
                  >
                    <DashText>
                      {user.fullName}
                    </DashText>
                    <SafetyNetButton
                    style={{ backgroundColor: "transparent" }}
                    // onPress={() => props.navigation.goBack()}
                    >
                      <SafetyNetIcon source={require("../../../assets/icons/remove.png")} />
                    </SafetyNetButton>
                  </Contact>
                </View>
              )
            })}
            <SmallAddButton
              onPress={() => props.navigation.navigate('Contact List')}
            >
              <SmallIcon source={require('../../../assets/icons/plus.png')}/>
              <DashText>
                Add Contact
              </DashText>
            </SmallAddButton>
          </Grid>
          <Button
            style={{
              height: 50,
              width: 200,
              alignSelf: 'center',
              justifyContent: 'center'
            }}
            // onPress={() => onclick()} delete functionality
          >
            <ButtonText>
              Delete Safety Net
            </ButtonText>
          </Button>
        </>
      )}
    </Container>
  )
}
