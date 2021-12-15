import React, { useState, useEffect, useContext } from 'react'
import { Alert, Modal, ScrollView } from 'react-native'
import { firebase } from '../../firebase/config'
import { AuthContext } from '../../auth/Auth'
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
  Text,
  TextInput,
  Button,
  ButtonText,
  InvertButton,
} from '../../../styles'
import { Image, View } from 'react-native'

export default function SafetyNets(props) {
  const { user, setUser } = useContext(AuthContext);
  const [safetyNet, setSafetyNet] = useState('');
  const [safetyNets, setSafetyNets] = useState(user.safety_nets);
  const [modalDisplayed, setModalDisplayed] = useState(false);

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

      const updatedUser = await firebase
        .firestore()
        .collection('users')
        .doc(user.id)
        .get()
      const updatedUserData = await updatedUser.data()

      setUser(updatedUserData)
      setSafetyNets(user.safety_nets)
    } catch (error) {
      console.log('Problem accessing safety net!', error)
    }
  }

  useEffect(() => {
    async function fetchUser() {
      try {
        const updatedUser = await firebase
          .firestore()
          .collection('users')
          .doc(user.id)
          .get()
        const updatedUserData = await updatedUser.data()
        setUser(updatedUserData)
        setSafetyNets(user.safety_nets)
      } catch (error) {
        console.log('Problem accessing user!', error)
      }
    }
    fetchUser()
  }, [])

  function onclick() {
    setModalDisplayed(!modalDisplayed)
    if (safetyNet !== '') {
      onSubmit()
    }
  }

  return (
    <Container>
      <CircularImage>
        <Image
          source={require('../../../assets/icons/friends.png')}
          style={{ width: 75, height: 75, alignSelf: 'center' }}
        />
      </CircularImage>
      {!safetyNets ? (
        <>
          <Container>
            <Title>You have no Safety Nets! Add some below!</Title>
          </Container>
          <AddButton onPress={() => setModalDisplayed(true)} style={{alignSelf: 'center'}}>
            <SmallIcon source={require('../../../assets/icons/plus.png')} />
            <DashText>Add New Safety Net</DashText>
          </AddButton>
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
                style={{
                  height: 50,
                  justifyContent: 'center',
                }}
                onPress={() => onclick()}
              >
                <ButtonText>Save Safety Net</ButtonText>
              </Button>
              <SmallAddButton
                style={{ alignSelf: 'center' }}
                onPress={() => setModalDisplayed(!modalDisplayed)}
              >
                <DashText>Cancel</DashText>
              </SmallAddButton>
            </Container>
          </Modal>
        </>
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
                justifyContent: 'center',
              }}
            >
              <Title>Add a New Safety Net</Title>
              <Text>Name</Text>
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
          <ScrollView>
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
            </ButtonListContainer>
          </ScrollView>
          <View style={{ alignSelf: 'center' }}>
            <AddButton onPress={() => setModalDisplayed(true)}>
              <SmallIcon source={require('../../../assets/icons/plus.png')} />
              <DashText>Add New Safety Net</DashText>
            </AddButton>
          </View>
        </>
      )}
    </Container>
  )
}
