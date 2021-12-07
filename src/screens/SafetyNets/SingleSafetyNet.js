import React from 'react';
import { Linking } from 'react-native';
import Header from '../../nav/Header';
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
  const contacts  = safetyNet.contacts;

  return (
    <Container>
      <Header {...props}/>
      <Title>
        {safetyNet.name}
      </Title>
      <CircularImage source={require('../../../assets/icons/friends.png')}/>
      <Grid>
        {contacts.map(contact => {
          return (
            <FlexColumnButton 
              key={contact.id} 
            >
              <DashText>
                {contact.name}
              </DashText>
            </FlexColumnButton>
          )
        })}
        <SmallAddButton>
          <SmallIcon source={require('../../../assets/icons/plus.png')}/> 
          <DashText>
            Add Contact
          </DashText>
        </SmallAddButton>
      </Grid>
    </Container>
  )
}