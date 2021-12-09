import React, { useState, useEffect, useContext } from 'react';
import Header from '../../nav/Header';
import Footer from '../../nav/Footer';
import { Alert, Modal} from "react-native";
import { firebase } from '../../firebase/config';
import { Auth, AuthContext } from '../../nav/Auth';
import {
  Container,
  ButtonListContainer,
  FlexRowButton,
  DashText,
  CircularImage,
  AddButton,
  Title,
  SmallIcon,
  FormBox,
  TextInput,
  Button,
  ButtonText
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
  const { user, setUser } = useContext(AuthContext);
  // const { user } = props.route.params;
  // const safetyNetList = user.safety_nets;
  // const [user, setUser] = useState({});
  const [safetyNet, setSafetyNet] = useState('');
  const [safetyNets, setSafetyNets] = useState(user.safety_nets)
  const [modalDisplayed, setModalDisplayed] = useState(false);
  
  // Should we consider making a query to our database here to access user data for this component?

  async function onSubmit() {
    try {
      const updateSafetyNetRef = await firebase.firestore().collection('users').doc(user.id);
      updateSafetyNetRef.update({
        safety_nets: firebase.firestore.FieldValue.arrayUnion({name: safetyNet})
      });
      setUser({...user, safety_nets:[...safetyNets, {name: safetyNet}]})
      setSafetyNets([...safetyNets, {name: safetyNet}])
    }catch(error) {
    console.log('Problem accessing safety net!', error)
    }
  }

  function onclick() {
    setModalDisplayed(!modalDisplayed);
    onSubmit();
  }

  console.log('HERE ARE THE PROPS', props);

  return (
    <>
      <Container>
        {/* {console.log('HERE ARE THE PROPS', props.route.params)} */}
        <Header {...props}/>
        <CircularImage source={require('../../../assets/icons/friends.png')}/>
        {!safetyNets && !safetyNets.length ? (
          <Container>
            <Title>
              You have no Safety Nets! Add some below!
            </Title>
          </Container>
        ) : (
          <>
            <Modal
              animationType={"slide"}
              transparent={false}
              visible={modalDisplayed}
              onRequestClose={() => {
                Alert.alert('Your safety net has been saved');
                setModalDisplayed(!modalDisplayed);
              }}
            >
              <Container>
                <TextInput
                  onChangeText={(text) => {setSafetyNet(text)}}
                  placeholder="Safety Net Name"
                  value={safetyNet}
                  keyboardType='default'
                >
                </TextInput>
              </Container>
              <Button
                onPress={() => onclick()}
              >
                <ButtonText>
                  Save Safety Net
                </ButtonText>
              </Button>
            </Modal>
            <ButtonListContainer>
              {safetyNets.map((net, index) => {
                
                return (
                  <FlexRowButton 
                    key={index} 
                    onPress={() => props.navigation.navigate("Safety Net", {net})}
                  >
                    {console.log('HERE IS THE NET USERS', net.users)}
                    <DashText>
                      {net.name}
                    </DashText>
                  </FlexRowButton>
                )
              })}
              <AddButton 
                onPress={() => setModalDisplayed(true)}
              >
                <SmallIcon source={require('../../../assets/icons/plus.png')}/>
                <DashText>
                  Add New Safety Net
                </DashText>
              </AddButton>
            </ButtonListContainer>
          </>
        )}
      </Container>
      <Footer {...props} />
    </>
  )
}
