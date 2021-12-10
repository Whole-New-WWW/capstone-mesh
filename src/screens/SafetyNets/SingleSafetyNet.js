import React, { useState } from 'react';
import Header from '../../nav/Header';
import Footer from '../../nav/Footer';
import ContactList from '../ContactList/ContactList';
import * as Contacts from 'expo-contacts';
import { View, Alert } from 'react-native';
import firebase from 'firebase'
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
  SafetyNetIcon
} from "../../../styles";
//import { AuthContext } from '../../nav/Auth'

const db = firebase.firestore()

export default function SingleSafetyNet(props) {
  const { net } = props.route.params;
  console.log('HERE ARE PROPS IN SINGLE', props)
  const users = net.users;
  //const {user} = React.useContext(AuthContext);

//delete single user
  const deleteSingleSafetyUser = (userId) => {
    console.log('USERID!!!!>>>', userId)//gets the user id
    db //firebase.firestore
    .collection('users')
    .doc(userId)
    .delete()
    .then(() => {
      Alert.alert(
        'Contact has been deleted!',
        'Updates to your safety net have been saved successfully!'
      )
    }
    )
    .catch(e => console.log('Error deleting contact', e))
  }


  return (
    <>
      {console.log('HERE IS THE NET AGAIN', net)}
      <Container>
        <Header {...props}/>
        <Title>
          {net.name}
        </Title>
        <CircularImage source={require('../../../assets/icons/friends.png')}/>
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
              //onPress={() =>//delete functionality
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
                    <FlexColumnButton 
                      key={index}
                    >
                      <DashText>
                        {user.fullName}
                      </DashText>
                      <SafetyNetButton
                      style={{ backgroundColor: "transparent" }}
                      onPress={
                      () =>  {deleteSingleSafetyUser(user.id)}}
                      >
                        <SafetyNetIcon style={{flexDirection:"row"}} source={require("../../../assets/icons/remove.png")} />
                      </SafetyNetButton>
                    </FlexColumnButton>
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
      <Footer {...props} />
    </>
  )
}