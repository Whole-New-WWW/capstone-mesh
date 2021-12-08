import React, { useState } from 'react';
import Header from '../../nav/Header';
import Footer from '../../nav/Footer';
import AddSafetyNetModal from './AddSafetyNetModal';
import { Alert, Modal} from "react-native";
import {
  Container,
  DashText,
  CircularImage,
  AddButton,
  Title,
  SmallIcon,
  FlexColumnButton,
  SmallAddButton,
  Grid
} from "../../../styles";

export default function SingleSafetyNet(props) {
  const { safetyNet } = props.route.params;
  const contacts = safetyNet.users;
  const [modalDisplayed, setModalDisplayed] = useState(false);

  return (
    <>
      <Container>
        <Header {...props}/>
        <Title>
          {safetyNet.name}
        </Title>
        <CircularImage source={require('../../../assets/icons/friends.png')}/>
        <Grid>
          {contacts.map((contact, index)=> {
            return (
              <FlexColumnButton 
                key={index} 
              >
                <DashText>
                  {contact.fullName}
                </DashText>
              </FlexColumnButton>
            )
          })}
          <SmallAddButton
            onPress={() => setModalDisplayed(true)}
          >
            <SmallIcon source={require('../../../assets/icons/plus.png')}/> 
            <DashText>
              Add Contact
            </DashText>
          </SmallAddButton>
        </Grid>
      </Container>
      <Footer {...props} />
    </>
  )
}