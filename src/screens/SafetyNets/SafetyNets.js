import React from 'react';
import Header from '../../nav/Header';
import Footer from '../../nav/Footer';
import {
  Container,
  ButtonListContainer,
  FlexRowButton,
  DashText,
  CircularImage,
  AddButton,
  Title,
  SmallIcon
} from "../../../styles";

export default function SafetyNets(props) {
  const { user } = props.route.params;
  const safetyNets = user.safety_nets;
  return (
    <>
      <Container>
        {console.log('HERE ARE THE PROPS', props.route.params)}
        <Header {...props}/>
        <CircularImage source={require('../../../assets/icons/friends.png')}/>
        {!safetyNets && !safetyNets.length ? (
          <Container>
            <Title>
              You have no Safety Nets! Add some below!
            </Title>
          </Container>
        ) : (
          <ButtonListContainer>
            {safetyNets.map((safetyNet, index) => {
              return (
                <FlexRowButton 
                  key={index} 
                  onPress={() => props.navigation.navigate("Safety Net", {safetyNet})}
                >
                  <DashText>
                    {safetyNet.name}
                  </DashText>
                </FlexRowButton>
              )
            })}
            <AddButton>
              <SmallIcon source={require('../../../assets/icons/plus.png')}/>
              <DashText>
                Add New Safety Net
              </DashText>
            </AddButton>
          </ButtonListContainer>
        )}
      </Container>
      <Footer {...props} />
    </>
  )
}
