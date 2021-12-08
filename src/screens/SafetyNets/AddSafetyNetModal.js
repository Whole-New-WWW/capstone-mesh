import React, { useState } from "react";
import { Alert, Modal} from "react-native";

export default function AddSafetyNetModal() {
  return (
    <>
      <Modal 
        animationType={"slide"}
        transparent={false}
        visible={visible}
        onRequestClose={() => {
          Alert.alert('Your safety net has been saved');
          
        }}
      />
    </>
  )
}
