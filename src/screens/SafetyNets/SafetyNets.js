import React from 'react';
import Header from '../../nav/Header';
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

const safetyNets = [
  {
    id: 1,
    name: "Dance Team",
    contacts: [{ id: 1, name: "Anita" }, { id: 2, name: "Diane" }, { id: 3, name: "Nick" }],
  },
  {
    id: 2,
    name: "Study Group",
    contacts: [{ id: 1, name: "Claudia" }, { id: 2, name: "Josephine" }, { id: 3, name: "Yilla" }],
  },
  {
    id: 3,
    name: "Roomies",
    contacts: [{ id: 1, name: "Jamie" }, { id: 2, name: "Julian" }, { id: 3, name: "Jackie" }],
  },
];

export default function SafetyNets(props) {
  return (
    <Container>
      <Header {...props}/>
      <CircularImage source={require('../../../assets/icons/friends.png')} />
      {!safetyNets && !safetyNets.length ? (
        <Container>
          <Title>
            You have no Safety Nets! Add some below!
          </Title>
        </Container>
      ) : (
        <ButtonListContainer>
          {safetyNets.map(safetyNet => {
            return (
<<<<<<< HEAD
              <FlexRowButton
                key={safetyNet.id}
                onPress={() => props.navigation.navigate("Safety Net", {safetyNet: safetyNet})}
=======
              <FlexRowButton 
                key={safetyNet.id} 
                onPress={() => props.navigation.navigate("Safety Net", {safetyNet})}
>>>>>>> 330b55f715cc41f4a0aaf81bb5aa5939ce10140c
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
  )
}
