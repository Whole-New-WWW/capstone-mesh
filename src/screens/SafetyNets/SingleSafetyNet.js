import React, { useState } from 'react';
import Header from '../../nav/Header';
import Footer from '../../nav/Footer';

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
  const { net } = props.route.params;
  console.log('HERE ARE PROPS IN SINGLE', props)
  const users = net.users;
  
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
          </Container>
          </>
        ) : (
          <>
            <Grid>
              {users.map((user, index)=> {
                return (
                  <FlexColumnButton 
                    key={index} 
                  >
                    <DashText>
                      {user.fullName}
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
          </>
        )}
      </Container>
      <Footer {...props} />
    </>
  )
}