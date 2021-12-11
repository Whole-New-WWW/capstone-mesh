import React, { useState, useEffect, useContext } from 'react'
import { Alert, Modal, ScrollView } from 'react-native'
import { firebase } from '../../firebase/config'
import { Auth, AuthContext } from '../../auth/Auth'
import {
  Container,
  ButtonListContainer,
  FlexRowButton,
  DashText,
  CircularImage,
  AddButton,
  SmallAddButton,
  Title,
  SmallIcon,
  TextInput,
  Button,
  ButtonText,
  InvertButton,
} from '../../../styles'
import { Image } from 'react-native'

export default function SafetyNets(props) {
  const { user, setUser } = useContext(AuthContext)
  const [safetyNet, setSafetyNet] = useState('')
  const [safetyNets, setSafetyNets] = useState(user.safety_nets)
  const [modalDisplayed, setModalDisplayed] = useState(false)

  console.log('SAFETY NET>>>', props)

  // Should we consider making a query to our database here to access user data for this component?

  async function onSubmit() {
    try {
      const updateSafetyNetRef = await firebase
        .firestore()
        .collection('users')
        .doc(user.id)
      updateSafetyNetRef.update({
        safety_nets: firebase.firestore.FieldValue.arrayUnion({
          name: safetyNet,
        }),
      })
      setUser({ ...user, safety_nets: [...safetyNets, { name: safetyNet }] })
      setSafetyNets([...safetyNets, { name: safetyNet }])
    } catch (error) {
      console.log('Problem accessing safety net!', error)
    }
  }

  function onclick() {
    setModalDisplayed(!modalDisplayed)
    if (safetyNet !== '') {
      onSubmit()
    }
  }

  return (
    <Container>
      <ScrollView>
        {/* {console.log('HERE ARE THE PROPS', props.route.params)} */}
        <CircularImage>
          <Image
            source={require('../../../assets/icons/friends.png')}
            style={{ width: 75, height: 75, alignSelf: 'center' }}
          />
        </CircularImage>
        {!safetyNets ? (
          <Container>
            <Title>You have no Safety Nets! Add some below!</Title>
            <Modal
              animationType={'slide'}
              transparent={false}
              visible={modalDisplayed}
              onRequestClose={() => {
                Alert.alert('Your safety net has been saved')
                setModalDisplayed(!modalDisplayed)
              }}
            >
              <AddButton onPress={() => setModalDisplayed(true)}>
                <SmallIcon source={require('../../../assets/icons/plus.png')} />
                <DashText>Add New Safety Net</DashText>
              </AddButton>
            </Modal>
          </Container>
        ) : (
          <>
            <Modal
              animationType={'slide'}
              transparent={false}
              visible={modalDisplayed}
              onRequestClose={() => {
                Alert.alert('Your safety net has been saved')
                setModalDisplayed(!modalDisplayed)
              }}
            >
              <Container
                style={{
                  // height: 20,
                  justifyContent: 'center',
                }}
              >
                <TextInput
                  style={{ height: 60 }}
                  onChangeText={(text) => {
                    setSafetyNet(text)
                  }}
                  placeholder="Safety Net Name"
                  value={safetyNet}
                  keyboardType="default"
                ></TextInput>
                <Button
                  style={{ alignSelf: 'center', width: `85%` }}
                  onPress={() => onclick()}
                >
                  <ButtonText>Save Safety Net</ButtonText>
                </Button>
                <InvertButton
                  style={{ alignSelf: 'center', width: `85%` }}
                  onPress={() => setModalDisplayed(!modalDisplayed)}
                >
                  <DashText>Cancel</DashText>
                </InvertButton>
              </Container>
            </Modal>
            <ButtonListContainer>
              {safetyNets.map((net, index) => {
                return (
                  <FlexRowButton
                    key={index}
                    onPress={() =>
                      props.navigation.navigate('Safety Net', { net })
                    }
                  >
                    <DashText>{net.name}</DashText>
                  </FlexRowButton>
                )
              })}
              <AddButton onPress={() => setModalDisplayed(true)}>
                <SmallIcon source={require('../../../assets/icons/plus.png')} />
                <DashText>Add New Safety Net</DashText>
              </AddButton>
            </ButtonListContainer>
          </>
        )}
      </ScrollView>
    </Container>
  )
}
