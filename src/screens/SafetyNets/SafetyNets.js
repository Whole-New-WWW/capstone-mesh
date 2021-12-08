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

// 
// const safetyNets = [
//   {
//     id: 1,
//     name: "Dance Team",
//     contacts: [{ id: 1, name: "Anita" }, { id: 2, name: "Diane" }, { id: 3, name: "Nick" }],
//   },
//   {
//     id: 2,
//     name: "Study Group",
//     contacts: [{ id: 1, name: "Claudia" }, { id: 2, name: "Josephine" }, { id: 3, name: "Yilla" }],
//   },
//   {
//     id: 3,
//     name: "Roomies",
//     contacts: [{ id: 1, name: "Jamie" }, { id: 2, name: "Julian" }, { id: 3, name: "Jackie" }],
//   },
// ];

export default function SafetyNets(props) {
  const { user } = props.route.params;
  const safetyNets = user.safety_nets;
  const [modalDisplayed, setModalDisplayed] = useState(false);

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
            <AddButton
              onPress={() => setModalDisplayed(!modalDisplayed)} 
            >
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
