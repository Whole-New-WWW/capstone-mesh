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

// use this data until we have database seeded

// const safetyNets = [
//   {
//     id: 1,
//     name: "Dance Team",
//     users: [{ id: 1, fullName: "Anita" }, { id: 2, fullName: "Diane" }, { id: 3, fullName: "Nick" }],
//   },
//   {
//     id: 2,
//     name: "Study Group",
//     users: [{ id: 1, fullfullName: "Claudia" }, { id: 2, fullName: "Josephine" }, { id: 3, fullName: "Yilla" }],
//   },
//   {
//     id: 3,
//     name: "Roomies",
//     users: [{ id: 1, fullfullName: "Jamie" }, { id: 2, fullName: "Julian" }, { id: 3, fullName: "Jackie" }],
//   },
// ];

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
