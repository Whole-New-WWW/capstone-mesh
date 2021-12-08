import React, { useState } from 'react';
import Header from '../../nav/Header';
import Footer from '../../nav/Footer';
import { Alert, Modal} from "react-native";
import { firebase } from '../../firebase/config';
import { useEffect } from 'react';
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
  // const { user } = props.route.params;
  // const safetyNets = user.safety_nets;
  const [user, setUser] = useState({});
  const [safetyNet, setSafetyNet] = useState({});
  const [safetyNets, setSafetyNets] = useState([])
  const [modalDisplayed, setModalDisplayed] = useState(false);
  
  useEffect(() => {
    setUser() 
  }, [user])
  
  async function onSubmit() {
    try {
      const updateSafetyNetRef = await firebase.firestore().collection('users').doc(user.id);
      updateSafetyNetRef.update({
        safety_nets: firebase.firestore.FieldValue.arrayUnion({name: safetyNet})
      });
      setSafetyNets(user.safety_nets)
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
              <FormBox>
                <TextInput
                  style={{
                    height: 20,
                    width: "90%",
                    // backgroundColor: "transparent",
                  }}
                  onChangeText={(text) => {setSafetyNet(text)}}
                  placeholder="Safety Net Name"
                  value={safetyNet}
                  keyboardType='default'
                >
                </TextInput>
              </FormBox>
              <Button
                onPress={() => onclick()}
              >
                <ButtonText>
                  Save Safety Net
                </ButtonText>
              </Button>
            </Modal>
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
