import React, { useState } from 'react'
import { Alert, Modal } from 'react-native'
import {
  Container,
  DashText,
  CircularImage,
  AddButton,
  Title,
  SmallIcon,
  FlexColumnButton,
  SmallAddButton,
  Grid,
} from '../../../styles'

export default function AddSafetyNetModal() {
  return (
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
        <FormBox>
          <TextInput
            style={{
              height: 50,
              width: '90%',
              backgroundColor: 'transparent',
            }}
            placeholder="Safety Net Name"
          >
          </TextInput>
        </FormBox>
        <FlexRowButton 
          onPress={() => setModalDisplayed(!modalDisplayed)}>
          <DashText>
            Save Safety Net
          </DashText>
        </FlexRowButton>
      </Modal>
    </>
  )
}
